import { BezierCurve } from "../../geometry/bezier/curve"
import { BezierPoint, BezierPointType } from "../../geometry/bezier/point"
import { Path } from "../../geometry/path"
import { Point } from "../../geometry/point"
import { BezierContext } from "../context/bezier"
import { IContext } from "../context/context"
import { IDrawableHandle } from "../drawable"
import { BezierBasePointHandle } from "../handles/bezierBasePoint"
import { BezierControlPointHandle } from "../handles/bezierControlPoint"
import { Viewport } from "../viewport"
import { ITool } from "./tool"

export class BezierPenTool implements ITool {
    private currentBezier: BezierCurve = null
    private currentPoint: BezierPoint = null

    public handles: IDrawableHandle[] = []
    public supportsForeignHandles = false

    handleMouseEvent(v: Viewport, e: MouseEvent, x: number, y: number) {
        if (!(v.context instanceof BezierContext)) return

        const pos = v.co.clientToWorld(
            x, y
        )

        if (
            e.type === "mousedown" && e.buttons & 1
        ) {
            if (!this.currentBezier) {
                this.currentBezier = new BezierCurve()
                v.context.beziers.push(
                    this.currentBezier
                )
            }

            const nearHandle = v.nearHandle(
                pos.x, pos.y, "BezierBasePointHandle"
            )
            if (
                nearHandle &&
                nearHandle instanceof BezierBasePointHandle &&
                nearHandle.position === this.currentBezier.points[0].base
            ) {
                // Forget the curve, but allow last adjustments
                this.currentPoint = this.currentBezier.points[0]
                this.currentBezier = null
            } else {
                // Add a point
                const point = new BezierPoint(
                    new Point(pos.x, pos.y),
                    new Point(pos.x, pos.y),
                    new Point(pos.x, pos.y)
                )
                this.currentPoint = point
                this.currentBezier.addPoint(point)

                this.handles.push(
                    new BezierControlPointHandle(point, point.before),
                    new BezierControlPointHandle(point, point.after),
                    new BezierBasePointHandle(point)
                )
            }
        } else if (
            e.type === "mousemove" && e.buttons & 1 &&
            this.currentPoint
        ) {
            this.currentPoint.after.x = pos.x
            this.currentPoint.after.y = pos.y

            if (!e.altKey) {
                this.currentPoint.type = BezierPointType.auto
                this.currentPoint.before.x = 2 * this.currentPoint.base.x - pos.x
                this.currentPoint.before.y = 2 * this.currentPoint.base.y - pos.y
            } else {
                this.currentPoint.type = BezierPointType.free
            }
        } else if (
            e.type === "mouseup"
        ) {
            this.currentPoint = null
            if (this.currentBezier === null) {
                this.handles = []
            }
        }
    }

    render(v: Viewport, ctx: CanvasRenderingContext2D) {
    }

    updateContext(context: IContext) {}
}