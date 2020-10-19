import { Glyph } from "../../font/glyph"
import { BezierCurve } from "../../geometry/bezier/curve"
import { BezierPoint, BezierPointType } from "../../geometry/bezier/point"
import { Point } from "../../geometry/point"
import { ArrayAddAction, ArrayRemoveAction } from "../../undo/actions/array"
import { ValueChangeAction } from "../../undo/actions/value"
import { finalizeUndoContext, undoContext } from "../../undo/history"
import { BezierContext } from "../context/bezier"
import { IContext } from "../context/context"
import { GlyphContext } from "../context/glyph"
import { IDrawableHandle } from "../drawable"
import { IGuide } from "../guides/guide"
import { PointGuide } from "../guides/point"
import { BezierBasePointHandle } from "../handles/bezierBasePoint"
import { BezierControlPointHandle } from "../handles/bezierControlPoint"
import { Viewport } from "../viewport"
import { ITool, ToolSubAction, ToolSubActionSection } from "./tool"

export class BezierPenTool implements ITool {
    public name = "Pen"
    public icon = "beziertool"
    public accelerator = "KeyB"

    private currentBezier: BezierCurve = null
    private finalAdjustmentStage = false

    public handles: IDrawableHandle[] = []
    public guides: IGuide[] = []
    public supportsForeignHandles = false

    public subactions: ToolSubActionSection[] = [
        {
            name: "Edit",
            subactions: [
                {
                    name: "Delete last point",
                    icon: "delete",
                    accelerator: "Delete",
                    handler: () => {
                        if (!this.currentBezier) return
    
                        const idx = this.currentBezier.points.length - 1
                        const point = this.currentBezier.points[
                            idx
                        ]
                        this.currentBezier.points.splice(idx, 1)
                        undoContext.addAction(
                            new ArrayRemoveAction(
                                this.currentBezier.points, point,
                                idx
                            )
                        )
    
                        const cpHandles = this.handles.filter(
                            h => h instanceof BezierControlPointHandle &&
                                 h.point === point
                        ) // length always = 2
    
                        const hIndex = this.handles.findIndex(
                            h => h instanceof BezierBasePointHandle &&
                                 h.point == point
                        )
                        this.handles.splice(hIndex, 1)
    
                        const cpIndex0 = this.handles.indexOf(cpHandles[0])
                        this.handles.splice(cpIndex0, 1)
    
                        const cpIndex1 = this.handles.indexOf(cpHandles[1])
                        this.handles.splice(cpIndex1, 1)
    
                        
                        undoContext.addAction(
                            new ArrayRemoveAction(
                                this.handles, this.handles[hIndex],
                                hIndex
                            ),
                            new ArrayRemoveAction(
                                this.handles, this.handles[cpIndex0],
                                cpIndex0
                            ),
                            new ArrayRemoveAction(
                                this.handles, this.handles[cpIndex1],
                                cpIndex1
                            )
                        )
    
                        if (!this.currentBezier.points.length) {
                            const bIdx = this.glyph.beziers.indexOf(
                                this.currentBezier
                            )
                            this.glyph.beziers.splice(bIdx, 1)
                            this.currentBezier = null
    
                            undoContext.addAction(
                                new ArrayRemoveAction(
                                    this.glyph.beziers, this.currentBezier,
                                    bIdx
                                )
                            )
                        }
    
                        finalizeUndoContext("Delete last point")
                    }
                }
            ]
        }
    ]

    private glyph: Glyph

    get currentPoint(): BezierPoint {
        if (!this.currentBezier) return null

        if (this.finalAdjustmentStage)
            return this.currentBezier.points[0]

        return this.currentBezier.points[
            this.currentBezier.points.length - 1
        ]
    }

    handleMouseEvent(v: Viewport, e: MouseEvent, x: number, y: number) {
        if (!(v.context instanceof BezierContext)) return

        const pos = v.co.clientToWorld(
            x, y
        )
        const rawPos = new Point()
        rawPos.copy(pos)

        v.nudgePoint(pos)

        if (
            e.type === "mousedown" && e.buttons & 1
        ) {
            if (!this.currentBezier) {
                this.currentBezier = new BezierCurve(this.glyph)
                const length = v.context.beziers.push(
                    this.currentBezier
                )

                undoContext.addAction(
                    new ArrayAddAction(
                        v.context.beziers,
                        this.currentBezier,
                        length - 1
                    )
                )
            }

            let nearHandle = v.nearHandle(
                pos.x, pos.y, "BezierBasePointHandle"
            )
            if (
                this.currentBezier && this.currentBezier.points.length
            ) {
                const rawNearHandle = v.nearHandle(
                    rawPos.x, rawPos.y, "BezierBasePointHandle"
                )
                if (
                    rawNearHandle &&
                    nearHandle instanceof BezierBasePointHandle &&
                    nearHandle.position === this.currentBezier.points[0].base
                )
                    nearHandle = rawNearHandle
            }

            if (
                nearHandle &&
                nearHandle instanceof BezierBasePointHandle &&
                nearHandle.position === this.currentBezier.points[0].base
            ) {
                // Forget the curve, but allow last adjustments
                this.finalAdjustmentStage = true
                undoContext.addAction(
                    new ValueChangeAction(
                        this.currentPoint.base, ["x", "y"]
                    ),
                    new ValueChangeAction(
                        this.currentPoint.before, ["x", "y"]
                    ),
                    new ValueChangeAction(
                        this.currentPoint.after, ["x", "y"]
                    )
                )
            } else {
                // Add a point
                const point = new BezierPoint(
                    new Point(pos.x, pos.y),
                    new Point(pos.x, pos.y),
                    new Point(pos.x, pos.y)
                )
                this.currentBezier.addPoint(point)
                undoContext.addAction(
                    new ArrayAddAction(
                        this.currentBezier.points,
                        point,
                        this.currentBezier.points.length - 1
                    )
                )

                const length = this.handles.push(
                    new BezierControlPointHandle(point, point.before),
                    new BezierControlPointHandle(point, point.after),
                    new BezierBasePointHandle(point)
                )
                undoContext.addAction(
                    new ArrayAddAction(
                        this.handles,
                        this.handles[length - 3],
                        length - 3
                    ),
                    new ArrayAddAction(
                        this.handles,
                        this.handles[length - 2],
                        length - 2
                    ),
                    new ArrayAddAction(
                        this.handles,
                        this.handles[length - 1],
                        length - 1
                    )
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
            if (this.finalAdjustmentStage) {
                this.handles = []
                this.currentBezier.points[0].determineType()
                this.currentBezier = null

                finalizeUndoContext("Close curve")
            } else if (this.currentBezier.points.length === 1) {
                finalizeUndoContext("Create curve")
            } else {
                this.currentPoint.determineType()
                finalizeUndoContext("Add point")
            }
            this.finalAdjustmentStage = false
            
            this.glyph.emit("modified")
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