import { Glyph } from "../../font/glyph";
import { BezierCurve } from "../../geometry/bezier/curve";
import { Point } from "../../geometry/point";
import { ArrayAddAction, ArrayRemoveAction } from "../../undo/actions/array";
import { finalizeUndoContext, undoContext } from "../../undo/history";
import { lerp, unlerp } from "../../utils/lerp";
import { IContext } from "../context/context";
import { GlyphContext } from "../context/glyph";
import { IDrawableHandle } from "../drawable";
import { CurveGuide } from "../guides/curve";
import { IGuide } from "../guides/guide";
import { HandleGuide } from "../guides/point";
import { BezierBasePointHandle } from "../handles/bezierBasePoint";
import { BezierControlPointHandle } from "../handles/bezierControlPoint";
import { Viewport } from "../viewport";
import { ITool, ToolSubAction, ToolSubActionSection } from "./tool";

export class HandleTool implements ITool {
    public name = "Curve edit"
    public icon = "handletool"
    public accelerator = "KeyA"

    private selecting = false
    private selectionOrigin: Point
    private selectionTarget: Point

    private pivotHandle: IDrawableHandle

    public handles: IDrawableHandle[] = []
    public guides: IGuide[] = []
    public supportsForeignHandles = true

    private moveStartPoint: Point
    private moveLastPoint: Point

    private glyph: Glyph
    private beziers: BezierCurve[] = []

