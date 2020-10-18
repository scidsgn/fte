import { SmartBuffer } from "smart-buffer"
import { Font } from "../../font/font"
import { Glyph } from "../../font/glyph"
import { BezierCurve } from "../../geometry/bezier/curve"
import { BezierPoint } from "../../geometry/bezier/point"
import { Point } from "../../geometry/point"

const fontInfoIndices = [
    "copyright",
    "description",
    "designer",
    "designerURL",
    "fontFamily",
    "fontSubfamily",
    "fullName",
    "license",
    "licenseURL",
    "manufacturer",
    "manufacturerURL",
    "postScriptName",
    "uniqueID",
    "version",
    "trademark",
    "compatibleFullName"
]

type FMET = {
    ascender: number,
    descender: number,
    xHeight: number
}

type OUTLEntry = {
    handles: {
        type: number,
        base: number[],
        before: number[],
        after: number[]
    }[],
    startIndices: number[]
}

type GLPHEntry = {
    codePoint: number,
    name: string,
    leftSide: number,
    rightSide: number,
    outlines: number[]
}

export class FTEX1 {
    protected ftexVersion = 1

    protected fmet: FMET
    
    protected outl: OUTLEntry[] = []
    protected glph: GLPHEntry[] = []
    protected fnam: {
        index: number,
        name: string
    }[] = []

    get tableCount() {
        let count = 0

        if (this.fnam.length) count++
        if (this.fmet) count++
        if (this.outl.length) count++
        if (this.glph.length) count++

        return count
    }

    static fromFont(font: Font) {
        const ftex = new FTEX1()

        ftex.setFMET(font)
        ftex.setGLPH(font)
        ftex.setFNAM(font)

        return ftex
    }

    getFont(): Font {
        if (this.tableCount < 4) return null

        const info: any = {}
        this.fnam.forEach(
            name => info[fontInfoIndices[name.index]] = name.name
        )

        const metrics = this.fmet

        const font = new Font(info, metrics, [])

        this.glph.forEach(
            g => {
                if (!g.outlines.length) return

                font.addGlyph(
                    new Glyph(
                        font,
                        g.name,
                        (g.codePoint === 0) ? undefined : g.codePoint,
                        {
                            leftBearing: g.leftSide,
                            rightBearing: g.rightSide
                        },
                        this.getCurvesFromOUTL(
                            this.outl[g.outlines[0]]
                        )
                    )
                )
            }
        )

        return font
    }

    getCurvesFromOUTL(outl: OUTLEntry): BezierCurve[] {
        return outl.startIndices.map(
            (index, i) => {
                const handles = (i === outl.startIndices.length - 1) ?
                                outl.handles.slice(index) :
                                outl.handles.slice(index, outl.startIndices[i + 1])
                const curve = new BezierCurve()

                handles.forEach(
                    h => {
                        const point = new BezierPoint(
                            new Point(h.base[0], h.base[1]),
                            new Point(h.before[0], h.before[1]),
                            new Point(h.after[0], h.after[1])
                        )
                        point.type = h.type

                        curve.addPoint(point)
                    }
                )
                
                return curve
            }
        )
    }

    encode(): SmartBuffer {
        const buf = new SmartBuffer()
        this.encodeFTEXHeader(buf)

        if (this.fnam.length) this.encodeFNAM(buf)
        if (this.fmet) this.encodeFMET(buf)
        if (this.outl.length) this.encodeOUTL(buf)
        if (this.glph.length) this.encodeGLPH(buf)

        return buf
    }

    decode(buffer: SmartBuffer) {
        if (
            buffer.readString(4, "ascii") !== "FTEX"
        )
            throw new Error("Not a supported FTEX file.")
        if (
            buffer.readUInt8() !== this.ftexVersion
        )
            throw new Error("Not a supported FTEX version.")
    
        const numTables = buffer.readUInt16LE()
        const requiredTables = [
            "OUTL", "GLPH", "FMET", "FNAM"
        ]

        for (let i = 0; i < numTables; i++) {
            const tag = buffer.readString(4, "ascii")
            
            const index = requiredTables.indexOf(tag)
            if (index < 0)
                throw new Error(`Unsupported table: ${tag}.`)
            requiredTables.splice(index, 1)
            
            switch (tag) {
                case "FMET":
                    this.decodeFMET(buffer)
                    break
                case "FNAM":
                    this.decodeFNAM(buffer)
                    break
                case "OUTL":
                    this.decodeOUTL(buffer)
                    break
                case "GLPH":
                    this.decodeGLPH(buffer)
                    break
            }
        }

        if (requiredTables.length)
            throw new Error(
                `The following required tables were not found: ${requiredTables.join(", ")}.`
            )
    }

    encodeVString(buf: SmartBuffer, str: string) {
        buf.writeUInt16LE(str.length)
        buf.writeString(str, "utf-8")
    }

    decodeVString(buf: SmartBuffer): string {
        const length = buf.readUInt16LE()
        return buf.readString(length, "utf-8")
    }

    // FTEX - File Header
    encodeFTEXHeader(buffer: SmartBuffer) {
        buffer.writeString("FTEX", "ascii")
        buffer.writeUInt8(this.ftexVersion)
        buffer.writeUInt16LE(this.tableCount)
    }

    // FMET - Font Vertical Metrics
    setFMET(font: Font) {
        this.fmet = font.metrics
    }

    encodeFMET(buffer: SmartBuffer) {
        buffer.writeString("FMET", "ascii")
        buffer.writeFloatLE(this.fmet.ascender)
        buffer.writeFloatLE(this.fmet.descender)
        buffer.writeFloatLE(this.fmet.xHeight)
    }

