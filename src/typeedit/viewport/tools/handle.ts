import { Point } from "../../geometry/point";
import { BezierContext } from "../context/bezier";
import { IContext } from "../context/context";
import { IDrawableHandle } from "../drawable";
import { BezierBasePointHandle } from "../handles/bezierBasePoint";
import { BezierControlPointHandle } from "../handles/bezierControlPoint";
import { Viewport } from "../viewport";
import { ITool } from "./tool";

export class HandleTool implements ITool {
    private selecting = false
    private selectionOrigin: Point
    private selectionTarget: Point

    private pivotHandle: IDrawableHandle

    public handles: IDrawableHandle[] = []

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
            const handle = v.nearHandle(this.handles, pos.x, pos.y)
            if (!handle) {
                this.pivotHandle = null
                v.selectHandles(this.handles, [])

                this.selecting = true
                this.selectionOrigin = pos
                this.selectionTarget = pos
            } else {
                this.pivotHandle = handle
                if (!handle.selected) {
                    v.selectHandles(this.handles, [handle])
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
                    v, e.movementX, e.movementY, this.pivotHandle
                )

                for (let handle of v.handles) {
                    if (
                        handle.selected &&
                        handle !== this.pivotHandle &&
                        handle.type === this.pivotHandle.type
                    )
                        handle.move(
                            v, e.movementX, e.movementY, this.pivotHandle
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