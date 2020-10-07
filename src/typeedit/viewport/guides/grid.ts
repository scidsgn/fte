import { Point } from "../../geometry/point";
import { Viewport } from "../viewport";
import { IGuide } from "./guide";

export class GridGuide implements IGuide {
    public active = false
    private lastPoint = new Point(
        -100000, -100000
    )

    constructor(
        private gap: number
    ) {}

    nudge(v: Viewport, pos: Point, obj?: any) {
        const target = new Point(
            Math.round(pos.x / this.gap) * this.gap,
            Math.round(pos.y / this.gap) * this.gap
        )
        const delta = 8 / v.co.scaleFactor

        this.active = false

        if (Math.abs(pos.x - target.x) < delta) {
            pos.x = target.x

            this.lastPoint.x = target.x
            this.lastPoint.y = -100000
            
            this.active = true
        }
        if (Math.abs(pos.y - target.y) < delta) {
            pos.y = target.y

            this.lastPoint.x = -100000
            this.lastPoint.y = target.y

            this.active = true
        }
    }

    render(v: Viewport, ctx: CanvasRenderingContext2D) {
        const minXY = v.co.clientToWorld(0, 0)
        const maxXY = v.co.clientToWorld(
            v.domCanvas.width, v.domCanvas.height
        )

        minXY.x = Math.round(minXY.x / this.gap) * this.gap
        minXY.y = Math.round(minXY.y / this.gap) * this.gap
        maxXY.x = Math.round(maxXY.x / this.gap) * this.gap
        maxXY.y = Math.round(maxXY.y / this.gap) * this.gap

        ctx.beginPath()

        for (let x = minXY.x; x <= maxXY.x; x += this.gap) {
            const client = v.co.worldToClient(x, 0)

            ctx.moveTo(Math.round(client.x) + 0.5, -9999)
            ctx.lineTo(Math.round(client.x) + 0.5, 9999)
        }
        for (let y = minXY.y; y <= maxXY.y; y += this.gap) {
            const client = v.co.worldToClient(0, y)

            ctx.moveTo(-9999, Math.round(client.y) + 0.5)
            ctx.lineTo(9999, Math.round(client.y) + 0.5)
        }
        
        ctx.strokeStyle = "#3332"
        ctx.lineWidth = 1
        ctx.stroke()
        
    }
}