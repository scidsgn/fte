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