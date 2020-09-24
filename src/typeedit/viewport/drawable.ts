import { Point } from "../geometry/point"
import { Viewport } from "./viewport";

export interface IDrawable {
    render: (v: Viewport, ctx: CanvasRenderingContext2D) => void
}

export interface IDrawableHandle {
    hitRadius: number
    position: Point
    selected: boolean
    type: string

    render: (v: Viewport, ctx: CanvasRenderingContext2D) => void
    move: (v: Viewport, dx: number, dy: number, pivot: IDrawableHandle) => void
}