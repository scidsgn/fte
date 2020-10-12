import { exec } from "child_process"
import { join } from "path"
import { Font } from "../../font/font"
import { Glyph } from "../../font/glyph"
import { undo } from "../../undo/history"
import { NumberOrVariation, OTFCCData } from "./types"

let otfccPath: string

export function setOtfccPath(path: string) {
    otfccPath = path
}

const novar = (x: NumberOrVariation) => {
    if (typeof x === "number") return x
    return x[0]
}

function otfccToGlyphs(font: Font, data: OTFCCData): Glyph[] {
    return data.glyph_order.map(
        name => {
            const glyf = data.glyf[name]
            const unicode = +Object.keys(data.cmap)[
                Object.values(data.cmap).indexOf(name)
            ]

            const scaleFactor = 512 / data.OS_2.sCapHeight

            return new Glyph(
                font,
                name,
                isNaN(unicode) ? 0 : unicode,
                {
                    leftBearing: 0,
                    rightBearing: (
                        novar(glyf.advanceWidth)
                    ) * scaleFactor
                },
                []
            )
        }
    )
}

function otfccToFont(data: OTFCCData) {
    if (data.OS_2.version < 4) return
    const scaleFactor = 512 / data.OS_2.sCapHeight
    
    return new Font(
        {},
        {
            descender: -data.hhea.descender * scaleFactor + 512,
            ascender: -(data.hhea.ascender - data.OS_2.sCapHeight) * scaleFactor,
            xHeight: (data.OS_2.sCapHeight - data.OS_2.sxHeight) * scaleFactor
        },
        []
    )
}

export function importFont_otfcc(filePath: string): Promise<Font> {
    if (!otfccPath) return

    return new Promise(
        (resolve, reject) => {
            exec(
                `"${join(otfccPath, "otfccdump")}" "${filePath}"`,
                {
                    maxBuffer: 40 * 1024 * 1024 // output JSON usually exceeds 1 MB
                },
                (err, stdout, stdin) => {
                    const data = JSON.parse(stdout)
                    const font = otfccToFont(data)

                    font.glyphs = otfccToGlyphs(
                        font, data
                    )

                    console.log(data)
                    console.log(font)

                    resolve(font)
                }
            )
        }
    )
}