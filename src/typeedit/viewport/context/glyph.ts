import { Glyph } from "../../font/glyph";
import { BezierCurve } from "../../geometry/bezier/curve";
import { FontMetricHandle, FontMetricHandleType } from "../handles/fontMetric";
import { Viewport } from "../viewport";
import { BezierContext } from "./bezier";

export class GlyphContext extends BezierContext {
    constructor(
        public glyphs: Glyph[],
        public currentIndex: number
    ) {
        super(glyphs[currentIndex].beziers)

        this.handles = [
            new FontMetricHandle(this.glyph, FontMetricHandleType.leftBearing),
            new FontMetricHandle(this.glyph, FontMetricHandleType.rightBearing),
            new FontMetricHandle(this.glyph, FontMetricHandleType.ascender),
            new FontMetricHandle(this.glyph, FontMetricHandleType.descender),
            new FontMetricHandle(this.glyph, FontMetricHandleType.xHeight)
        ]
    }

    get glyph() {
        return this.glyphs[this.currentIndex]
    }

    renderNonEditableGlyphs(ctx: CanvasRenderingContext2D) {
        let currentOffset = 0

        if (this.currentIndex < this.glyphs.length - 1) {
            for (let i = this.currentIndex + 1; i < this.glyphs.length; i++) {
                const prevGlyph = this.glyphs[i - 1]
                const glyph = this.glyphs[i]

                const offset = prevGlyph.metrics.rightBearing -
                               glyph.metrics.leftBearing

                const path = BezierCurve.getPath2D(
                    glyph.finalBeziers
                )
                
                ctx.fillStyle = "#ccc"
                ctx.translate(offset, 0)
                ctx.fill(path)

                currentOffset += offset
            }
        }
        ctx.translate(-currentOffset, 0)
        currentOffset = 0

        if (this.currentIndex > 0) {
            for (let i = this.currentIndex - 1; i >= 0; i--) {
                const nextGlyph = this.glyphs[i + 1]
                const glyph = this.glyphs[i]

                const offset = nextGlyph.metrics.leftBearing -
                               glyph.metrics.rightBearing

                const path = BezierCurve.getPath2D(
                    glyph.finalBeziers
                )
                
                ctx.fillStyle = "#ccc"
                ctx.translate(offset, 0)
                ctx.fill(path)

                currentOffset += offset

            }
        }
        ctx.translate(-currentOffset, 0)
        currentOffset = 0
    }
    
    render(v: Viewport, ctx: CanvasRenderingContext2D) {
        this.renderNonEditableGlyphs(ctx)

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

        ctx.fillStyle = "#aaa"
        ctx.fill(finalPath)
        
        ctx.strokeStyle = "#fff"
        ctx.lineWidth = 3
        ctx.stroke(workingPath)
        ctx.strokeStyle = "#111"
        ctx.lineWidth = 1
        ctx.stroke(workingPath)
    }
}