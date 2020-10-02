import { EventEmitter } from "events"
import { Font, Glyph as OTGlyph, Path, PathCommand } from "opentype.js"
import { Glyph } from "../../font/glyph"
import { Point } from "../point"
import { BezierPoint, BezierPointType } from "./point"

export class BezierCurve extends EventEmitter {
    public points: BezierPoint[] = []
    public closed = true

    constructor(
        public glyph?: Glyph
    ) {
        super()

        this.on("modified", () => {
            if (this.glyph) this.glyph.emit("modified")
        })
    }

    addPoint(point: BezierPoint) {
        point.curve = this
        this.points.push(point)
        this.emit("modified")
    }

    static getPath2D(beziers: BezierCurve[]) {
        const path = new Path2D()

        for (let bezier of beziers) {
            for (let i = 0; i < bezier.points.length; i++) {
                const p1 = bezier.points[i]
                const p2 = bezier.points[(i + 1) % bezier.points.length]
                if (i === 0)
                    path.moveTo(p1.base.x, p1.base.y)
    
                path.bezierCurveTo(
                    p1.after.x, p1.after.y,
                    p2.before.x, p2.before.y,
                    p2.base.x, p2.base.y
                )
            }
        }

        return path
    }
}

function convertOTCoordinates(
    otfont: Font, x: number, y: number
): {x: number, y: number} {
    const scaleFactor = 512 / otfont.tables.os2.sCapHeight

    return {
        x: x * scaleFactor,
        y: (otfont.tables.os2.sCapHeight - y) * scaleFactor // easier to work with
    }
}

export function generateCurvesFromOTGlyph(
    otfont: Font, otglyph: OTGlyph
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