    decodeFMET(buffer: SmartBuffer) {
        this.fmet = {
            ascender: buffer.readFloatLE(),
            descender: buffer.readFloatLE(),
            xHeight: buffer.readFloatLE()
        }
    }

    // OUTL - Outlines
    addOUTL(beziers: BezierCurve[]) {
        const handles = beziers.map(
            b => b.points
        ).flat().map(
            p => {
                return {
                    type: p.type,
                    base: [p.base.x, p.base.y],
                    before: [p.before.x, p.before.y],
                    after: [p.after.x, p.after.y]
                }
            }
        )
        const startIndices: number[] = []

        let acc = 0
        beziers.forEach(
            b => {
                startIndices.push(acc)
                acc += b.points.length
            }
        )

        return this.outl.push(
            {
                handles,
                startIndices
            }
        ) - 1
    }

    encodeOUTL(buffer: SmartBuffer) {
        buffer.writeString("OUTL", "ascii")
        buffer.writeUInt32LE(this.outl.length)

        this.outl.forEach(
            outl => {
                buffer.writeUInt16LE(outl.handles.length)
                buffer.writeUInt16LE(outl.startIndices.length)

                outl.handles.forEach(
                    h => {
                        buffer.writeUInt8(h.type)
                        buffer.writeFloatLE(h.base[0])
                        buffer.writeFloatLE(h.base[1])
                        buffer.writeFloatLE(h.before[0])
                        buffer.writeFloatLE(h.before[1])
                        buffer.writeFloatLE(h.after[0])
                        buffer.writeFloatLE(h.after[1])
                    }
                )
                outl.startIndices.forEach(
                    idx => buffer.writeUInt16LE(idx)
                )
            }
        )
    }

    decodeOUTL(buffer: SmartBuffer) {
        const count = buffer.readUInt32LE()

        for (let i = 0; i < count; i++) {
            const handleCount = buffer.readInt16LE()
            const curveCount = buffer.readInt16LE()

            const handles: {
                type: number,
                base: number[],
                before: number[],
                after: number[]
            }[] = []
            const startIndices: number[] = []

            for (let j = 0; j < handleCount; j++) {
                handles.push(
                    {
                        type: buffer.readUInt8(),
                        base: [
                            buffer.readFloatLE(),
                            buffer.readFloatLE()
                        ],
                        before: [
                            buffer.readFloatLE(),
                            buffer.readFloatLE()
                        ],
                        after: [
                            buffer.readFloatLE(),
                            buffer.readFloatLE()
                        ]
                    }
                )
            }

            for (let j = 0; j < curveCount; j++) {
                startIndices.push(buffer.readUInt16LE())
            }

            this.outl.push(
                {
                    handles, startIndices
                }
            )
        }
    }

    // GLPH - Glyphs
    setGLPH(font: Font) {
        font.glyphs.forEach(
            g => {
                const outlines = [g.beziers].map(
                    beziers => this.addOUTL(beziers)
                )

                this.glph.push(
                    {
                        codePoint: g.codePoint,
                        leftSide: g.metrics.leftBearing,
                        rightSide: g.metrics.rightBearing,
                        name: g.name,
                        outlines
                    }
                )
            }
        )
    }

    encodeGLPH(buffer: SmartBuffer) {
        buffer.writeString("GLPH", "ascii")
        buffer.writeUInt32LE(this.glph.length)

        this.glph.forEach(
            g => {
                buffer.writeUInt32LE(g.codePoint ?? 0)
                this.encodeVString(buffer, g.name)
                buffer.writeFloatLE(g.leftSide)
                buffer.writeFloatLE(g.rightSide)
                buffer.writeUInt16LE(g.outlines.length)

                g.outlines.forEach(
                    idx => buffer.writeUInt32LE(idx)
                )
            }
        )
    }

    decodeGLPH(buffer: SmartBuffer) {
        const count = buffer.readUInt32LE()

        for (let i = 0; i < count; i++) {
            const outlines: number[] = []
            const glyph: GLPHEntry = {
                codePoint: buffer.readUInt32LE(),
                name: this.decodeVString(buffer),
                leftSide: buffer.readFloatLE(),
                rightSide: buffer.readFloatLE(),
                outlines
            }

            const outlineCount = buffer.readUInt16LE()
            for (let j = 0; j < outlineCount; j++) {
                outlines.push(
                    buffer.readUInt32LE()
                )
            }

            this.glph.push(glyph)
        }
    }

    // FNAM - Font Names
    setFNAM(font: Font) {
        Object.keys(font.info).forEach(
            key => {
                const index = fontInfoIndices.indexOf(key)
                if (index < 0) return

                this.fnam.push(
                    {
                        index,
                        name: (font.info as any)[key]
                    }
                )
            }
        )
    }

    encodeFNAM(buffer: SmartBuffer) {
        buffer.writeString("FNAM", "ascii")
        buffer.writeUInt8(this.fnam.length)

        this.fnam.forEach(
            n => {
                buffer.writeUInt8(n.index)
                this.encodeVString(buffer, n.name)
            }
        )
    }

    decodeFNAM(buffer: SmartBuffer) {
        const count = buffer.readUInt8()

        for (let i = 0; i < count; i++) {
            const type = buffer.readUInt8()
            const str = this.decodeVString(buffer)

            this.fnam.push(
                {
                    index: type,
                    name: str
                }
            )
        }
    }
}