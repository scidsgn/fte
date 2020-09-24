import { Point } from "../geometry/point"

export class ViewportCoordinates {
    public dx = 0
    public dy = 0

    // dx, dy in screen coordinates
    translate(dx: number, dy: number) {
        this.dx += dx
        this.dy += dy
    }

    transformCanvas(ctx: CanvasRenderingContext2D) {
        ctx.translate(this.dx, this.dy)
    }

    clientToWorld(x: number, y: number) {
        return {
            x: x - this.dx,
            y: y - this.dy
        }
    }

    worldToClient(x: number, y: number) {
        return {
            x: x + this.dx,
            y: y + this.dy
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