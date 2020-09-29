import { BezierCurve } from "../../geometry/bezier/curve";
import { Path } from "../../geometry/path";
import { IDrawableHandle } from "../drawable";
import { Viewport } from "../viewport";
import { IContext } from "./context"

export class BezierContext implements IContext {
    public handles: IDrawableHandle[] = []

    constructor(
        public beziers: BezierCurve[]
    ) {}

    render(v: Viewport, ctx: CanvasRenderingContext2D) {
        const path = BezierCurve.getPath2D(this.beziers)

        ctx.fillStyle = "#00f3"
        ctx.fill(path)
        ctx.strokeStyle = "#08f"
        ctx.stroke(path)
    }
}