    public subactions: ToolSubActionSection[] = [
        {
            name: "Edit",
            subactions: [
                {
                    name: "Delete",
                    icon: "delete",
                    accelerator: "Delete",
                    handler: () => {
                        const selected = this.handles.filter(h => h.selected)
                        const curves = this.getSelectedCurves()
    
                        selected.forEach(
                            handle => {
                                if (!(handle instanceof BezierBasePointHandle))
                                    return
                                
                                const point = handle.point
                                const index = point.curve.points.indexOf(point)
    
                                point.curve.points.splice(index, 1)
    
                                const cpHandles = this.handles.filter(
                                    h => h instanceof BezierControlPointHandle &&
                                         h.point === point
                                ) // length always = 2
    
                                const hIndex = this.handles.indexOf(handle)
                                this.handles.splice(hIndex, 1)
    
                                const cpIndex0 = this.handles.indexOf(cpHandles[0])
                                this.handles.splice(cpIndex0, 1)
    
                                const cpIndex1 = this.handles.indexOf(cpHandles[1])
                                this.handles.splice(cpIndex1, 1)
    
                                
                                undoContext.addAction(
                                    new ArrayRemoveAction(
                                        point.curve.points, point,
                                        index
                                    ),
                                    new ArrayRemoveAction(
                                        this.handles, handle,
                                        hIndex
                                    ),
                                    new ArrayRemoveAction(
                                        this.handles, cpHandles[0],
                                        cpIndex0
                                    ),
                                    new ArrayRemoveAction(
                                        this.handles, cpHandles[1],
                                        cpIndex1
                                    )
                                )
                            }
                        )
    
                        finalizeUndoContext("Delete points")
                    }
                },
                {
                    name: "Reverse direction",
                    icon: "reversecurve",
                    accelerator: "KeyR",
                    handler: () => {
                        this.getSelectedCurves().forEach(
                            c => c.reverse()
                        )
                    }
                }
            ]
        },
        {
            name: "Select",
            subactions: [
                {
                    name: "Select all",
                    icon: "allsel",
                    accelerator: "^KeyA",
                    handler: () => {
                        this.handles.forEach(
                            handle => handle.selected = true
                        )
                    }
                },
                {
                    name: "Deselect all",
                    icon: "removesel",
                    accelerator: "^KeyD",
                    handler: () => {
                        this.handles.forEach(
                            handle => handle.selected = false
                        )
                    }
                },
                {
                    name: "Invert selection",
                    icon: "invertsel",
                    accelerator: "^KeyI",
                    handler: () => {
                        this.handles.forEach(
                            handle => handle.selected = !handle.selected
                        )
                    }
                },
                {
                    name: "Select connected",
                    icon: "curvesel",
                    accelerator: "^KeyL",
                    handler: () => {
                        const curves = this.getSelectedCurves()
    
                        for (let bezier of curves) {
                            for (let point of bezier.points) {
                                const handle = this.handles.find(
                                    h => h instanceof BezierBasePointHandle &&
                                         h.point === point
                                )
                                if (handle) handle.selected = true
                            }
                        }
                    }
                }
            ]
        },
        {
            name: "Construct",
            collapse: true,
            subactions: [
                {
                    name: "Union",
                    icon: "union",
                    accelerator: "",
                    handler: () => {
                        this.performCSGOperation(
                            (out, item) => out.unite(item, {
                                insert: false
                            })
                        )
    
                        finalizeUndoContext("Union")
                    }
                },
                {
                    name: "Difference",
                    icon: "difference",
                    accelerator: "",
                    handler: () => {
                        this.performCSGOperation(
                            (out, item) => out.subtract(item, {
                                insert: false
                            })
                        )
    
                        finalizeUndoContext("Difference")
                    }
                },
                {
                    name: "Intersection",
                    icon: "intersection",
                    accelerator: "",
                    handler: () => {
                        this.performCSGOperation(
                            (out, item) => out.intersect(item, {
                                insert: false
                            })
                        )
    
                        finalizeUndoContext("Intersection")
                    }
                },
                {
                    name: "Exclusion",
                    icon: "xor",
                    accelerator: "",
                    handler: () => {
                        this.performCSGOperation(
                            (out, item) => out.exclude(item, {
                                insert: false
                            })
                        )
    
                        finalizeUndoContext("Exclusion")
                    }
                }
            ]
        },
        {
            name: "Transform",
            collapse: true,
            subactions: [
                {
                    name: "Flip X",
                    icon: "flipx",
                    accelerator: "",
                    handler: () => {
                        const selected = this.handles.filter(h => h.selected)
                        const bbox = this.getHandlesBBox(selected)
    
                        this.addHandlesToUndoContext(selected)
    
                        selected.forEach(handle => {
                            handle.position.x = lerp(
                                1 - unlerp(handle.position.x, bbox.left, bbox.right),
                                bbox.left, bbox.right
                            )
                        })
    
                        finalizeUndoContext("Flip X")
                    }
                },
                {
                    name: "Flip Y",
                    icon: "flipy",
                    accelerator: "",
                    handler: () => {
                        const selected = this.handles.filter(h => h.selected)
                        const bbox = this.getHandlesBBox(selected)
    
                        this.addHandlesToUndoContext(selected)
    
                        selected.forEach(handle => {
                            handle.position.y = lerp(
                                1 - unlerp(handle.position.y, bbox.top, bbox.bottom),
                                bbox.top, bbox.bottom
                            )
                        })
    
                        finalizeUndoContext("Flip Y")
                    }
                }
            ]
        },
        {
            name: "Alignment",
            collapse: true,
            subactions: [
                {
                    name: "Align to left",
                    icon: "alignleft",
                    accelerator: "",
                    handler: () => {
                        const selected = this.handles.filter(h => h.selected)
                        const bbox = this.getHandlesBBox(selected)
    
                        this.addHandlesToUndoContext(selected)
    
                        selected.forEach(handle => {
                            handle.position.x = bbox.left
                        })
    
                        finalizeUndoContext("Align to left")
                    }
                },
                {
                    name: "Align to right",
                    icon: "alignright",
                    accelerator: "",
                    handler: () => {
                        const selected = this.handles.filter(h => h.selected)
                        const bbox = this.getHandlesBBox(selected)
    
                        this.addHandlesToUndoContext(selected)
    
                        selected.forEach(handle => {
                            handle.position.x = bbox.right
                        })
    
                        finalizeUndoContext("Align to right")
                    }
                },
                {
                    name: "Align to top",
                    icon: "aligntop",
                    accelerator: "",
                    handler: () => {
                        const selected = this.handles.filter(h => h.selected)
                        const bbox = this.getHandlesBBox(selected)
    
                        this.addHandlesToUndoContext(selected)
    
                        selected.forEach(handle => {
                            handle.position.y = bbox.top
                        })
    
                        finalizeUndoContext("Align to top")
                    }
                },
                {
                    name: "Align to bottom",
                    icon: "alignbottom",
                    accelerator: "",
                    handler: () => {
                        const selected = this.handles.filter(h => h.selected)
                        const bbox = this.getHandlesBBox(selected)
    
                        this.addHandlesToUndoContext(selected)
    
                        selected.forEach(handle => {
                            handle.position.y = bbox.bottom
                        })
    
                        finalizeUndoContext("Align to bottom")
                    }
                },
                {
                    name: "Align to center",
                    icon: "alignhcenter",
                    accelerator: "",
                    handler: () => {
                        const selected = this.handles.filter(h => h.selected)
                        const bbox = this.getHandlesBBox(selected)
    
                        this.addHandlesToUndoContext(selected)
    
                        selected.forEach(handle => {
                            handle.position.y = (bbox.top + bbox.bottom) / 2
                        })
    
                        finalizeUndoContext("Align to center")
                    }
                },
                {
                    name: "Align to middle",
                    icon: "alignvcenter",
                    accelerator: "",
                    handler: () => {
                        const selected = this.handles.filter(h => h.selected)
                        const bbox = this.getHandlesBBox(selected)
    
                        this.addHandlesToUndoContext(selected)
    
                        selected.forEach(handle => {
                            handle.position.x = (bbox.left + bbox.right) / 2
                        })
    
                        finalizeUndoContext("Align to middle")
                    }
                }
            ]
        },
        {
            name: "DEV",
            subactions: [
                {
                    name: "Quadraticize",
                    icon: "code",
                    accelerator: "",
                    handler: () => {
                        this.beziers.forEach(
                            b => b.segments.forEach(
                                seg => seg.splitToQuadratic()
                            )
                        )
                        // const splitBeziers = this.beziers.map(
                        //     b => BezierCurve.fromSegments(
                        //         b.segments.map(
                        //             seg => seg.split(0.5)
                        //         ).flat(),
                        //         b.glyph
                        //     )
                        // )

                        // console.log(splitBeziers)

                        // this.glyph.beziers = splitBeziers
                        // this.glyph.updateBeziers()
                        // this.beziers = this.glyph.beziers
                    }
                }
            ]
        }
    ]

