import { BezierCurve } from "../../geometry/bezier/curve";
import { Point } from "../../geometry/point";
import { finalizeUndoContext, redo, undo, undoContext } from "../../undo/history";
import { lerp, unlerp } from "../../utils/lerp";
import { BezierContext } from "../context/bezier";
import { IContext } from "../context/context";
import { IDrawableHandle } from "../drawable";
import { IGuide } from "../guides/guide";
import { HandleGuide } from "../guides/point";
import { BezierBasePointHandle } from "../handles/bezierBasePoint";
import { BezierControlPointHandle } from "../handles/bezierControlPoint";
import { Viewport } from "../viewport";
import { ITool, ToolSubAction } from "./tool";

export class HandleTool implements ITool {
    public name = "Curve edit"
    public icon = "handletool"
    public accelerator = "A"

    private selecting = false
    private selectionOrigin: Point
    private selectionTarget: Point

    private pivotHandle: IDrawableHandle

    public handles: IDrawableHandle[] = []
    public guides: IGuide[] = []
    public supportsForeignHandles = true

    private moveStartPoint: Point
    private moveLastPoint: Point

    public subactions: ToolSubAction[][] = [
        [
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
                name: "Invert selection",
                icon: "invertsel",
                accelerator: "^KeyD",
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
        ],
        [
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
        ],
        [
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

                    selected.forEach(handle => {
                        handle.position.x = (bbox.left + bbox.right) / 2
                    })

                    finalizeUndoContext("Align to middle")
                }
            }
        ]
    ]

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

    restrictAngles(pos: Point, e: MouseEvent) {
        const dx = Math.abs(pos.x - this.moveStartPoint.x)
        const dy = Math.abs(pos.y - this.moveStartPoint.y)

        if (e.shiftKey) {
            if (dx > dy)
                pos.y = this.moveStartPoint.y
            else
                pos.x = this.moveStartPoint.x
        }
    }

    handleMouseEvent(v: Viewport, e: MouseEvent, x: number, y: number) {
        const pos = v.co.clientToWorld(
            x, y
        )

        if (this.moveStartPoint) this.restrictAngles(pos, e)

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

                this.moveStartPoint = pos
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
        if (!(context instanceof BezierContext)) return

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