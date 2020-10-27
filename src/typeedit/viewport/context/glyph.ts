import { Glyph } from "../../font/glyph";
import { BezierCurve } from "../../geometry/bezier/curve";
import { setActiveGlyph } from "../../ui/glyphList";
import { getThemeColor } from "../../ui/theme";
import { CurveGuide } from "../guides/curve";
import { GridGuide } from "../guides/grid";
import { HorizontalGuide, VerticalGuide } from "../guides/line";
import { FontMetricHandle, FontMetricHandleType } from "../handles/fontMetric";
import { Viewport } from "../viewport";
import { BezierContext } from "./bezier";

export class GlyphContext extends BezierContext {
    private glyphModifiedHandler: () => void

    constructor(
        public glyphs: Glyph[],
        public currentIndex: number
    ) {
        super(glyphs[currentIndex].beziers)

        this.setupHandlesAndGuides()
        
        setActiveGlyph(this.glyph)

        this.glyphModifiedHandler = () => this.updateCurveGuides()
        this.glyph.on("modified", this.glyphModifiedHandler)
    }

    get glyph() {
        return this.glyphs[this.currentIndex]
    }

    setupHandlesAndGuides() {
        this.handles = [
            new FontMetricHandle(this.glyph, FontMetricHandleType.leftBearing),
            new FontMetricHandle(this.glyph, FontMetricHandleType.rightBearing),
            new FontMetricHandle(this.glyph, FontMetricHandleType.ascender),
            new FontMetricHandle(this.glyph, FontMetricHandleType.descender),
            new FontMetricHandle(this.glyph, FontMetricHandleType.xHeight)
        ]

        this.grids = [
            new GridGuide()
        ]
        
        this.guides = [
            new HorizontalGuide(0),
            new HorizontalGuide(512),
            new HorizontalGuide(() => this.glyph.font.metrics.ascender, this.handles[2]),
            new HorizontalGuide(() => this.glyph.font.metrics.descender, this.handles[3]),
            new HorizontalGuide(() => this.glyph.font.metrics.xHeight, this.handles[4]),
            new VerticalGuide(() => this.glyph.metrics.leftBearing, this.handles[0]),
            new VerticalGuide(() => this.glyph.metrics.rightBearing, this.handles[1])
        ]

        this.updateCurveGuides()
    }

    updateCurveGuides() {
        this.guides = [
            ...this.guides.slice(0, 7),
            ...this.beziers.map(b => new CurveGuide(b))
        ]
    }

    setGlyphs(glyphs?: Glyph[], currentIndex?: number) {
        this.glyph.off("modified", this.glyphModifiedHandler)

        if (glyphs)
            this.glyphs = glyphs
        
        if (typeof currentIndex === "number")
            this.currentIndex = currentIndex
        else if (this.currentIndex >= this.glyphs.length)
            this.currentIndex = this.glyphs.length - 1
        
        this.beziers = this.glyph.beziers
        this.setupHandlesAndGuides()
        
        setActiveGlyph(this.glyph)

        this.glyph.on("modified", this.glyphModifiedHandler)
    }

    renderNonEditableGlyphs(v: Viewport, ctx: CanvasRenderingContext2D) {
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
                
                ctx.fillStyle = getThemeColor("glyphOtherFill")
                ctx.translate(offset, 0)
                ctx.fill(path)

                this.renderGlyphIndicator(v, ctx, glyph)

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
                
                ctx.fillStyle = getThemeColor("glyphOtherFill")
                ctx.translate(offset, 0)
                ctx.fill(path)

                this.renderGlyphIndicator(v, ctx, glyph)

                currentOffset += offset

            }
        }
        ctx.translate(-currentOffset, 0)
        currentOffset = 0
    }

    renderGlyphIndicator(
        v: Viewport, ctx: CanvasRenderingContext2D, glyph: Glyph
    ) {
        const x = glyph.metrics.leftBearing
        const w = glyph.metrics.rightBearing - x
        const y = glyph.font.metrics.ascender - 20 / v.co.scaleFactor

        ctx.fillStyle = (this.glyph === glyph) ?
                        getThemeColor("gindicatorActive") :
                        getThemeColor("gindicator")
        ctx.fillRect(x, y - 8 / v.co.scaleFactor, w, 4 / v.co.scaleFactor)

        ctx.font = `400 ${14 / v.co.scaleFactor}px Inter`
        ctx.textAlign = "center"
        ctx.fillStyle = (this.glyph === glyph) ?
                        getThemeColor("gindicatorActiveText") :
                        getThemeColor("gindicatorText")
        ctx.fillText(glyph.name, x + w / 2, y - 10 / v.co.scaleFactor)
    }
    
    render(v: Viewport, ctx: CanvasRenderingContext2D) {
        this.renderNonEditableGlyphs(v, ctx)

        // Glyph metric lines
        ctx.strokeStyle = getThemeColor("glyphMetric")
        ctx.lineWidth = 1 / v.co.scaleFactor

        ctx.beginPath()

        ctx.moveTo(-9999, 512) // 512 is the bottom - baseline
        ctx.lineTo(9999, 512)
        
        ctx.moveTo(-9999, 0) // 0 is the top - cap height
        ctx.lineTo(9999, 0)
        ctx.stroke()

        ctx.setLineDash(
            [10 / v.co.scaleFactor, 10 / v.co.scaleFactor]
        )

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

        // Glyph fill
        ctx.fillStyle = getThemeColor("glyphFill")
        ctx.fill(finalPath) 

        // Glyph curvature
        this.glyph.beziers.forEach(
            bezier => bezier.segments.forEach(
                seg => {
                    ctx.beginPath()

                    ctx.moveTo(
                        seg.points[3].x, seg.points[3].y
                    )
                    ctx.bezierCurveTo(
                        seg.points[2].x, seg.points[2].y,
                        seg.points[1].x, seg.points[1].y,
                        seg.points[0].x, seg.points[0].y
                    )

                    for (let t = 0; t <= 1; t += 0.05) {
                        const point = seg.at(t)

                        const dPoint = seg.d.at(t)
                        const angle = Math.atan2(
                            dPoint.y, dPoint.x
                        )
                        const curvature = seg.curvature(t)
                        let r = Math.atan(
                            curvature * 200
                        ) * 10
                        if (curvature !== 0) {
                            r += Math.sign(curvature) * 10
                        }

                        ctx.lineTo(
                            point.x - r * Math.cos(angle),
                            point.y - r * Math.sin(angle)
                        )
                    }

                    ctx.fillStyle = "blue"
                    ctx.fill()
                }
            )
        )

        // Glyph outline        
        ctx.setLineDash([])
        ctx.strokeStyle = getThemeColor("glyphGapOutline")
        ctx.lineWidth = 4 / v.co.scaleFactor
        ctx.stroke(workingPath)
        ctx.strokeStyle = getThemeColor("glyphOutline")
        ctx.lineWidth = 1 / v.co.scaleFactor
        ctx.stroke(workingPath)

        this.renderGlyphIndicator(v, ctx, this.glyph)
    }
}