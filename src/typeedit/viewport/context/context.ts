import { BezierCurve } from "../../geometry/bezier/curve"
import { IDrawable, IDrawableHandle } from "../drawable"
import { IGuide } from "../guides/guide"

export interface IContext extends IDrawable {
    handles: IDrawableHandle[]
    guides: IGuide[]
}