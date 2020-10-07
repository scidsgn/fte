import { Glyph } from "./glyph"
import { Font as OTFont, Glyph as OTGlyph } from "opentype.js"
import { EventEmitter } from "events"

export type FontMetrics = {
    ascender: number,
    descender: number,
    xHeight: number
}

export type FontInfo = {
    name: string,
    author: string
}

export class Font extends EventEmitter {
    constructor(
        public info: FontInfo,
        public metrics: FontMetrics,
        public glyphs: Glyph[]
    ) {
        super()
    }

    static fromOTFont(otfont: OTFont) {
        const glyphs: Glyph[] = [] // For now, don't want to import the entirety of Inter just yet

        const scaleFactor = 512 / otfont.tables.os2.sCapHeight
        console.log(otfont)
        return new Font(
            {
                name: otfont.names.fullName["en"],
                author: ""
            },
            {
                descender: -otfont.descender * scaleFactor + 512,
                ascender: -(otfont.ascender - otfont.tables.os2.sCapHeight) * scaleFactor,
                xHeight: (otfont.tables.os2.sCapHeight - otfont.tables.os2.sxHeight) * scaleFactor
            },
            glyphs
        )
    }

    addGlyph(...glyphs: Glyph[]) {
        this.glyphs.push(...glyphs)
    }
}