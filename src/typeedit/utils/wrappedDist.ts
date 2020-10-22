export function wrappedDist(x: number, y: number, max: number) {
    let extraX = (x > max / 2) ? (x - max) : (x + max)

    return Math.min(
        Math.abs(x - y), Math.abs(extraX - y)
    )
}