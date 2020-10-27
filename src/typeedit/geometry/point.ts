import { lerp } from "../utils/lerp"

export class Point {
    constructor(
        private _x: (number | (() => number)) = 0,
        private _y: (number | (() => number)) = 0
    ) {}

    get x() {
        if (this._x instanceof Function)
            return this._x()
        return this._x
    }

    set x(x: number) {
        this._x = x
    }

    get y() {
        if (this._y instanceof Function)
            return this._y()
        return this._y
    }

    set y(y: number) {
        this._y = y
    }

    move(dx: number, dy: number) {
        this.x += dx
        this.y += dy
    }

    distance(other: Point) {
        return Math.hypot(
            this.x - other.x,
            this.y - other.y
        )
    }

    angle(origin: Point) {
        return Math.atan2(
            this.y - origin.y,
            this.x - origin.x
        )
    }

    getDiff(last: Point) {
        return new Point(
            this.x - last.x,
            this.y - last.y
        )
    }

    copy(ref: Point) {
        this.x = ref.x
        this.y = ref.y
    }

    lerp(x: number, target: Point) {
        this.x = lerp(x, this.x, target.x)
        this.y = lerp(x, this.y, target.y)
    }
}
