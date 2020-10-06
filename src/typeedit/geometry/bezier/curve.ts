import { EventEmitter } from "events"
import { Glyph } from "../../font/glyph"
import { BezierPoint } from "./point"
import paper from "paper"
import { Point } from "../point"

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
        this.emit("newPoint", point)
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

