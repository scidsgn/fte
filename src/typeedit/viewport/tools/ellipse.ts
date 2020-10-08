import { BezierCurve } from "../../geometry/bezier/curve"
import { BezierPoint } from "../../geometry/bezier/point"
import { Point } from "../../geometry/point"
import { ArrayAddAction } from "../../undo/actions/array"
import { finalizeUndoContext, undoContext } from "../../undo/history"
import { lerp } from "../../utils/lerp"
import { BezierContext } from "../context/bezier"
import { IContext } from "../context/context"
import { IDrawableHandle } from "../drawable"
import { IGuide } from "../guides/guide"
import { PointGuide } from "../guides/point"
import { Viewport } from "../viewport"
import { ITool, ToolSubAction } from "./tool"

// ~ magic number ~
const magic = 4 * (Math.SQRT2 - 1) / 3

export class EllipseTool implements ITool {
    public name = "Ellipse"
    public icon = "ellipsetool"
    public accelerator = "KeyE"

    public handles: IDrawableHandle[] = []
    public guides: IGuide[] = []
    public supportsForeignHandles = false

    public subactions: ToolSubAction[][] = []

    private startPoint: Point

    private currentBezier: BezierCurve

    createEllipse(): BezierCurve {
        const curve = new BezierCurve()

        curve.addPoint(
            new BezierPoint(
                new Point(0, 0),
                new Point(0, 0),
                new Point(0, 0)
            )
        )
        curve.addPoint(
            new BezierPoint(
                new Point(0, 0),
                new Point(0, 0),
                new Point(0, 0)
            )
        )
        curve.addPoint(
            new BezierPoint(
                new Point(0, 0),
                new Point(0, 0),
                new Point(0, 0)
            )
        )
        curve.addPoint(
            new BezierPoint(
                new Point(0, 0),
                new Point(0, 0),
                new Point(0, 0)
            )
        )

        return curve
    }

    updateEllipse(pos: Point, e: MouseEvent) {
        const origin = new Point(
            this.startPoint.x, this.startPoint.y
        )
        let radius = Math.abs(pos.y - origin.y)
        let scale = Math.abs(
            (pos.x - origin.x) / (pos.y - origin.y)
        )

        if (e.shiftKey) {
            radius = Math.max(
                radius, Math.abs(pos.x - origin.x)
            )
            scale = 1
        }
        if (!e.ctrlKey) {
            radius /= 2
            origin.x += radius * scale * Math.sign(pos.x - origin.x)
            origin.y += radius * Math.sign(pos.y - origin.y)
        }

        this.currentBezier.points[0].base.x = origin.x
        this.currentBezier.points[0].base.y = origin.y - radius
        this.currentBezier.points[0].before.x = origin.x - magic * radius * scale
        this.currentBezier.points[0].before.y = origin.y - radius
        this.currentBezier.points[0].after.x = origin.x + magic * radius * scale
        this.currentBezier.points[0].after.y = origin.y - radius

        this.currentBezier.points[1].base.x = origin.x + radius * scale
        this.currentBezier.points[1].base.y = origin.y
        this.currentBezier.points[1].before.x = origin.x + radius * scale
        this.currentBezier.points[1].before.y = origin.y - magic * radius
        this.currentBezier.points[1].after.x = origin.x + radius * scale
        this.currentBezier.points[1].after.y = origin.y + magic * radius

        this.currentBezier.points[2].base.x = origin.x
        this.currentBezier.points[2].base.y = origin.y + radius
        this.currentBezier.points[2].before.x = origin.x + magic * radius * scale
        this.currentBezier.points[2].before.y = origin.y + radius
        this.currentBezier.points[2].after.x = origin.x - magic * radius * scale
        this.currentBezier.points[2].after.y = origin.y + radius

        this.currentBezier.points[3].base.x = origin.x - radius * scale
        this.currentBezier.points[3].base.y = origin.y
        this.currentBezier.points[3].before.x = origin.x - radius * scale
        this.currentBezier.points[3].before.y = origin.y + magic * radius
        this.currentBezier.points[3].after.x = origin.x - radius * scale
        this.currentBezier.points[3].after.y = origin.y - magic * radius
    }
    
    handleMouseEvent(
        v: Viewport, e: MouseEvent, x: number, y: number
    ) {
        if (!(v.context instanceof BezierContext)) return

        const pos = v.co.clientToWorld(
            x, y
        )
        v.nudgePoint(pos)

        if (
            e.type === "mousedown" && e.buttons & 1
        ) {
            this.currentBezier = this.createEllipse()
            this.startPoint = pos

            this.updateEllipse(pos, e)

            v.context.beziers.push(this.currentBezier)
            
            undoContext.addAction(
                new ArrayAddAction(
                    v.context.beziers, this.currentBezier,
                    v.context.beziers.length - 1
                )
            )
        } else if (
            e.type === "mousemove" && e.buttons & 1 &&
            this.startPoint
        ) {
            this.updateEllipse(pos, e)
        } else if (
            e.type === "mouseup"
        ) {
            if (this.currentBezier) {
                finalizeUndoContext("Ellipse")

                this.currentBezier = null
                this.startPoint = null
            }
        }
    }

    render(v: Viewport, ctx: CanvasRenderingContext2D) {
    }

    updateContext(context: IContext) {
        if (!(context instanceof BezierContext)) return

        this.handles = []
        this.guides = []
        
        for (let bezier of context.beziers) {
            for (let point of bezier.points) {
                this.guides.push(
                    new PointGuide(point.base)
                )
            }
        }
    }
}