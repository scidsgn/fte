import { BezierPoint, BezierPointType } from "../../geometry/bezier/point"
import { IDrawableHandle } from "../drawable"
import { Viewport } from "../viewport"

export class BezierBasePointHandle implements IDrawableHandle {
    public hitRadius = 10
    public selected = false
    public type = "BezierBasePointHandle"
    
    constructor(
        private point: BezierPoint
    ) {}

    get position() {
        return this.point.base
    }

    move(
        v: Viewport, dx: number, dy: number, pivot: IDrawableHandle,
        e?: MouseEvent
    ) {
        if (e && e.ctrlKey) {
            v.co.moveInClientDx(this.point.after, dx, dy)
            if (this.point.type === BezierPointType.auto || e.altKey)
                v.co.moveInClientDx(this.point.before, -dx, -dy)
        } else {
            v.co.moveInClientDx(this.point.base, dx, dy)
            v.co.moveInClientDx(this.point.before, dx, dy)
            v.co.moveInClientDx(this.point.after, dx, dy)
        }
    }

    render(v: Viewport, ctx: CanvasRenderingContext2D) {
        ctx.fillStyle = "#00f"
        ctx.fillRect(-3, -3, 7, 7)
        ctx.fillStyle = this.selected ? "#00f" : "#fff"
        ctx.fillRect(-2, -2, 5, 5)
    }
}