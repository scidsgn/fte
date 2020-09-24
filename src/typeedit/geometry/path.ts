import { IDrawable } from "../viewport/drawable"
import { Viewport } from "../viewport/viewport"

export interface IPathSource {
    path2D: Path2D
}

export class Path implements IDrawable {
    constructor(
        public src: IPathSource
    ) {}

    render(v: Viewport, ctx: CanvasRenderingContext2D) {
        const path = this.src.path2D

        ctx.fillStyle = "#00f3"
        ctx.fill(path)
        ctx.strokeStyle = "#08f"
        ctx.stroke(path)
    }
}