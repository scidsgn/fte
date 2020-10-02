import { EventEmitter } from "events"
import { Point } from "../point"
import { BezierCurve } from "./curve"

export enum BezierPointType {
    free, auto, sharp
}

export class BezierPoint extends EventEmitter {
    public curve: BezierCurve = null

    constructor(
        public base: Point,
        public before: Point,
        public after: Point,
        public type: BezierPointType = BezierPointType.auto
    ) {
        super()
        
        this.on("modified", () => {
            if (this.curve) this.curve.emit("modified")
        })
    }

    determineType() {
        const radius1 = this.after.distance(this.base)
        const radius2 = this.before.distance(this.base)

        if (radius1 < 0.0001 && radius2 < 0.0001) {
            this.type = BezierPointType.sharp
            return
        }

        const angle1 = this.after.angle(this.base)
        const angle2 = this.before.angle(this.base)

        const angleDiff = Math.abs(angle1 - angle2)
        const piDiff = angleDiff / Math.PI

        if (Math.abs(piDiff - Math.round(piDiff)) < 0.0001)
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
}