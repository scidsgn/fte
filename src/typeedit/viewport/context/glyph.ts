import { Glyph } from "../../font/glyph";
import { BezierCurve } from "../../geometry/bezier/curve";
import { FontMetricHandle, FontMetricHandleType } from "../handles/fontMetric";
import { Viewport } from "../viewport";
import { BezierContext } from "./bezier";

export class GlyphContext extends BezierContext {
    constructor(
        public glyph: Glyph
    ) {
        super(glyph.beziers)

        this.handles = [
            new FontMetricHandle(glyph, FontMetricHandleType.leftBearing),
            new FontMetricHandle(glyph, FontMetricHandleType.rightBearing),
            new FontMetricHandle(glyph, FontMetricHandleType.ascender),
            new FontMetricHandle(glyph, FontMetricHandleType.descender),
            new FontMetricHandle(glyph, FontMetricHandleType.xHeight)
        ]
    }
    
    render(v: Viewport, ctx: CanvasRenderingContext2D) {
        // Glyph metric lines
        ctx.strokeStyle = "#3338"

        ctx.beginPath()

        ctx.moveTo(-9999, 512) // 512 is the bottom - baseline
        ctx.lineTo(9999, 512)
        
        ctx.moveTo(-9999, 0) // 0 is the top - cap height
        ctx.lineTo(9999, 0)
        ctx.stroke()

        ctx.setLineDash([10, 10])

        // x-height
        ctx.beginPath()
        ctx.moveTo(-9999, this.glyph.font.metrics.xHeight)
        ctx.lineTo(9999, this.glyph.font.metrics.xHeight)

        // Ascender
        ctx.moveTo(-9999, this.glyph.font.metrics.ascender)
        ctx.lineTo(9999, this.glyph.font.metrics.ascender)

        // Descender
        ctx.moveTo(-9999, this.glyph.font.metrics.descender)
        ctx.lineTo(9999, this.glyph.font.metrics.descender)

        ctx.moveTo(this.glyph.metrics.leftBearing, -9999)
        ctx.lineTo(this.glyph.metrics.leftBearing, 9999)

        ctx.moveTo(this.glyph.metrics.rightBearing, -9999)
        ctx.lineTo(this.glyph.metrics.rightBearing, 9999)

        ctx.stroke()

        // Glyph
        const workingPath = BezierCurve.getPath2D(
            this.glyph.beziers
        )
        const finalPath = BezierCurve.getPath2D(
            this.glyph.finalBeziers
        )

        ctx.fillStyle = "#888"
        ctx.fill(finalPath)
        
        ctx.strokeStyle = "#fff"
        ctx.lineWidth = 3
        ctx.stroke(workingPath)
        ctx.strokeStyle = "#111"
        ctx.lineWidth = 1
        ctx.stroke(workingPath)
    }
}