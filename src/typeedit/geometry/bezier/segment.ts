import { Point } from "../point"

export class BezierSegment {
    public d: BezierSegment
    public dd: BezierSegment

    constructor(
        public points: Point[]
    ) {
        this.d = this.derivative
        this.dd = this.d.derivative
    }

    get n() {
        return this.points.length
    }

    get derivative(): BezierSegment {
        const points: Point[] = []

        for (let i = 0; i < this.n - 1; i++) {
            const point = this.points[i]
            const next = this.points[i + 1]

            points.push(
                new Point(
                    () => this.n * (next.x - point.x),
                    () => this.n * (next.y - point.y)
                )
            )
        }

        return new BezierSegment(points)
    }

    at(t: number): Point {
        if (!this.n) return null
        
        const point = new Point()
        point.copy(this.points[0])

        for (let i = 1; i < this.n; i++) {
            point.lerp(t, this.points[i])
        }

        return point
    }

    curvature(t: number): number {
        const dPoint = this.d.at(t)
        const ddPoint = this.dd.at(t)

        const denom = (
            dPoint.x * dPoint.x + dPoint.y * dPoint.y
        ) ** (3 / 2)
        if (denom === 0) return NaN

        return (
            dPoint.x * ddPoint.y - ddPoint.x * dPoint.y
        ) / denom
    }
}