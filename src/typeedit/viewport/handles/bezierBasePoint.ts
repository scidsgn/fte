import { BezierPoint, BezierPointType } from "../../geometry/bezier/point"
import { Point } from "../../geometry/point"
import { UndoContext, ValueChangeAction } from "../../undo/action"
import { IDrawableHandle } from "../drawable"
import { Viewport } from "../viewport"

export class BezierBasePointHandle implements IDrawableHandle {
    public hitRadius = 10
    public selected = false
    public type = "BezierBasePointHandle"
    
    constructor(
        public point: BezierPoint
    ) {}

    get position() {
        return this.point.base
    }

    move(
        v: Viewport, pos: Point, dPos: Point,
        pivot: IDrawableHandle,
        e?: MouseEvent
    ) {
        this.point.movePoint(this.point.base, dPos)
    }

    prepareUndo(uc: UndoContext) {
        uc.addAction(
            new ValueChangeAction(this.point.base, ["x", "y"]),
            new ValueChangeAction(this.point.before, ["x", "y"]),
            new ValueChangeAction(this.point.after, ["x", "y"])
        )
    }

    render(v: Viewport, ctx: CanvasRenderingContext2D) {
        const angle = this.point.after.angle(
            this.point.base
        )

        ctx.beginPath()
        switch (this.point.type) {
            case BezierPointType.auto:
                ctx.moveTo(
                    5 * Math.cos(angle),
                    5 * Math.sin(angle)
                )
                ctx.lineTo(
                    5 * Math.cos(angle + Math.PI / 2),
                    5 * Math.sin(angle + Math.PI / 2)
                )
                ctx.lineTo(
                    5 * Math.cos(angle + Math.PI),
                    5 * Math.sin(angle + Math.PI)
                )
                ctx.lineTo(
                    5 * Math.cos(angle + 3 * Math.PI / 2),
                    5 * Math.sin(angle + 3 * Math.PI / 2)
                )
                break
            case BezierPointType.sharp:
                ctx.rect(-4, -4, 8, 8)
                break
            default:
                ctx.arc(0, 0, 5, 0, Math.PI * 2)
        }
        ctx.closePath()

        ctx.fillStyle = this.selected ? "#111" : "#fff"
        ctx.strokeStyle = "#111"
        ctx.lineWidth = 1
        ctx.fill()
        ctx.stroke()
    }
}