import { EventEmitter } from "events"
import { BezierCurve } from "../geometry/bezier/curve"
import { Font } from "./font"

export type GlyphMetrics = {
    leftBearing: number,
    rightBearing: number
}

export class Glyph extends EventEmitter {
    public finalBeziers: BezierCurve[] = []

    constructor(
        public font: Font,
        public name: string,
        public codePoint: number,
        public metrics: GlyphMetrics,
        public beziers: BezierCurve[]
    ) {
        super()

        if (!name) {
            this.name = codePoint ?
                   `uni${codePoint.toString(16).toUpperCase().padStart(4, "0")}` :
                   ".notdef"
        }
        
        this.beziers.forEach(b => b.glyph = this)
        this.finalBeziers = beziers // for now

        this.on("modified", () => {
            this.font.emit("glyphModified", this)
        })
    }

    get comparableCodePoint() {
        if (this.name === ".notdef") return -2
        if (this.name === ".null") return -1
        return this.codePoint ?? Infinity
    }

    updateBeziers() {
        // Nothing for now
        // TODO: modifiers
        this.finalBeziers = this.beziers
    }
}