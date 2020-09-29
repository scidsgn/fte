import { Point } from "../../geometry/point";
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

    public subactions: ToolSubAction[] = [
        {
            name: "Flip X",
            icon: "flipx",
            accelerator: "",
            handler: () => {
                const selected = this.handles.filter(h => h.selected)
                const bbox = this.getHandlesBBox(selected)

                selected.forEach(handle => {
                    handle.position.x = lerp(
                        1 - unlerp(handle.position.x, bbox.left, bbox.right),
                        bbox.left, bbox.right
                    )
                })
            }
        },
        {
            name: "Flip Y",
            icon: "flipy",
            accelerator: "",
            handler: () => {
                const selected = this.handles.filter(h => h.selected)
                const bbox = this.getHandlesBBox(selected)

                selected.forEach(handle => {
                    handle.position.y = lerp(
                        1 - unlerp(handle.position.y, bbox.top, bbox.bottom),
                        bbox.top, bbox.bottom
                    )
                })
            }
        },
        {
            name: "Align to left",
            icon: "alignleft",
            accelerator: "",
            handler: () => {
                const selected = this.handles.filter(h => h.selected)
                const bbox = this.getHandlesBBox(selected)

                selected.forEach(handle => {
                    handle.position.x = bbox.left
                })
            }
        },
        {
            name: "Align to right",
            icon: "alignright",
            accelerator: "",
            handler: () => {
                const selected = this.handles.filter(h => h.selected)
                const bbox = this.getHandlesBBox(selected)

                selected.forEach(handle => {
                    handle.position.x = bbox.right
                })
            }
        },
        {
            name: "Align to top",
            icon: "aligntop",
            accelerator: "",
            handler: () => {
                const selected = this.handles.filter(h => h.selected)
                const bbox = this.getHandlesBBox(selected)

                selected.forEach(handle => {
                    handle.position.y = bbox.top
                })
            }
        },
        {
            name: "Align to bottom",
            icon: "alignbottom",
            accelerator: "",
            handler: () => {
                const selected = this.handles.filter(h => h.selected)
                const bbox = this.getHandlesBBox(selected)

                selected.forEach(handle => {
                    handle.position.y = bbox.bottom
                })
            }
        },
        {
            name: "Align to center (horizontally)",
            icon: "alignhcenter",
            accelerator: "",
            handler: () => {
                const selected = this.handles.filter(h => h.selected)
                const bbox = this.getHandlesBBox(selected)

                selected.forEach(handle => {
                    handle.position.y = (bbox.top + bbox.bottom) / 2
                })
            }
        },
        {
            name: "Align to center (vertically)",
            icon: "alignvcenter",
            accelerator: "",
            handler: () => {
                const selected = this.handles.filter(h => h.selected)
                const bbox = this.getHandlesBBox(selected)

                selected.forEach(handle => {
                    handle.position.x = (bbox.left + bbox.right) / 2
                })
            }
        }
    ]

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
            }
        } else if (
            e.type === "mousemove" && e.buttons & 1
        ) {
            if (this.selecting) {
                this.selectionTarget = pos
            } else {
                if (!this.pivotHandle) return

                // Pivot gets moved first
                this.pivotHandle.move(
                    v, pos, e.movementX, e.movementY, this.pivotHandle, e
                )

                for (let handle of this.handles) {
                    if (
                        handle.selected &&
                        handle !== this.pivotHandle &&
                        handle.type === this.pivotHandle.type
                    )
                        handle.move(
                            v, pos, e.movementX, e.movementY, this.pivotHandle, e
                        )
                }
            }
        } else if (
            e.type === "mouseup"
        ) {
            if (this.selecting) {
                this.selectHandleBox()
                this.selecting = false
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