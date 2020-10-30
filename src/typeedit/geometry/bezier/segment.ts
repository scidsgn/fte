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

    split(t: number): BezierSegment[] {
        if (this.n !== 4) return

        const crossPoint = this.at(t)
        const c01 = this.points[0].lerpNew(t, this.points[1])
        const c11 = this.points[1].lerpNew(t, this.points[2])
        const c21 = this.points[2].lerpNew(t, this.points[3])

        return [
            new BezierSegment(
                [
                    this.points[0],
                    c01,
                    c01.lerpNew(t, c11),
                    crossPoint
                ]
            ),
            new BezierSegment(
                [
                    crossPoint,
                    c11.lerpNew(t, c21),
                    c21,
                    this.points[3]
                ]
            )
        ]
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

    private findLinRoots(coeffs: number[]) {
        return [
            -coeffs[0] / (coeffs[1] - coeffs[0])
        ].filter(x => !isNaN(x))
    }

    private findQuadRoots(coeffs: number[]) {
        const a = coeffs[0]
        const b = coeffs[1]
        const c = coeffs[2]

        const delta = b**2 - 4 * a * c
        if (delta < 0) return []
        if (delta === 0)
            return [
                -b / (2 * a)
            ]

        return [
            (-b + Math.sqrt(delta)) / (2 * a),
            (-b - Math.sqrt(delta)) / (2 * a)
        ]
    }
    
    extremes(): number[] {
        if (this.n < 3) return []
        if (this.n > 4) return null

        if (this.n === 3) {
            const xExtremes = this.findLinRoots(
                [
                    this.points[0].x,
                    this.points[1].x
                ]
            )
            const yExtremes = this.findLinRoots(
                [
                    this.points[0].y,
                    this.points[1].y
                ]
            )

            return [
                ...xExtremes, ...yExtremes
            ].filter((x, i, a) => a.indexOf(x) === i)
        } else {
            const aX = this.points[0].x -
                       2 * this.points[1].x +
                       this.points[2].x
            const bX = 2 * (
                this.points[1].x - this.points[0].x
            )
            const cX = this.points[0].x

            const aY = this.points[0].y -
                       2 * this.points[1].y +
                       this.points[2].y
            const bY = 2 * (
                this.points[1].y - this.points[0].y
            )
            const cY = this.points[0].y

            const xExtremes = this.findQuadRoots(
                [aX, bX, cX]
            )
            const yExtremes = this.findQuadRoots(
                [aY, bY, cY]
            )

            return [
                ...xExtremes, ...yExtremes
            ].filter((x, i, a) => a.indexOf(x) === i)
        }
    }

    splitToQuadratic(): BezierSegment[] {
        if (this.n !== 4) return null

        const segments: BezierSegment[] = []

        const extremes = [
            ...this.d.extremes(),
            ...this.d.d.extremes()
        ].filter(
            (x) => x > 0 && x < 1
        ).filter((x, i, a) => a.indexOf(x) === i)

        console.log(this, this.d.extremes(), this.dd.extremes())

        return segments
    }
}