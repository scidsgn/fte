import { IContext } from "../context/context"
import { IDrawableHandle } from "../drawable"
import { Viewport } from "../viewport"

export interface ITool {
    handles: IDrawableHandle[]
    supportsForeignHandles: boolean

    handleMouseEvent: (
        v: Viewport, e: MouseEvent, x: number, y: number
    ) => void
    render: (v: Viewport, ctx: CanvasRenderingContext2D) => void
    updateContext: (context: IContext) => void
}