    public settingsPanel: HTMLElement[] = null

    private performCSGOperation(
        operation: (
            out: paper.PathItem, current: paper.PathItem
        ) => paper.PathItem
    ) {
        const curves = this.getSelectedCurves()
        if (!curves.length) return

        const targetWinding = curves[0].clockwise

        const paperPaths = curves.map(
            c => c.getPaperPath()
        )
        let out: paper.PathItem = paperPaths[0]

        let insertIdx = Math.min(
            ...curves.map(c => this.beziers.indexOf(c))
        )

        for (let i = 1; i < paperPaths.length; i++) {
            out = operation(out, paperPaths[i])
        }

        const newCurves = BezierCurve.fromPaperPathItem(out)
        if (newCurves.length) {
            const referenceWinding = newCurves[0].clockwise

            newCurves.forEach(
                c => {
                    c.glyph = this.glyph
                    c.simplify()

                    if (referenceWinding !== targetWinding)
                        c.reverse()

                    this.beziers.splice(insertIdx, 0, c)
                    undoContext.addAction(
                        new ArrayAddAction(
                            this.beziers, c, insertIdx
                        )
                    )

                    const gIdx = this.guides.length
                    const guide = new CurveGuide(c)
                    
                    this.guides.push(guide)
                    undoContext.addAction(
                        new ArrayAddAction(
                            this.guides, guide, gIdx
                        )
                    )

                    c.points.forEach(
                        p => {
                            const index = this.handles.length

                            this.handles.push(
                                new BezierControlPointHandle(
                                    p, p.before
                                ),
                                new BezierControlPointHandle(
                                    p, p.after
                                ),
                                new BezierBasePointHandle(
                                    p
                                )
                            )

                            undoContext.addAction(
                                new ArrayAddAction(
                                    this.handles, this.handles[index],
                                    index
                                ),
                                new ArrayAddAction(
                                    this.handles, this.handles[index + 1],
                                    index + 1
                                ),
                                new ArrayAddAction(
                                    this.handles, this.handles[index + 2],
                                    index + 2
                                )
                            )
                        }
                    )

                    insertIdx++
                }
            )
        }

        curves.forEach(
            c => {
                const index = this.beziers.indexOf(c)
                this.beziers.splice(index, 1)

                undoContext.addAction(
                    new ArrayRemoveAction(
                        this.beziers, c, index
                    )
                )

                const gIdx = this.guides.findIndex(
                    g => g instanceof CurveGuide &&
                         g.source === c
                )
                this.guides.splice(gIdx, 1)

                undoContext.addAction(
                    new ArrayRemoveAction(
                        this.guides, this.guides[gIdx],
                        gIdx
                    )
                )

                this.handles.filter(
                    h => (h instanceof BezierBasePointHandle ||
                         h instanceof BezierControlPointHandle) &&
                         h.point.curve === c
                ).forEach(
                    h => {
                        const index = this.handles.indexOf(h)
                        this.handles.splice(index, 1)

                        undoContext.addAction(
                            new ArrayRemoveAction(
                                this.handles, h, index
                            )
                        )
                    }
                )
            }
        )

        this.glyph.emit("modifier")
    }

    private addHandlesToUndoContext(handles: IDrawableHandle[]) {
        handles.forEach(
            handle => {
                if (!("prepareUndo" in handle)) return
                handle.prepareUndo(undoContext)
            }
        )
    }

    private getHandlesBBox(handles: IDrawableHandle[]): {
        left: number, top: number,
        right: number, bottom: number
    } {
        const xs = handles.map(h => h.position.x)
        const ys = handles.map(h => h.position.y)

        return {
            left: Math.min(...xs),
            top: Math.min(...ys),
            right: Math.max(...xs),
            bottom: Math.max(...ys)
        }
    }

