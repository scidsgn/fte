import { Font as OTFont, Glyph as OTGlyph, load, PathCommand } from "opentype.js";
import { Font } from "../font/font";
import { Glyph } from "../font/glyph";
import { BezierCurve } from "../geometry/bezier/curve";
import { BezierPoint, BezierPointType } from "../geometry/bezier/point";
import { Point } from "../geometry/point";
import { lerp } from "../utils/lerp";

function convertOTCoordinates(
    otfont: OTFont, x: number, y: number
): {x: number, y: number} {
    const scaleFactor = 512 / otfont.tables.os2.sCapHeight

    return {
        x: x * scaleFactor,
        y: (otfont.tables.os2.sCapHeight - y) * scaleFactor // easier to work with
    }
}

export function generateCurvesFromOTGlyph(
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
                    if (curve.points.length)
                        curves.push(curve)
                    
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

                        curve.points.forEach(p => p.determineType())
                        curves.push(curve)
                    }
                    
                    curve = new BezierCurve()
                    
                    break
                }
            }
        }
    )

    if (curve.points.length) {
        curve.points.forEach(p => p.determineType())
        curves.push(curve)
    }

    return curves
}

export async function importFont(filePath: string): Promise<Font> {
    return new Promise<Font>(
        (resolve, reject) => {
            load(filePath, (err, otfont) => {
                const font = Font.fromOTFont(otfont)
            
                const glyphs: Glyph[] = []
                for (let i = 0; i < otfont.glyphs.length; i++) {
                    glyphs.push(
                        Glyph.fromOTGlyph(
                            font, otfont,
                            otfont.glyphs.get(i)
                        )
                    )
                }
                font.addGlyph(...glyphs)

                resolve(font)
            })
        }
    )
}