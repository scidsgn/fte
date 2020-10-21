import { Glyph } from "./glyph"
import { EventEmitter } from "events"
import { createFontSettings, FontSettings } from "../settings/settings"

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
    version: string,
    trademark: string,
    compatibleFullName: string
}

export type FontColors = {
    red: number,
    green: number,
    blue: number
}

export class Font extends EventEmitter {
    public palette: FontColors[] = []

    public ownSettings: Partial<FontSettings> = {}
    public settings: FontSettings

    constructor(
        public info: Partial<FontInfo>,
        public metrics: FontMetrics,
        public glyphs: Glyph[]
    ) {
        super()

        this.settings = createFontSettings(this, this.ownSettings)

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
                version: "",
                trademark: "",
                compatibleFullName: ""
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

    addGlyph(...glyphs: Glyph[]) {
        this.glyphs.push(...glyphs)
    }
}