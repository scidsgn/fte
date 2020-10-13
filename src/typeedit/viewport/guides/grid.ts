import { Point } from "../../geometry/point";
import { getThemeColor } from "../../ui/theme";
import { Viewport } from "../viewport";
import { IGuide } from "./guide";

export class GridGuide implements IGuide {
    public active = false
    private lastPoint = new Point(
        -100000, -100000
    )

    constructor(
        private baseGap: number
    ) {}

    calculateGap(v: Viewport) {
        let clientGap = this.baseGap * v.co.scaleFactor

        while (clientGap < 12) {
            clientGap *= 2
        }

        return clientGap / v.co.scaleFactor
    }

    nudge(v: Viewport, pos: Point, obj?: any) {
        const gap = this.calculateGap(v)

        const target = new Point(
            Math.round(pos.x / gap) * gap,
            Math.round(pos.y / gap) * gap
        )
        const delta = 8 / v.co.scaleFactor

        this.active = false

        this.lastPoint.x = NaN
        this.lastPoint.y = NaN

        if (Math.abs(pos.x - target.x) < delta) {
            pos.x = target.x

            this.lastPoint.x = target.x
            this.active = true
        }
        if (Math.abs(pos.y - target.y) < delta) {
            pos.y = target.y

            this.lastPoint.y = target.y
            this.active = true
        }
    }

    render(v: Viewport, ctx: CanvasRenderingContext2D) {
        const gap = this.calculateGap(v)

        const minXY = v.co.clientToWorld(0, 0)
        const maxXY = v.co.clientToWorld(
            v.domCanvas.width, v.domCanvas.height
        )

        minXY.x = Math.round(minXY.x / gap) * gap
        minXY.y = Math.round(minXY.y / gap) * gap
        maxXY.x = Math.round(maxXY.x / gap) * gap
        maxXY.y = Math.round(maxXY.y / gap) * gap

        ctx.lineWidth = 1

        for (let x = minXY.x; x <= maxXY.x; x += gap) {
            const client = v.co.worldToClient(x, 0)

            ctx.beginPath()
            ctx.moveTo(Math.round(client.x) + 0.5, -9999)
            ctx.lineTo(Math.round(client.x) + 0.5, 9999)
            ctx.strokeStyle = getThemeColor("guideGrid")

            if (
                this.active && this.lastPoint.x === x
            )
                ctx.strokeStyle = getThemeColor("guideActive")

            ctx.stroke()
        }
        for (let y = minXY.y; y <= maxXY.y; y += gap) {
            const client = v.co.worldToClient(0, y)

            ctx.beginPath()
            ctx.moveTo(-9999, Math.round(client.y) + 0.5)
            ctx.lineTo(9999, Math.round(client.y) + 0.5)
            ctx.strokeStyle = getThemeColor("guideGrid")

            if (
                this.active && this.lastPoint.y === y
            )
                ctx.strokeStyle = getThemeColor("guideActive")

            ctx.stroke()
        }
        
    }
}