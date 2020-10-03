import { IContext } from "../context/context"
import { IDrawableHandle } from "../drawable"
import { Viewport } from "../viewport"

export type ToolSubAction = {
    name: string,
    icon: string,
    accelerator: string,
    handler: () => void
}

export interface ITool {
    name: string
    icon: string
    accelerator: string
    
    handles: IDrawableHandle[]
    supportsForeignHandles: boolean

    subactions: ToolSubAction[]

    handleMouseEvent: (
        v: Viewport, e: MouseEvent, x: number, y: number
    ) => void
    render: (v: Viewport, ctx: CanvasRenderingContext2D) => void
    updateContext: (context: IContext) => void
}