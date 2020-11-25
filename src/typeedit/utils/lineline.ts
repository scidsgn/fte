import { Point } from "../geometry/point";

export function lineLineIntersection(
    line1S: Point, line1E: Point,
    line2S: Point, line2E: Point
): Point {
    const x1 = line1S.x, y1 = line1S.y
    const x2 = line1E.x, y2 = line1E.y
    const x3 = line2S.x, y3 = line2S.y
    const x4 = line2E.x, y4 = line2E.y

    const d = (x1 - x2) * (y3 - y4) - (y1 - y2) * (x3 - x4)
    if (d === 0) return null

    return new Point(
        (
            (x1 * y2 - y1 * x2) * (x3 - x4) - (x1 - x2) * (x3 * y4 - y3 * x4)
        ) / d,
        (
            (x1 * y2 - y1 * x2) * (y3 - y4) - (y1 - y2) * (x3 * y4 - y3 * x4)
        ) / d
    )
}