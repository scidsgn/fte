import { Point } from "../../geometry/point"
import { IDrawableHandle } from "../drawable"
import { Viewport } from "../viewport"

export class BasicPointHandle implements IDrawableHandle {
    public hitRadius = 10
    public selected = false
    public type = "BasicPointHandle"
    
    constructor(
        private point: Point
    ) {}

    get position() {
        return this.point
    }

    move(
        v: Viewport, dx: number, dy: number, pivot: IDrawableHandle
    ) {
        v.co.moveInClientDx(this.point, dx, dy)
    }

    render(v: Viewport, ctx: CanvasRenderingContext2D) {
        ctx.fillStyle = "#00f"
        ctx.fillRect(-3, -3, 7, 7)
        ctx.fillStyle = this.selected ? "#00f" : "#fff"
        ctx.fillRect(-2, -2, 5, 5)
    }
}