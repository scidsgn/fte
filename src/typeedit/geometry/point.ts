export class Point {
    constructor(
        public x = 0,
        public y = 0
    ) {}

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
}