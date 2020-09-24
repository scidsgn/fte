import { IDrawable } from "../viewport/drawable"
import { Viewport } from "../viewport/viewport"
import { Point } from "./point"

export class Polygon implements IDrawable {
    public points: Point[] = []

    addPoint(point: Point) {
        this.points.push(point)
    }

    render(v: Viewport, ctx: CanvasRenderingContext2D) {
        let first = true

        ctx.beginPath()
        for (let point of this.points) {
            if (first)
                ctx.moveTo(point.x, point.y)
            else
                ctx.lineTo(point.x, point.y)

            first = false
        }
        ctx.closePath()
        ctx.fillStyle = "#00f3"
        ctx.fill()
        ctx.strokeStyle = "#08f"
        ctx.stroke()
    }
}