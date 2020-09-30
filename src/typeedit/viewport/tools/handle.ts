import { Point } from "../../geometry/point";
import { finalizeUndoContext, redo, undo, undoContext } from "../../undo/history";
import { lerp, unlerp } from "../../utils/lerp";
import { BezierContext } from "../context/bezier";
import { IContext } from "../context/context";
import { IDrawableHandle } from "../drawable";
import { BezierBasePointHandle } from "../handles/bezierBasePoint";
import { BezierControlPointHandle } from "../handles/bezierControlPoint";
import { Viewport } from "../viewport";
import { ITool, ToolSubAction } from "./tool";

export class HandleTool implements ITool {
    private selecting = false
    private selectionOrigin: Point
    private selectionTarget: Point

    private pivotHandle: IDrawableHandle

    public handles: IDrawableHandle[] = []
    public supportsForeignHandles = true

    private moveStartPoint: Point
    private moveLastPoint: Point

    public subactions: ToolSubAction[] = [
        {
            name: "Undo",
            icon: "rotateleft",
            accelerator: "",
            handler: () => {
                undo()
            }
        },
        {
            name: "Redo",
            icon: "rotateright",
            accelerator: "",
            handler: () => {
                redo()
            }
        },
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
        },
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

    private selectHandleBox() {
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
            handle.selected = selected
        }
    }

    handleMouseEvent(v: Viewport, e: MouseEvent, x: number, y: number) {
        const pos = v.co.clientToWorld(
            x, y
        )

        if (
            e.type === "mousedown" && e.buttons & 1
        ) {
            const handle = v.nearHandle(pos.x, pos.y)
            if (!handle) {
                this.pivotHandle = null
                v.selectHandles([])

                this.selecting = true
                this.selectionOrigin = pos
                this.selectionTarget = pos
            } else {
                this.pivotHandle = handle
                if (!handle.selected) {
                    v.selectHandles([handle])
                }

                this.addHandlesToUndoContext(
                    v.getSelectedHandles()
                )

                // First movement - snapping to the cursor
                const dPos = pos.getDiff(this.pivotHandle.position)
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

                v.nudgePoint(pos)

                const dPos = pos.getDiff(this.moveLastPoint)
                this.moveLastPoint = pos

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
                this.selectHandleBox()
                this.selecting = false
            } else {
                v.disableAllGuides()
                finalizeUndoContext("Move points")
            }
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
    }
}