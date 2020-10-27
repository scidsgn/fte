import { EventEmitter } from "events"
import { Glyph } from "../../font/glyph"
import { BezierPoint } from "./point"
import paper from "paper"
import { Point } from "../point"
import { lerp } from "../../utils/lerp"
import { BezierSegment } from "./segment"

export class BezierCurve extends EventEmitter {
    public points: BezierPoint[] = []
    public closed = true

    public segments: BezierSegment[] = []

    constructor(
        public glyph?: Glyph
    ) {
        super()

        if (this.glyph) this.glyph.emit("modified")
        this.on("modified", () => {
            if (this.glyph) this.glyph.emit("modified")
        })
    }

    simplify() {
        const out: BezierPoint[] = []

        for (let i = 0; i < this.points.length; i++) {
            const point = this.points[i]
            const next = this.points[(i + 1) % this.points.length]

            if (point.base.distance(next.base) < 0.001) {
                if (
                    point.after.distance(point.base) < 0.001 &&
                    next.before.distance(next.base) < 0.001
                ) {
                    out.push(
                        new BezierPoint(
                            point.base,
                            point.before,
                            next.after
                        )
                    )
                    i++
                }
            } else {
                out.push(point)
            }
        }

        out.forEach(p => {
            p.curve = this
            p.determineType()
        })
        this.points = out
        this.updateSegments()
    }

    updateSegments() {
        this.segments = []
        if (this.points.length < 2) return

        this.segments = this.points.map(
            point => {
                const next = point.next

                return new BezierSegment([
                    point.base, point.after,
                    next.before, next.base
                ])
            }
        )
    }

    addPoint(point: BezierPoint) {
        point.curve = this
        this.points.push(point)
        this.updateSegments()
        this.emit("modified")
        this.emit("newPoint", point)
    }

    lineTo(x: number, y: number) {
        this.addPoint(
            new BezierPoint(
                new Point(x, y),
                new Point(x, y),
                new Point(x, y)
            )
        )
    }

    cubicCurveTo(
        c1x: number, c1y: number,
        c2x: number, c2y: number,
        x: number, y: number
    ) {
        if (!this.points.length) return

        const prev = this.points[this.points.length - 1]

        prev.after.x = c1x
        prev.after.y = c1y

        this.addPoint(
            new BezierPoint(
                new Point(x, y),
                new Point(c2x, c2y),
                new Point(x, y)
            )
        )
    }

    quadraticCurveTo(
        cx: number, cy: number,
        x: number, y: number
    ) {
        if (!this.points.length) return

        const prev = this.points[this.points.length - 1]

        prev.after.x = lerp(2 / 3, prev.base.x, cx)
        prev.after.y = lerp(2 / 3, prev.base.y, cy)

        this.addPoint(
            new BezierPoint(
                new Point(x, y),
                new Point(
                    lerp(1 / 3, cx, x),
                    lerp(1 / 3, cy, y)
                ),
                new Point(x, y)
            )
        )
    }

    // see: https://www.element84.com/blog/determining-the-winding-of-a-polygon-given-as-a-set-of-ordered-points
    get clockwise() {
        let sum = 0

        for (let i = 0; i < this.points.length; i++) {
            const point = this.points[i].base
            const next = this.points[
                (i + 1) % this.points.length
            ].base

            sum += (next.x - point.x) * (next.y - point.y)
        }

        return sum < 0 // inverted Y axis!
    }

    reverse() {
        this.points.forEach(
            p => p.reverse()
        )
        this.points = this.points.reverse()
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

    getPaperPath(): paper.Path {
        const path = new paper.Path()
        if (!this.points.length) return path
        
        const first = this.points[0].base
        path.moveTo(new paper.Point(first.x, first.y))

        for (let i = 0; i < this.points.length; i++) {
            const pt = this.points[i]
            const next = this.points[
                (i + 1) % this.points.length
            ]

            const c1 = pt.after
            const c2 = next.before
            const b = next.base

            path.cubicCurveTo(
                new paper.Point(c1.x, c1.y),
                new paper.Point(c2.x, c2.y),
                new paper.Point(b.x, b.y)
            )
        }

        path.closePath()

        return path
    }
    
    static fromPaperPath(path: paper.Path): BezierCurve {
        const curve = new BezierCurve()

        path.segments.forEach(
            seg => curve.addPoint(
                new BezierPoint(
                    new Point(seg.point.x, seg.point.y),
                    new Point(
                        seg.point.x + seg.handleIn.x,
                        seg.point.y + seg.handleIn.y
                    ),
                    new Point(
                        seg.point.x + seg.handleOut.x,
                        seg.point.y + seg.handleOut.y
                    )
                )
            )
        )

        return curve
    }

    static fromPaperPathItem(item: paper.PathItem): BezierCurve[] {
        if (item instanceof paper.Path)
            return [BezierCurve.fromPaperPath(item)]
        else if (item instanceof paper.CompoundPath)
            return item.children.map(
                ch => {
                    if (ch instanceof paper.Path)
                        return BezierCurve.fromPaperPath(ch)
                    return null
                }
            ).filter(c => c)
        
        return []
    }
}

