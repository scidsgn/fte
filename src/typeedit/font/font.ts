import { Glyph } from "./glyph"
import { Font as OTFont, Glyph as OTGlyph } from "opentype.js"
import { EventEmitter } from "events"

export type FontMetrics = {
    ascender: number,
    descender: number,
    xHeight: number
}

export type FontInfo = {
    copyright: string,
    description: string,
    designer: string,
    designerURL: string,
    fontFamily: string,
    fontSubfamily: string,
    fullName: string,
    license: string,
    licenseURL: string,
    manufacturer: string,
    manufacturerURL: string,
    postScriptName: string,
    uniqueID: string,
    version: string
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
        console.log(otfont)

        const scaleFactor = 512 / otfont.tables.os2.sCapHeight

        const info: any = {}
        const names = otfont.names as any

        Object.keys(otfont.names).forEach(
            k => {
                if (!names[k]) info[k] = ""
                info[k] = names[k]?.en ?? ""
            }
        )
        
        return new Font(
            info as FontInfo,
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