import { Font } from "../../font/font"
import {
    Font as OTFont,
    Glyph as OTGlyph,
    Path as OTPath
} from "opentype.js"
import { Glyph } from "../../font/glyph"
import { Point } from "../../geometry/point"
import { writeFileSync } from "fs"

function glyphToOTPath(glyph: Glyph, targetCapHeight = 1000) {
    const path = new OTPath()
    const scaleFactor = targetCapHeight / 512

    const conv = (point: Point) => {
        return {
            x: (point.x - glyph.metrics.leftBearing) * scaleFactor,
            y: (512 - point.y) * scaleFactor
        }
    }

    for (const bezier of glyph.finalBeziers) {
        if (!bezier.points.length) continue
        
        const first = conv(bezier.points[0].base)
        path.moveTo(first.x, first.y)

        for (let i = 0; i < bezier.points.length; i++) {
            const pt = bezier.points[i]
            const next = bezier.points[
                (i + 1) % bezier.points.length
            ]

            const c1 = conv(pt.after)
            const c2 = conv(next.before)
            const b = conv(next.base)

            path.curveTo(
                c1.x, c1.y,
                c2.x, c2.y,
                b.x, b.y
            )
        }

        path.closePath()
    }

    return path
}

export function exportFont_opentype(font: Font, targetFile: string) {
    const notDef = new OTGlyph({
        name: ".notdef",
        unicode: 0,
        advanceWidth: 650, // TODO!!!
        path: new OTPath()
    })

    const targetCapHeight = 2000
    const scaleFactor = targetCapHeight / 512
    
    const otfont = new OTFont({
        familyName: font.names.fontFamily,
        styleName: font.names.fontSubfamily,
        postScriptName: `${font.names.fontFamily}-${font.names.fontSubfamily}`,
        unitsPerEm: (font.metrics.descender - font.metrics.ascender) * scaleFactor, // TODO!!
        ascender: (512 - font.metrics.ascender) * scaleFactor,
        descender: (512 - font.metrics.descender) * scaleFactor,
        glyphs: [
            ...font.glyphs.filter(
                g => g.finalBeziers.length
            ).map(g => new OTGlyph({
                name: g.name,
                unicode: g.codePoint,
                advanceWidth: Math.round((g.metrics.rightBearing - g.metrics.leftBearing) * scaleFactor),
                path: glyphToOTPath(g, targetCapHeight)
            })),
            notDef
        ],
        ///@ts-ignore
        tables: {
            version: 4,
            achVendID: "SFTE",
            sCapHeight: targetCapHeight,
            sxHeight: (512 - font.metrics.xHeight) * scaleFactor,
            sTypoAscender: (512 - font.metrics.ascender) * scaleFactor,
            sTypoDescender: (512 - font.metrics.descender) * scaleFactor
        }
    })

    const buf = Buffer.from(otfont.toArrayBuffer())

    writeFileSync(targetFile, buf)
}