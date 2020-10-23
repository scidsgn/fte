import { IContext } from "../context/context"
import { IDrawableHandle } from "../drawable"
import { IGuide } from "../guides/guide"
import { Viewport } from "../viewport"

export type ToolSubAction = {
    name: string,
    icon: string,
    accelerator: string,
    handler: () => void
}

export type ToolSubActionSection = {
    name: string,
    subactions: ToolSubAction[]
    collapse?: boolean
}

export interface ITool {
    name: string
    icon: string
    accelerator: string
    
    handles: IDrawableHandle[]
    guides: IGuide[]
    supportsForeignHandles: boolean

    subactions: ToolSubActionSection[]

    settingsPanel: HTMLElement[]
    
    handleMouseEvent: (
        v: Viewport, e: MouseEvent, x: number, y: number
    ) => void
    render: (v: Viewport, ctx: CanvasRenderingContext2D) => void
    updateContext: (context: IContext) => void
}