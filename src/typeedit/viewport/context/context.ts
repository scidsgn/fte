import { IDrawable, IDrawableHandle } from "../drawable"
import { IGuide } from "../guides/guide"

export interface IContext extends IDrawable {
    handles: IDrawableHandle[]
    grids: IGuide[]
    guides: IGuide[]
}