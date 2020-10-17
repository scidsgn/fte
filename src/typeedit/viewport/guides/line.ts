import { Point } from "../../geometry/point"
import { getThemeColor } from "../../ui/theme"
import { Viewport } from "../viewport"
import { IGuide } from "./guide"

export class HorizontalGuide implements IGuide {
    public active = false

    constructor(
        private valueHandler: number | (() => number),
        public source?: any
    ) { }

    get value() {
        if (this.valueHandler instanceof Function)
            return this.valueHandler()

        return this.valueHandler
    }

    nudge(v: Viewport, pos: Point, obj?: any) {
        if (obj && this.source && obj === this.source) {
            this.active = false
            return null
        }

        const clientPos = v.co.worldToClient(pos.x, pos.y)
        const clientTarget = v.co.worldToClient(pos.x, this.value)

        if (Math.abs(clientPos.y - clientTarget.y) < 8) {
            this.active = true
            return new Point(pos.x, this.value)
        } else {
            this.active = false
        }

        return null
    }

    render(v: Viewport, ctx: CanvasRenderingContext2D) {
        const clientPos = v.co.worldToClient(
            0, this.value
        )
        clientPos.y = Math.round(clientPos.y) + 0.5

        ctx.strokeStyle = getThemeColor("guideActive")
        ctx.lineWidth = 1

        ctx.beginPath()
        ctx.moveTo(-9999, clientPos.y)
        ctx.lineTo(9999, clientPos.y)
        ctx.stroke()
    }
}

export class VerticalGuide implements IGuide {
    public active = false

    constructor(
        private valueHandler: number | (() => number),
        public source?: any
    ) { }

    get value() {
        if (this.valueHandler instanceof Function)
            return this.valueHandler()

        return this.valueHandler
    }

    nudge(v: Viewport, pos: Point, obj?: any) {
        if (obj && this.source && obj === this.source) {
            this.active = false
            return null
        }

        const clientPos = v.co.worldToClient(pos.x, pos.y)
        const clientTarget = v.co.worldToClient(this.value, pos.y)

        if (Math.abs(clientPos.x - clientTarget.x) < 8) {
            this.active = true
            return new Point(this.value, pos.y)
        } else {
            this.active = false
        }

        return null
    }

    render(v: Viewport, ctx: CanvasRenderingContext2D) {
        const clientPos = v.co.worldToClient(
            this.value, 0
        )
        clientPos.x = Math.round(clientPos.x) + 0.5

        ctx.strokeStyle = getThemeColor("guideActive")
        ctx.lineWidth = 1

        ctx.beginPath()
        ctx.moveTo(clientPos.x, -9999)
        ctx.lineTo(clientPos.x, 9999)
        ctx.stroke()
    }
}
