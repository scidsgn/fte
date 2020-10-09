import { BezierCurve } from "../../geometry/bezier/curve"
import { Point } from "../../geometry/point"
import { BezierBasePointHandle } from "../handles/bezierBasePoint"
import { Viewport } from "../viewport"
import { IGuide } from "./guide"
import paper from "paper"

export class CurveGuide implements IGuide {
    public active = false
    public worldRender = true

    constructor(
        public source: BezierCurve
    ) { }

    nudge(v: Viewport, pos: Point, obj?: any) {
        if (
            obj instanceof BezierBasePointHandle &&
            obj.point.curve === this.source
        )
            return

        const paperPath = this.source.getPaperPath()
        const paperPoint = new paper.Point(pos.x, pos.y)

        const nearest = paperPath.getNearestPoint(paperPoint)
        if (!nearest) {
            this.active = false
            return
        }

        const clientPos = v.co.worldToClient(pos.x, pos.y)
        const clientTarget = v.co.worldToClient(
            nearest.x, nearest.y
        )

        if (Math.hypot(
            clientPos.x - clientTarget.x,
            clientPos.y - clientTarget.y
        ) < 10) {
            pos.x = nearest.x
            pos.y = nearest.y
            this.active = true
        } else {
            this.active = false
        }
    }

    render(v: Viewport, ctx: CanvasRenderingContext2D) {
        const path = BezierCurve.getPath2D([this.source])

        ctx.lineWidth = 1 / v.co.scaleFactor
        ctx.strokeStyle = "#f0f"
        ctx.stroke(path)
    }
}