import { BezierCurve } from "../geometry/bezier/curve"

export class Glyph {
    public finalBeziers: BezierCurve[] = []

    constructor(
        public name: string,
        public codePoint: number,
        public beziers: BezierCurve[]
    ) {}

    updateBeziers() {
        // Nothing for now
        // TODO: modifiers
        this.finalBeziers = this.beziers
    }
}