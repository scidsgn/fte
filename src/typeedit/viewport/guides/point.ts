import { Point } from "../../geometry/point"
import { IDrawableHandle } from "../drawable"
import { Viewport } from "../viewport"
import { IGuide } from "./guide"

export class PointGuide implements IGuide {
    public active = false

    constructor(
        public source: Point
    ) { }

    nudge(v: Viewport, pos: Point, obj?: any) {
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
            pos.x = this.source.x
            pos.y = this.source.y
            this.active = true
        } else {
            this.active = false
        }
    }

    render(v: Viewport, ctx: CanvasRenderingContext2D) {
        const clientPos = v.co.worldToClient(
            this.source.x, this.source.y
        )
        clientPos.x = Math.round(clientPos.x) + 0.5
        clientPos.y = Math.round(clientPos.y) + 0.5

        ctx.strokeStyle = "#f0f"
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
        ) return
        super.nudge(v, pos, obj)
    }
}