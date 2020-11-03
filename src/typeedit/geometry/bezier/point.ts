import { EventEmitter } from "events"
import { ValueChangeAction } from "../../undo/actions/value"
import { undoContext } from "../../undo/history"
import { Point } from "../point"
import { BezierCurve } from "./curve"

export enum BezierPointType {
    free, auto, sharp, forward, backward
}

export class BezierPoint extends EventEmitter {
    public curve: BezierCurve = null

    constructor(
        public base: Point,
        public before: Point,
        public after: Point,
        public type: BezierPointType = BezierPointType.free
    ) {
        super()
        
        this.on("modified", () => {
            if (this.curve) this.curve.emit("modified")
        })
    }

    get previous(): BezierPoint {
        if (!this.curve) return

        const index = this.curve.points.indexOf(this)
        if (index === 0) return this.curve.points[
            this.curve.points.length - 1
        ]

        return this.curve.points[index - 1]
    }

    get next(): BezierPoint {
        if (!this.curve) return

        const index = this.curve.points.indexOf(this)
        return this.curve.points[
            (index + 1) % this.curve.points.length
        ]
    }

    reverse() {
        const t = this.before
        this.before = this.after
        this.after = t
    }

    determineType() {
        const radius1 = this.after.distance(this.base)
        const radius2 = this.before.distance(this.base)

        const angle1 = this.after.angle(this.base)
        const angle2 = this.before.angle(this.base)

        const prev = this.previous
        const next = this.next

        if (!prev || !next) return
    
        if (radius1 < 0.001 && radius2 < 0.001) {
            this.type = BezierPointType.sharp
            return
        } else if (
            radius1 < 0.001 && radius2 > 0.001 &&
            next.before.distance(next.base) < 0.001 &&
            Math.abs(
                angle2 - this.base.angle(next.base)
            ) < 0.001
        ) {
            this.type = BezierPointType.backward
            return
        } else if (
            radius1 > 0.001 && radius2 < 0.001 &&
            prev.after.distance(prev.base) < 0.001 &&
            Math.abs(
                angle1 - this.base.angle(prev.base)
            ) < 0.001
        ) {
            this.type = BezierPointType.forward
            return
        }

        const angleDiff = Math.abs(angle1 - angle2)

        if (
            Math.abs(angleDiff - Math.PI) < 0.001
        )
            this.type = BezierPointType.auto
    }

    movePoint(point: Point, dPos: Point) {
        if (point === this.base) {
            this.base.move(dPos.x, dPos.y)
            this.before.move(dPos.x, dPos.y)
            this.after.move(dPos.x, dPos.y)
        } else {
            const otherPoint = point === this.before ?
                               this.after : this.before
            
            point.move(dPos.x, dPos.y)

            if (this.type === BezierPointType.auto) {
                const otherRadius = otherPoint.distance(this.base)
                const angle = point.angle(this.base)

                otherPoint.x = otherRadius * Math.cos(angle + Math.PI) + this.base.x
                otherPoint.y = otherRadius * Math.sin(angle + Math.PI) + this.base.y
            }
        }

        this.curve.emit("modified")
    }

    convertType(type: BezierPointType) {
        undoContext.addAction(
            new ValueChangeAction(this.base, ["x", "y"]),
            new ValueChangeAction(this.before, ["x", "y"]),
            new ValueChangeAction(this.after, ["x", "y"]),
            new ValueChangeAction(this, ["type"])
        )

        if (type === BezierPointType.sharp) {
            this.before.copy(this.base)
            this.after.copy(this.base)
        } else if (type === BezierPointType.auto) {
            const r = Math.max(
                24,
                (
                    this.after.distance(this.base),
                    this.before.distance(this.base)
                ) / 2
            )
            const angle = (
                this.base.angle(this.previous.after) +
                this.next.before.angle(this.base)
            ) / 2

            this.after.x = this.base.x + r * Math.cos(angle)
            this.after.y = this.base.y + r * Math.sin(angle)
            this.before.x = this.base.x + r * Math.cos(angle + Math.PI)
            this.before.y = this.base.y + r * Math.sin(angle + Math.PI)
        }

        this.type = type
    }
}
