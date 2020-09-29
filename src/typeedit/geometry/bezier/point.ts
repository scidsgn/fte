import { Point } from "../point";
import { BezierCurve } from "./curve";

export enum BezierPointType {
    free, auto
}

export class BezierPoint {
    public curve: BezierCurve = null

    constructor(
        public base: Point,
        public before: Point,
        public after: Point,
        public type: BezierPointType = BezierPointType.auto
    ) {}
}