export function lerp(x: number, a: number, b: number) {
    return a + x * (b - a)
}

export function unlerp(X: number, a: number, b: number) {
    if (a === b) return 0
    return (X - a) / (b - a)
}