import { EventEmitter } from "events"
import { Font as OTFont, Glyph as OTGlyph } from "opentype.js"
import { BezierCurve, generateCurvesFromOTGlyph } from "../geometry/bezier/curve"
import { IDrawable } from "../viewport/drawable"
import { Font } from "./font"

export type GlyphMetrics = {
    leftBearing: number,
    rightBearing: number
}

export class Glyph extends EventEmitter {
    public finalBeziers: BezierCurve[] = []

    constructor(
        public font: Font,
        public name: string,
        public codePoint: number,
        public metrics: GlyphMetrics,
        public beziers: BezierCurve[]
    ) {
        super()
        
        this.beziers.forEach(b => b.glyph = this)
        this.finalBeziers = beziers // for now

        this.on("modified", () => {
            this.font.emit("glyphModified", this)
        })
    }

    static fromOTGlyph(font: Font, otfont: OTFont, otglyph: OTGlyph) {
        const scaleFactor = 512 / otfont.tables.os2.sCapHeight
        const beziers = generateCurvesFromOTGlyph(otfont, otglyph)

        const glyphMetrics = otglyph.getMetrics()

        return new Glyph(
            font,
            otglyph.name,
            otglyph.unicode,
            {
                leftBearing: 0,
                rightBearing: (
                    glyphMetrics.rightSideBearing + glyphMetrics.xMax
                ) * scaleFactor
            },
            beziers
        )
    }

    updateBeziers() {
        // Nothing for now
        // TODO: modifiers
        this.finalBeziers = this.beziers
    }
}