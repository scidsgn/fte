import { Point } from "../../geometry/point";
import { Viewport } from "../viewport";

export interface IGuide {
    active: boolean

    nudge: (v: Viewport, pos: Point) => void
    render: (v: Viewport, ctx: CanvasRenderingContext2D) => void
}

export class HorizontalGuide implements IGuide {
    public active = false

    constructor(
        private valueHandler: number | (() => number)
    ) {}

    get value() {
        if (this.valueHandler instanceof Function)
            return this.valueHandler()

        return this.valueHandler
    }

    nudge(v: Viewport, pos: Point) {
        const clientPos = v.co.worldToClient(pos.x, pos.y)
        const clientTarget = v.co.worldToClient(pos.x, this.value)

        if (
            Math.abs(clientPos.y - clientTarget.y) < 8
        ) {
            pos.y = this.value
            this.active = true
        } else {
            this.active = false
        }
    }

    render(v: Viewport, ctx: CanvasRenderingContext2D) {
        const clientPos = v.co.worldToClient(
            0, this.value
        )
        clientPos.y = Math.round(clientPos.y) + 0.5

        ctx.strokeStyle = "#f0f"
        ctx.lineWidth = 1 / v.co.scaleFactor

        ctx.beginPath()
        ctx.moveTo(-9999, clientPos.y)
        ctx.lineTo(9999, clientPos.y)
        ctx.stroke()
    }
}

export class VerticalGuide implements IGuide {
    public active = false

    constructor(
        private valueHandler: number | (() => number)
    ) {}

    get value() {
        if (this.valueHandler instanceof Function)
            return this.valueHandler()

        return this.valueHandler
    }

    nudge(v: Viewport, pos: Point) {
        const clientPos = v.co.worldToClient(pos.x, pos.y)
        const clientTarget = v.co.worldToClient(this.value, pos.y)

        if (
            Math.abs(clientPos.x - clientTarget.x) < 8
        ) {
            pos.x = this.value
            this.active = true
        } else {
            this.active = false
        }
    }

    render(v: Viewport, ctx: CanvasRenderingContext2D) {
        const clientPos = v.co.worldToClient(
            this.value, 0
        )
        clientPos.x = Math.round(clientPos.x) + 0.5

        ctx.strokeStyle = "#f0f"
        ctx.lineWidth = 1 / v.co.scaleFactor

        ctx.beginPath()
        ctx.moveTo(clientPos.x, -9999)
        ctx.lineTo(clientPos.y, 9999)
        ctx.stroke()
    }
}