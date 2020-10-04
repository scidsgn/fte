import { Point } from "../../geometry/point";
import { Viewport } from "../viewport";

export interface IGuide {
    active: boolean
    source?: any
    worldRender?: boolean

    nudge: (v: Viewport, pos: Point, obj?: any) => void
    render: (v: Viewport, ctx: CanvasRenderingContext2D) => void
}

