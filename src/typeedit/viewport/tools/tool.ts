import { Viewport } from "../viewport";

export interface ITool {
    handleMouseEvent: (v: Viewport, e: MouseEvent) => void
    render: (v: Viewport, ctx: CanvasRenderingContext2D) => void
}