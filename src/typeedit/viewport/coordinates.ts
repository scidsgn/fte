import { Point } from "../geometry/point"

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

    clientToWorld(x: number, y: number) {
        return {
            x: (x - this.dx) / this.scaleFactor,
            y: (y - this.dy) / this.scaleFactor
        }
    }

    worldToClient(x: number, y: number) {
        return {
            x: x * this.scaleFactor + this.dx,
            y: y * this.scaleFactor + this.dy
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