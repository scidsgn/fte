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
        public info: Partial<FontInfo>,
        public metrics: FontMetrics,
        public glyphs: Glyph[]
    ) {
        super()

        this.info = Object.assign(
            {
                copyright: "",
                description: "",
                designer: "",
                designerURL: "",
                fontFamily: "",
                fontSubfamily: "",
                fullName: "",
                license: "",
                licenseURL: "",
                manufacturer: "",
                manufacturerURL: "",
                postScriptName: "",
                uniqueID: "",
                version: ""
            }, this.info
        )
    }

    static createBlank() {
        // Just the base Latin alphanumeric for now
        const baseCharacterSet = " 0123456789-=_+!@#$%^&*(){}[]\\\/,.<>?;':\"~ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
        const specialNames: {
            [key: string]: string
        } = {
            " ": "space",
            "'": "quote",
            "\"": "dblquote",
            "!": "exclam",
            "@": "at",
            "#": "hash",
            "$": "dollar",
            "%": "percent",
            "^": "caret",
            "&": "ampersand",
            "*": "asterisk"
        }

        const font = new Font(
            {
                fontFamily: "New font",
                fontSubfamily: "Regular"
            },
            {
                ascender: -96,
                descender: 512 + 96,
                xHeight: 196
            },
            []
        )
        font.addGlyph(
            new Glyph(
                font, ".notdef", null,
                {
                    leftBearing: 0,
                    rightBearing: 320
                },
                []
            ),
            ...baseCharacterSet.split("").map(
                char => {
                    const name = (char in specialNames) ? specialNames[char] : char

                    return new Glyph(
                        font, name, char.codePointAt(0),
                        {
                            leftBearing: 0,
                            rightBearing: 320
                        },
                        []
                    )
                }
            )
        )

        return font
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