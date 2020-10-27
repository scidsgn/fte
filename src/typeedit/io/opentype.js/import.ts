import { Font as OTFont, Glyph as OTGlyph, load, loadSync, PathCommand } from "opentype.js";
import { Font, FontInfo } from "../../font/font";
import { Glyph } from "../../font/glyph";
import { BezierCurve } from "../../geometry/bezier/curve";
import { BezierPoint, BezierPointType } from "../../geometry/bezier/point";
import { Point } from "../../geometry/point";
import { lerp } from "../../utils/lerp";

function convertOTCoordinates(
    otfont: OTFont, x: number, y: number
): {x: number, y: number} {
    const scaleFactor = 512 / otfont.tables.os2.sCapHeight

    return {
        x: x * scaleFactor,
        y: (otfont.tables.os2.sCapHeight - y) * scaleFactor // easier to work with
    }
}

function generateCurvesFromOTGlyph(
    otfont: OTFont, otglyph: OTGlyph
): BezierCurve[] {
    const curves: BezierCurve[] = []
    let curve = new BezierCurve()

    const conv = (
        x: number, y: number
    ) => convertOTCoordinates(otfont, x, y)
    
    ///@ts-ignore
    otglyph.path.commands.forEach(
        (cmd: PathCommand) => {
            switch (cmd.type) {
                case "M": {
                    if (curve.points.length) {
                        curve.simplify()
                        curves.push(curve)
                    }
                    
                    curve = new BezierCurve()
                    
                    const coords = conv(cmd.x, cmd.y)
                    curve.addPoint(
                        new BezierPoint(
                            new Point(coords.x, coords.y),
                            new Point(coords.x, coords.y),
                            new Point(coords.x, coords.y),
                            BezierPointType.free
                        )
                    )

                    break
                }
                case "L": {
                    const coords = conv(cmd.x, cmd.y)
                    curve.addPoint(
                        new BezierPoint(
                            new Point(coords.x, coords.y),
                            new Point(coords.x, coords.y),
                            new Point(coords.x, coords.y)
                        )
                    )

                    break
                }
                case "C": {
                    const c1coords = conv(cmd.x1, cmd.y1)
                    const c2coords = conv(cmd.x2, cmd.y2)
                    const coords = conv(cmd.x, cmd.y)

                    if (!curve.points.length) return // WHO MALFORMED MY OTF
                    const prevPoint = curve.points[curve.points.length - 1]
                    prevPoint.after.x = c1coords.x
                    prevPoint.after.y = c1coords.y

                    curve.addPoint(
                        new BezierPoint(
                            new Point(coords.x, coords.y),
                            new Point(c2coords.x, c2coords.y),
                            new Point(coords.x, coords.y)
                        )
                    )

                    break
                }
                case "Q": {
                    const c1coords = conv(cmd.x1, cmd.y1)
                    const coords = conv(cmd.x, cmd.y)

                    if (!curve.points.length) return // WHO MALFORMED MY OTF
                    const prevPoint = curve.points[curve.points.length - 1]
                    prevPoint.after.x = lerp(1/3, c1coords.x, prevPoint.base.x)
                    prevPoint.after.y = lerp(1/3, c1coords.y, prevPoint.base.y)

                    curve.addPoint(
                        new BezierPoint(
                            new Point(coords.x, coords.y),
                            new Point(
                                lerp(1/3, c1coords.x, coords.x),
                                lerp(1/3, c1coords.y, coords.y)
                            ),
                            new Point(coords.x, coords.y)
                        )
                    )

                    break
                }
                case "Z": {
                    if (curve.points.length) {
                        const first = curve.points[0]

                        if (curve.points.length > 1) {
                            const last = curve.points[curve.points.length - 1]

                            if (
                                first.base.x === last.base.x &&
                                first.base.y === last.base.y
                            ) {
                                first.before.x = last.before.x
                                first.before.y = last.before.y

                                curve.points.splice(curve.points.length - 1, 1)
                            }
                        }

                        curve.simplify()
                        curves.push(curve)
                    }
                    
                    curve = new BezierCurve()
                    
                    break
                }
            }
        }
    )

    if (curve.points.length) {
        curve.simplify()
        curves.push(curve)
    }

    return curves
}

function fteGlyphFromOTGlyph(font: Font, otfont: OTFont, otglyph: OTGlyph) {
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

function fteFontFromOTFont(otfont: OTFont) {
    const glyphs: Glyph[] = [] // For now, don't want to import the entirety of Inter just yet

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

export function importFont_opentype(filePath: string): Font {
    const otfont = loadSync(filePath)

    const font = fteFontFromOTFont(otfont)

    const glyphs: Glyph[] = []
    for (let i = 0; i < otfont.glyphs.length; i++) {
        glyphs.push(
            fteGlyphFromOTGlyph(
                font, otfont,
                otfont.glyphs.get(i)
            )
        )
    }
    font.addGlyph(...glyphs)

    return font
}