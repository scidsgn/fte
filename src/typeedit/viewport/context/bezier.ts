import { BezierCurve } from "../../geometry/bezier/curve";
import { IDrawableHandle } from "../drawable";
import { IGuide } from "../guides/guide";
import { Viewport } from "../viewport";
import { IContext } from "./context";

export class BezierContext implements IContext {
    public handles: IDrawableHandle[] = []
    public guides: IGuide[] = []
    public grids: IGuide[] = []

    constructor(
        public beziers: BezierCurve[]
    ) {}

    render(v: Viewport, ctx: CanvasRenderingContext2D) {
        // Nothing tbh
    }
}