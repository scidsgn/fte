import { Glyph } from "../../font/glyph";
import { BezierCurve } from "../../geometry/bezier/curve";
import { BezierPoint } from "../../geometry/bezier/point";
import { Point } from "../../geometry/point";
import { ArrayAddAction } from "../../undo/actions/array";
import { finalizeUndoContext, undoContext } from "../../undo/history";
import { BezierContext } from "../context/bezier";
import { IContext } from "../context/context";
import { GlyphContext } from "../context/glyph";
import { IDrawableHandle } from "../drawable";
import { IGuide } from "../guides/guide";
import { PointGuide } from "../guides/point";
import { Viewport } from "../viewport";
import { ITool, ToolSubAction, ToolSubActionSection } from "./tool";

export class RectangleTool implements ITool {
    public name = "Rectangle"
    public icon = "rectangletool"
    public accelerator = "KeyS"

    public handles: IDrawableHandle[] = []
    public guides: IGuide[] = []
    public supportsForeignHandles = false

    public subactions: ToolSubActionSection[] = []

    public settingsPanel: HTMLElement[] = null

    private startPoint: Point

    private glyph: Glyph

    private currentBezier: BezierCurve

    createRect(): BezierCurve {
        const curve = new BezierCurve(this.glyph)

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

        curve.points.forEach(p => p.determineType())

        return curve
    }

    updateRectangle(pos: Point, e: MouseEvent) {
        const min = new Point(
            this.startPoint.x, this.startPoint.y
        )
        const max = new Point(pos.x, pos.y)

        if (e.shiftKey) {
            const w = max.x - min.x
            const h = max.y - min.y

            const size = Math.min(
                Math.abs(w), Math.abs(h)
            )

            max.x = Math.sign(w) * size + min.x
            max.y = Math.sign(h) * size + min.y
        }
        if (e.ctrlKey) {
            min.x = 2 * min.x - max.x
            min.y = 2 * min.y - max.y
        }

        this.currentBezier.points[0].base.x = min.x
        this.currentBezier.points[0].base.y = min.y
        this.currentBezier.points[0].before.x = min.x
        this.currentBezier.points[0].before.y = min.y
        this.currentBezier.points[0].after.x = min.x
        this.currentBezier.points[0].after.y = min.y

        this.currentBezier.points[1].base.x = max.x
        this.currentBezier.points[1].base.y = min.y
        this.currentBezier.points[1].before.x = max.x
        this.currentBezier.points[1].before.y = min.y
        this.currentBezier.points[1].after.x = max.x
        this.currentBezier.points[1].after.y = min.y

        this.currentBezier.points[2].base.x = max.x
        this.currentBezier.points[2].base.y = max.y
        this.currentBezier.points[2].before.x = max.x
        this.currentBezier.points[2].before.y = max.y
        this.currentBezier.points[2].after.x = max.x
        this.currentBezier.points[2].after.y = max.y

        this.currentBezier.points[3].base.x = min.x
        this.currentBezier.points[3].base.y = max.y
        this.currentBezier.points[3].before.x = min.x
        this.currentBezier.points[3].before.y = max.y
        this.currentBezier.points[3].after.x = min.x
        this.currentBezier.points[3].after.y = max.y
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
            this.currentBezier = this.createRect()
            this.startPoint = pos

            this.updateRectangle(pos, e)

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
            this.updateRectangle(pos, e)
        } else if (
            e.type === "mouseup"
        ) {
            if (this.currentBezier) {
                finalizeUndoContext("Rectangle")

                this.currentBezier = null
                this.startPoint = null

                this.glyph.emit("modified")
            }
        }
    }

    render(v: Viewport, ctx: CanvasRenderingContext2D) {
    }

    updateContext(context: IContext) {
        if (!(context instanceof GlyphContext)) return

        this.glyph = context.glyph

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