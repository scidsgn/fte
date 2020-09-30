export class Point {
    constructor(
        public x = 0,
        public y = 0
    ) {}

    move(dx: number, dy: number) {
        this.x += dx
        this.y += dy
    }

    getDiff(last: Point) {
        return new Point(
            this.x - last.x,
            this.y - last.y
        )
    }
}