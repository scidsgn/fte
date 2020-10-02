import { Font } from "../font/font"
import { Glyph } from "../font/glyph"
import { BezierCurve } from "../geometry/bezier/curve"

const glyphListContainer = document.querySelector("div.glyphList")

function drawGlyphPreview(glyph: Glyph) {
    const canvas: HTMLCanvasElement = glyphListContainer.querySelector(
        `div[data-name=${glyph.name}] canvas`
    )
    if (!canvas) return

    const ctx = canvas.getContext("2d")

    ctx.resetTransform()
    ctx.clearRect(0, 0, 90, 90)
    
    const path = BezierCurve.getPath2D(
        glyph.finalBeziers
    )

    const width = (
        glyph.metrics.rightBearing - glyph.metrics.leftBearing
    )

    ctx.scale(50 / 512, 50 / 512)
    ctx.translate((512 - width) / 2, 204)
    ctx.fillStyle = "#000"
    ctx.fill(path)
}

export function prepareGlyphList(font: Font) {
    glyphListContainer.innerHTML = ""

    font.glyphs.forEach(
        glyph => {
            const glyphDiv = document.createElement("div")
            glyphDiv.className = "glyph"
            glyphDiv.setAttribute("data-name", glyph.name)

            const glyphLabel = document.createElement("label")
            glyphLabel.textContent = glyph.name
            glyphDiv.appendChild(glyphLabel)

            const glyphCanvas = document.createElement("canvas")
            glyphCanvas.width = 90
            glyphCanvas.height = 90
            glyphDiv.appendChild(glyphCanvas)

            glyphListContainer.appendChild(glyphDiv)

            drawGlyphPreview(glyph)
        }
    )

    font.on("glyphModified", (glyph: Glyph) => {
        drawGlyphPreview(glyph)
    })
}