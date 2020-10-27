import { BezierPoint, BezierPointType } from "../../geometry/bezier/point"
import { Point } from "../../geometry/point"
import { UndoContext } from "../../undo/context"
import { ValueChangeAction } from "../../undo/actions/value"
import { IDrawableHandle } from "../drawable"
import { Viewport } from "../viewport"
import { getThemeColor } from "../../ui/theme"

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
        const angle2 = this.point.before.angle(
            this.point.base
        )

        ctx.beginPath()
        switch (this.point.type) {
            case BezierPointType.auto:
                ctx.moveTo(
                    6 * Math.cos(angle),
                    6 * Math.sin(angle)
                )
                ctx.lineTo(
                    6 * Math.cos(angle + Math.PI / 2),
                    6 * Math.sin(angle + Math.PI / 2)
                )
                ctx.lineTo(
                    6 * Math.cos(angle + Math.PI),
                    6 * Math.sin(angle + Math.PI)
                )
                ctx.lineTo(
                    6 * Math.cos(angle + 3 * Math.PI / 2),
                    6 * Math.sin(angle + 3 * Math.PI / 2)
                )
                break
            case BezierPointType.forward:
                ctx.moveTo(
                    7 * Math.cos(angle),
                    7 * Math.sin(angle)
                )
                ctx.lineTo(
                    7 * Math.cos(angle + Math.PI / 2),
                    7 * Math.sin(angle + Math.PI / 2)
                )
                ctx.lineTo(
                    7 * Math.cos(angle + 3 * Math.PI / 2),
                    7 * Math.sin(angle + 3 * Math.PI / 2)
                )
                break
            case BezierPointType.backward:
                ctx.moveTo(
                    7 * Math.cos(angle2),
                    7 * Math.sin(angle2)
                )
                ctx.lineTo(
                    7 * Math.cos(angle2 + Math.PI / 2),
                    7 * Math.sin(angle2 + Math.PI / 2)
                )
                ctx.lineTo(
                    7 * Math.cos(angle2 + 3 * Math.PI / 2),
                    7 * Math.sin(angle2 + 3 * Math.PI / 2)
                )
                break
            case BezierPointType.sharp:
                ctx.rect(-4, -4, 8, 8)
                break
            default:
                ctx.arc(0, 0, 5, 0, Math.PI * 2)
        }
        ctx.closePath()

        let fillColor = getThemeColor("handleFreeFill")

        if (this.point.type === BezierPointType.auto)
            fillColor = getThemeColor("handleAutoFill")
        else if (this.point.type === BezierPointType.sharp)
            fillColor = getThemeColor("handleSharpFill")
        else if (
            this.point.type === BezierPointType.forward ||
            this.point.type === BezierPointType.backward
        )
            fillColor = getThemeColor("handleDirFill")

        ctx.fillStyle = this.selected ?
                        getThemeColor("handleSelected") :
                        fillColor
                        
        ctx.strokeStyle = getThemeColor("handleSelected")
        ctx.lineWidth = 1
        ctx.fill()
        // ctx.stroke()
    }
}