import { BezierCurve } from "../../geometry/bezier/curve"
import { IDrawable, IDrawableHandle } from "../drawable"

export interface IContext extends IDrawable {
    handles: IDrawableHandle[]
}