    private selectHandleBox(exclusive = true) {
        const left = Math.min(
            this.selectionOrigin.x, this.selectionTarget.x
        )
        const right = Math.max(
            this.selectionOrigin.x, this.selectionTarget.x
        )
        const top = Math.min(
            this.selectionOrigin.y, this.selectionTarget.y
        )
        const bottom = Math.max(
            this.selectionOrigin.y, this.selectionTarget.y
        )

        for (let handle of this.handles) {
            const selected = handle.position.x >= left &&
                             handle.position.x < right &&
                             handle.position.y >= top &&
                             handle.position.y < bottom

            if (exclusive)
                handle.selected = selected
            else
                handle.selected = selected || handle.selected
        }
    }

    private getSelectedCurves(): BezierCurve[] {
        const curves: BezierCurve[] = []
        
        for (let handle of this.handles) {
            if (
                !handle.selected ||
                !(handle instanceof BezierBasePointHandle)
            )
                continue
            
            if (!curves.includes(handle.point.curve))
                curves.push(handle.point.curve)
        }

        return curves
    }

    handleMouseEvent(v: Viewport, e: MouseEvent, x: number, y: number) {
        const pos = v.co.clientToWorld(
            x, y
        )

        if (this.moveStartPoint) {
            v.restrictAngles(this.moveStartPoint, pos, e)
        }

        if (
            e.type === "mousedown" && e.buttons & 1
        ) {
            const handle = v.nearHandle(pos.x, pos.y)
            if (!handle) {
                this.pivotHandle = null
                v.selectHandles([], !e.shiftKey)

                this.selecting = true
                this.selectionOrigin = pos
                this.selectionTarget = pos
            } else {
                this.pivotHandle = handle
                if (!handle.selected) {
                    v.selectHandles([handle], !e.shiftKey)
                }

                this.addHandlesToUndoContext(
                    v.getSelectedHandles()
                )
                

                // First movement - snapping to the cursor
                // const dPos = pos.getDiff(this.pivotHandle.position)
                // this.pivotHandle.move(
                //     v, pos, dPos, this.pivotHandle, e
                // )

                // for (let handle of this.handles) {
                //     if (
                //         handle.selected &&
                //         handle !== this.pivotHandle &&
                //         handle.type === this.pivotHandle.type
                //     )
                //         handle.move(
                //             v, pos, dPos, this.pivotHandle, e
                //         )
                // }

                this.moveStartPoint = new Point()
                this.moveStartPoint.copy(this.pivotHandle.position)
                this.moveLastPoint = pos
            }
        } else if (
            e.type === "mousemove" && e.buttons & 1
        ) {
            if (this.selecting) {
                this.selectionTarget = pos
            } else {
                if (!this.pivotHandle) return

                const rawX = pos.x, rawY = pos.y
                v.nudgePoint(pos, this.pivotHandle)

                const inPointDiff = this.moveLastPoint.getDiff(
                    this.pivotHandle.position
                )

                const dPos = pos.getDiff(this.moveLastPoint)
                this.moveLastPoint = pos

                if (rawX !== pos.x || rawY !== pos.y) {
                    // Center on cursor when snapping happens
                    pos.x -= inPointDiff.x
                    pos.y -= inPointDiff.y
                }

                // Pivot gets moved first
                this.pivotHandle.move(
                    v, pos, dPos, this.pivotHandle, e
                )

                for (let handle of this.handles) {
                    if (
                        handle.selected &&
                        handle !== this.pivotHandle &&
                        handle.type === this.pivotHandle.type
                    )
                        handle.move(
                            v, pos, dPos, this.pivotHandle, e
                        )
                }
            }
        } else if (
            e.type === "mouseup"
        ) {
            if (this.selecting) {
                this.selectHandleBox(!e.shiftKey)
                this.selecting = false
            } else {
                v.disableAllGuides()

                if (v.getSelectedHandles().length)
                    finalizeUndoContext("Move points")
            }

            this.moveStartPoint = null
        }
    }

    render(v: Viewport, ctx: CanvasRenderingContext2D) {
        if (this.selecting) {
            ctx.fillStyle = "#08f3"
            ctx.fillRect(
                this.selectionOrigin.x,
                this.selectionOrigin.y,
                this.selectionTarget.x - this.selectionOrigin.x,
                this.selectionTarget.y - this.selectionOrigin.y
            )
        }
    }

    updateContext(context: IContext) {
        if (!(context instanceof GlyphContext)) return

        this.glyph = context.glyph
        this.beziers = context.beziers

        this.handles = []
        context.beziers.forEach(
            bezier => {
                bezier.points.forEach(
                    p => this.handles.push(
                        new BezierControlPointHandle(p, p.before),
                        new BezierControlPointHandle(p, p.after),
                        new BezierBasePointHandle(p)
                    )
                )
            }
        )

        this.guides = this.handles.filter(
            h => h instanceof BezierBasePointHandle
        ).map(
            h => new HandleGuide(h)
        )
    }
}