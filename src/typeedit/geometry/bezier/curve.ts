import { Font, Glyph, Path, PathCommand } from "opentype.js";
import { Point } from "../point";
import { BezierPoint } from "./point";

export class BezierCurve {
    public points: BezierPoint[] = []

    addPoint(point: BezierPoint) {
        this.points.push(point)
    }

    get path2D(): Path2D {
        const path = new Path2D()

        for (let i = 0; i < this.points.length; i++) {
            const p1 = this.points[i]
            const p2 = this.points[(i + 1) % this.points.length]
            if (i === 0)
                path.moveTo(p1.base.x, p1.base.y)

            path.bezierCurveTo(
                p1.after.x, p1.after.y,
                p2.before.x, p2.before.y,
                p2.base.x, p2.base.y
            )
        }
        path.closePath()

        return path
    }
}

function convertOTCoordinates(
    otfont: Font, x: number, y: number
): {x: number, y: number} {
    const scaleFactor = 512 / otfont.ascender

    return {
        x: x * scaleFactor,
        y: (otfont.ascender - y) * scaleFactor // easier to work with
    }
}

export function generateCurvesFromOTGlyph(
    otfont: Font, otglyph: Glyph
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
                            new Point(coords.x, coords.y)
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
                case "Z": {
                    if (curve.points.length) {
                        if (curve.points.length > 1) {
                            const first = curve.points[0]
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

                        curves.push(curve)
                    }
                    
                    curve = new BezierCurve()
                    
                    break
                }
            }
        }
    )

    if (curve.points.length)
        curves.push(curve)

    return curves
}