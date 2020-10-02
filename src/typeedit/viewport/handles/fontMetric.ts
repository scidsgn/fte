import { Glyph } from "../../font/glyph"
import { Point } from "../../geometry/point"
import { UndoContext, ValueChangeAction } from "../../undo/action"
import { IDrawableHandle } from "../drawable"
import { Viewport } from "../viewport"

export enum FontMetricHandleType {
    leftBearing, rightBearing,
    ascender, descender, xHeight
}

enum FontMetricHandleDir {
    horz, vert
}

export class FontMetricHandle implements IDrawableHandle {
    public hitRadius = 10
    public selected = false
    public type = "FontMetricHandle"

    private dir = FontMetricHandleDir.horz
    
    constructor(
        private glyph: Glyph,
        private metric: FontMetricHandleType
    ) {
        if (
            metric === FontMetricHandleType.leftBearing ||
            metric === FontMetricHandleType.rightBearing
        )
            this.dir = FontMetricHandleDir.vert
    }

    prepareUndo(uc: UndoContext) {
        let action = null

        switch (this.metric) {
            case FontMetricHandleType.ascender:
                action = new ValueChangeAction(this.glyph.font.metrics, ["ascender"])
                break
            case FontMetricHandleType.descender:
                action = new ValueChangeAction(this.glyph.font.metrics, ["descender"])
                break
            case FontMetricHandleType.xHeight:
                action = new ValueChangeAction(this.glyph.font.metrics, ["xHeight"])
                break
            
            case FontMetricHandleType.leftBearing:
                action = new ValueChangeAction(this.glyph.metrics, ["leftBearing"])
                break
            case FontMetricHandleType.rightBearing:
                action = new ValueChangeAction(this.glyph.metrics, ["rightBearing"])
                break
        }

        if (action) uc.addAction(action)
    }

    private get value() {
        switch (this.metric) {
            case FontMetricHandleType.ascender:
                return this.glyph.font.metrics.ascender
            case FontMetricHandleType.descender:
                return this.glyph.font.metrics.descender
            case FontMetricHandleType.xHeight:
                return this.glyph.font.metrics.xHeight
            
            case FontMetricHandleType.leftBearing:
                return this.glyph.metrics.leftBearing
            case FontMetricHandleType.rightBearing:
                return this.glyph.metrics.rightBearing
        }

        return 0
    }

    private set value(x: number) {
        switch (this.metric) {
            case FontMetricHandleType.ascender:
                this.glyph.font.metrics.ascender = Math.min(x, 0)
                break
            case FontMetricHandleType.descender:
                this.glyph.font.metrics.descender = Math.max(x, 512)
                break
            case FontMetricHandleType.xHeight:
                this.glyph.font.metrics.xHeight = Math.max(Math.min(x, 512), 0)
                break
            
            case FontMetricHandleType.leftBearing:
                this.glyph.metrics.leftBearing = x
                break
            case FontMetricHandleType.rightBearing:
                this.glyph.metrics.rightBearing = x
                break
        }

        this.glyph.emit("modified")
    }

    get position() {
        if (this.dir === FontMetricHandleDir.horz)
            return new Point(-20, this.value)
        
        return new Point(this.value, 532)
    }

    move(
        v: Viewport, pos: Point, dPos: Point,
        pivot: IDrawableHandle,
        e?: MouseEvent
    ) {
        if (this.dir === FontMetricHandleDir.horz) {
            this.value = pos.y
        } else {
            this.value = pos.x
        }
    }

    render(v: Viewport, ctx: CanvasRenderingContext2D) {
        ctx.beginPath()
        ctx.arc(0, 0, 5, 0, 2 * Math.PI)
        ctx.moveTo(0, 0)

        if (this.dir === FontMetricHandleDir.horz)
            ctx.lineTo(20 * v.co.scaleFactor, 0)
        else
            ctx.lineTo(0, -20 * v.co.scaleFactor)

        ctx.fillStyle = this.selected ? "#111" : "#444"
        ctx.strokeStyle = "#111"
        ctx.lineWidth = 1
        ctx.setLineDash([])
        ctx.stroke()
        ctx.fill()
    }
}