import { BezierPoint, BezierPointType } from "../../geometry/bezier/point"
import { Point } from "../../geometry/point"
import { UndoContext } from "../../undo/context"
import { ValueChangeAction } from "../../undo/actions/value"
import { IDrawableHandle } from "../drawable"
import { Viewport } from "../viewport"

export class BezierControlPointHandle implements IDrawableHandle {
    public hitRadius = 6
    public selected = false
    public type = "BezierControlPointHandle"
    
    constructor(
        private point: BezierPoint,
        private cpoint: Point
    ) {}

    get position() {
        return this.cpoint
    }

    move(
        v: Viewport, pos: Point, dPos: Point,
        pivot: IDrawableHandle,
        e?: MouseEvent
    ) {
        // let forceType = null
        // if (
        //     this.point.type !== BezierPointType.free &&
        //     e.altKey
        // )
        //     forceType = BezierPointType.free

        this.point.movePoint(this.cpoint, dPos)
    }

    prepareUndo(uc: UndoContext) {
        uc.addAction(
            new ValueChangeAction(this.point.base, ["x", "y"]),
            new ValueChangeAction(this.point.before, ["x", "y"]),
            new ValueChangeAction(this.point.after, ["x", "y"])
        )
    }

    render(v: Viewport, ctx: CanvasRenderingContext2D) {
        const basePos = v.co.worldToClient(
            this.point.base.x, this.point.base.y
        )
        const ctrlPos = v.co.worldToClient(
            this.cpoint.x, this.cpoint.y
        )

        ctx.strokeStyle = "#555"
        ctx.lineWidth = 1
        ctx.beginPath()
        ctx.moveTo(
            basePos.x - ctrlPos.x,
            basePos.y - ctrlPos.y
        )
        ctx.lineTo(0, 0)
        ctx.stroke()

        ctx.fillStyle = this.selected ? "#111" : "#555"
        ctx.beginPath()
        ctx.arc(0, 0, 3, 0, 2 * Math.PI)
        ctx.fill()
    }
}