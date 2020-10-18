import { Font } from "../font/font";
import { BezierCurve } from "../geometry/bezier/curve";

const previewStrings = [
    "Quick brown cat",
    "General relativity",
    "01123581321",
    "Typography",
    "Audiovisual",
    "Another one bites the dust"
]

export function createFontPreview(font: Font) {
    const canvas: HTMLCanvasElement = document.querySelector(
        "canvas.previewGenerator"
    )
    const ctx = canvas.getContext("2d")
    ctx.clearRect(0, 0, canvas.width, canvas.height)

    const testString = previewStrings[
        Math.floor(previewStrings.length * Math.random())
    ]

    const glyphs = testString.split("").map(
        chr => font.glyphs.find(
            g => g.codePoint === chr.codePointAt(0)
        )
    ).filter(g => g)

    ctx.translate(0, 10)
    ctx.scale(30 / 512, 30 / 512)

    ctx.fillStyle = "#000"
    glyphs.forEach(
        g => {
            const path = BezierCurve.getPath2D(
                g.finalBeziers
            )
            ctx.fill(path)
            ctx.translate(
                g.metrics.rightBearing - g.metrics.leftBearing,
                0
            )
        }
    )

    return canvas.toDataURL()
}