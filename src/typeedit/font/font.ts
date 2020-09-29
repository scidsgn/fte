import { Glyph } from "./glyph"
import { Font as OTFont, Glyph as OTGlyph } from "opentype.js"

export type FontMetrics = {
    ascender: number,
    descender: number,
    xHeight: number
}

export type FontInfo = {
    name: string,
    author: string
}

export class Font {
    constructor(
        public info: FontInfo,
        public metrics: FontMetrics,
        public glyphs: Glyph[]
    ) {}

    static fromOTFont(otfont: OTFont) {
        const glyphs: Glyph[] = [] // For now, don't want to import the entirety of Inter just yet

        const scaleFactor = 512 / otfont.tables.os2.sCapHeight

        return new Font(
            {
                name: otfont.names.fullName["en"],
                author: otfont.names.designer["en"]
            },
            {
                descender: -otfont.descender * scaleFactor + 512,
                ascender: -(otfont.ascender - otfont.tables.os2.sCapHeight) * scaleFactor,
                xHeight: (otfont.tables.os2.sCapHeight - otfont.tables.os2.sxHeight) * scaleFactor
            },
            glyphs
        )
    }

    addGlyph(glyph: Glyph) {
        this.glyphs.push(glyph)
    }
}