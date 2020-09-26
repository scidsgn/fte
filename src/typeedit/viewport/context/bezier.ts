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
        this.beziers.map(b => new Path(b)).forEach(
            path => path.render(v, ctx)
        )
    }
}