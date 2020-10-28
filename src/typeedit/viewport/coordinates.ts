import { Point } from "../geometry/point"
import { displayScalingFactor } from "../utils/canvas"

export class ViewportCoordinates {
    public dx = 0
    public dy = 0
    public scaleFactor = 1

    // dx, dy in screen coordinates
    translate(dx: number, dy: number) {
        this.dx += dx
        this.dy += dy
    }

    scale(factor: number, ox: number, oy: number) {
        const newScale = this.scaleFactor * factor

        this.dx = this.dx + this.scaleFactor * ox - newScale * ox
        this.dy = this.dy + this.scaleFactor * oy - newScale * oy

        this.scaleFactor = newScale
    }

    transformCanvas(ctx: CanvasRenderingContext2D) {
        ctx.translate(this.dx, this.dy)
        ctx.scale(this.scaleFactor, this.scaleFactor)
    }

    clientToWorld(x: number, y: number, scaleHiDPI = true): Point {
        let dpiFactor = scaleHiDPI ? displayScalingFactor : 1
        return new Point(
            (x / dpiFactor - this.dx) / this.scaleFactor,
            (y / dpiFactor - this.dy) / this.scaleFactor
        )
    }

    worldToClient(x: number, y: number, scaleHiDPI = true) {
        let dpiFactor = scaleHiDPI ? displayScalingFactor : 1

        return {
            x: (x * this.scaleFactor + this.dx) * dpiFactor,
            y: (y * this.scaleFactor + this.dy) * dpiFactor
        }
    }

    moveInClientDx(point: Point, dx: number, dy: number) {
        const pos = this.worldToClient(point.x, point.y)
        pos.x += dx
        pos.y += dy

        const {x, y} = this.clientToWorld(pos.x, pos.y)
        point.x = x
        point.y = y
    }
}