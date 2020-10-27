import { Point } from "../point"

export class BezierSegment {
    private _d: BezierSegment
    private _dd: BezierSegment

    constructor(
        public points: Point[]
    ) {
    }

    get d() {
        if (this._d) return this._d

        this._d = this.derivative
        return this._d
    }

    get dd() {
        if (this._dd) return this._dd

        this._dd = this.d.d
        return this._dd
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

    private deCasteljau(t: number, points: Point[]): Point[] {
        const out: Point[] = []
        
        for (let i = 0; i < points.length - 1; i++) {
            const point = new Point()
            point.copy(points[i])
            point.lerp(t, points[i + 1])

            out.push(point)
        }

        return out
    }

    at(t: number): Point {
        if (!this.n) return null

        let points: Point[] = this.points

        while (points.length > 1) {
            points = this.deCasteljau(t, points)
        }
        
        return points[0]
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