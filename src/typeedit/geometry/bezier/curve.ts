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
}

