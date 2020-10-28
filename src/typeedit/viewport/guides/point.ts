import { currentFont } from "../../app"
import { Point } from "../../geometry/point"
import { getThemeColor } from "../../ui/theme"
import { IDrawableHandle } from "../drawable"
import { Viewport } from "../viewport"
import { IGuide } from "./guide"

export class PointGuide implements IGuide {
    public active = false

    constructor(
        public source: Point
    ) { }

    nudge(v: Viewport, pos: Point, obj?: any) {
        if (!currentFont.settings.handleSnapEnabled)
            return
            
        if (
            obj && this.source &&
            (
                obj === this.source ||
                (
                    "position" in obj &&
                    obj.position === this.source
                )
            )
        ) {
            this.active = false
            return
        }

        const clientPos = v.co.worldToClient(pos.x, pos.y)
        const clientTarget = v.co.worldToClient(
            this.source.x, this.source.y
        )

        if (Math.hypot(
            clientPos.x - clientTarget.x,
            clientPos.y - clientTarget.y
        ) < 10) {
            this.active = true
            return new Point(this.source.x, this.source.y)
        } else {
            this.active = false
            return null
        }
    }

    render(v: Viewport, ctx: CanvasRenderingContext2D) {
        const clientPos = v.co.worldToClient(
            this.source.x, this.source.y, false
        )
        clientPos.x = Math.round(clientPos.x) + 0.5
        clientPos.y = Math.round(clientPos.y) + 0.5

        ctx.strokeStyle = getThemeColor("guideActive")
        ctx.lineWidth = 1

        ctx.beginPath()
        ctx.moveTo(clientPos.x - 16, clientPos.y)
        ctx.lineTo(clientPos.x + 16, clientPos.y)
        ctx.moveTo(clientPos.x, clientPos.y - 16)
        ctx.lineTo(clientPos.x, clientPos.y + 16)
        ctx.stroke()
    }
}

export class HandleGuide extends PointGuide {
    constructor(
        public handle: IDrawableHandle
    ) {
        super(handle.position)
    }

    nudge(v: Viewport, pos: Point, obj?: any) {            
        if (
            this.handle.selected ||
            this.handle === obj
        ) return null
        return super.nudge(v, pos, obj)
    }
}