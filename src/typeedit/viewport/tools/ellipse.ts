import { currentFont } from "../../app"
import { Glyph } from "../../font/glyph"
import { BezierCurve } from "../../geometry/bezier/curve"
import { BezierPoint } from "../../geometry/bezier/point"
import { Point } from "../../geometry/point"
import Accordion from "../../ui/panel/controls/accordion"
import Label from "../../ui/panel/controls/label"
import SliderInput from "../../ui/panel/controls/sliderInput"
import { ArrayAddAction } from "../../undo/actions/array"
import { finalizeUndoContext, undoContext } from "../../undo/history"
import { BezierContext } from "../context/bezier"
import { IContext } from "../context/context"
import { GlyphContext } from "../context/glyph"
import { IDrawableHandle } from "../drawable"
import { IGuide } from "../guides/guide"
import { PointGuide } from "../guides/point"
import { Viewport } from "../viewport"
import { ITool, ToolSubActionSection } from "./tool"

export class EllipseTool implements ITool {
    public name = "Ellipse"
    public icon = "ellipsetool"
    public accelerator = "KeyE"

    public handles: IDrawableHandle[] = []
    public guides: IGuide[] = []
    public supportsForeignHandles = false

    public subactions: ToolSubActionSection[] = []

    private startPoint: Point

    private glyph: Glyph

    private currentBezier: BezierCurve
    private configurableBezier: BezierCurve

    private currentOrigin: Point
    private currentScale: number
    private currentRadius: number

    private updateSettingsCallback = (k: string) => {
        if (k === "ellipseTension" && this.configurableBezier)
            this.updateEllipse()
    }

    get settingsPanel() {
        return [
            Accordion(
                "Shape properties", [], [
                    Label("Tension:"),
                    SliderInput(
                        () => currentFont.settings.ellipseTension,
                        (v: number) => currentFont.settings.ellipseTension = v,
                        (h) => {
                            currentFont.on("settingChanged", (k: string) => {
                                if (k === "ellipseTension")
                                    h(currentFont.settings.ellipseTension)
                            })
                        },
                        0, 1, 0.0001
                    )
                ]
            )
        ]
    }

    createEllipse(): BezierCurve {
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

        return curve
    }

    updateEllipseFromMouse(pos: Point, e: MouseEvent) {
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

        this.currentOrigin = origin
        this.currentRadius = radius
        this.currentScale = scale

        this.updateEllipse()
    }

    updateEllipse() {
        const origin = this.currentOrigin
        const radius = this.currentRadius
        const scale = this.currentScale

        const tension = currentFont.settings.ellipseTension

        this.configurableBezier.points[0].base.y = origin.y - radius
        this.configurableBezier.points[0].before.x = origin.x - tension * radius * scale
        this.configurableBezier.points[0].before.y = origin.y - radius
        this.configurableBezier.points[0].after.x = origin.x + tension * radius * scale
        this.configurableBezier.points[0].after.y = origin.y - radius
        this.configurableBezier.points[0].base.x = origin.x

        this.configurableBezier.points[1].base.y = origin.y
        this.configurableBezier.points[1].before.x = origin.x + radius * scale
        this.configurableBezier.points[1].before.y = origin.y - tension * radius
        this.configurableBezier.points[1].after.x = origin.x + radius * scale
        this.configurableBezier.points[1].after.y = origin.y + tension * radius
        this.configurableBezier.points[1].base.x = origin.x + radius * scale

        this.configurableBezier.points[2].base.x = origin.x
        this.configurableBezier.points[2].base.y = origin.y + radius
        this.configurableBezier.points[2].before.x = origin.x + tension * radius * scale
        this.configurableBezier.points[2].before.y = origin.y + radius
        this.configurableBezier.points[2].after.x = origin.x - tension * radius * scale
        this.configurableBezier.points[2].after.y = origin.y + radius

        this.configurableBezier.points[3].base.x = origin.x - radius * scale
        this.configurableBezier.points[3].base.y = origin.y
        this.configurableBezier.points[3].before.x = origin.x - radius * scale
        this.configurableBezier.points[3].before.y = origin.y + tension * radius
        this.configurableBezier.points[3].after.x = origin.x - radius * scale
        this.configurableBezier.points[3].after.y = origin.y - tension * radius
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
            this.configurableBezier = this.currentBezier
            this.startPoint = pos

            this.updateEllipseFromMouse(pos, e)

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
            this.updateEllipseFromMouse(pos, e)
        } else if (
            e.type === "mouseup"
        ) {
            if (this.currentBezier) {
                finalizeUndoContext("Ellipse")

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

        currentFont.off("settingChanged", this.updateSettingsCallback)
        currentFont.on("settingChanged", this.updateSettingsCallback)
    }
}