import { Point } from "../point";

export enum BezierPointType {
    free, auto
}

export class BezierPoint {
    constructor(
        public base: Point,
        public before: Point,
        public after: Point,
        public type: BezierPointType = BezierPointType.auto
    ) {}
}