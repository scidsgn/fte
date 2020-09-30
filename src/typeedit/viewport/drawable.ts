import { Point } from "../geometry/point"
import { UndoContext } from "../undo/action";
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
    move: (
        v: Viewport,
        pos: Point, dPos: Point,
        pivot: IDrawableHandle,
        e?: MouseEvent
    ) => void
    prepareUndo: (uc: UndoContext) => void
}