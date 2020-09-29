import "./styles/app.scss"

import { Font as OTFont } from "opentype.js"
import { Viewport } from "./viewport/viewport"
import { BezierPenTool } from "./viewport/tools/bezierPen"
import { BezierContext } from "./viewport/context/bezier"
import { HandleTool } from "./viewport/tools/handle"
import { generateCurvesFromOTGlyph } from "./geometry/bezier/curve"
import { Glyph } from "./font/glyph"
import { GlyphContext } from "./viewport/context/glyph"
import { Font } from "./font/font"

export default (font: OTFont) => {
    const container = document.querySelector("div.viewport")

    const fteFont = Font.fromOTFont(font)

    const [
        glyph1, glyph2, glyph3, glyph4
    ] = [
        Glyph.fromOTGlyph(fteFont, font, font.charToGlyph("S")),
        Glyph.fromOTGlyph(fteFont, font, font.charToGlyph("C")),
        Glyph.fromOTGlyph(fteFont, font, font.charToGlyph("i")),
        Glyph.fromOTGlyph(fteFont, font, font.charToGlyph("!")),
    ]
    fteFont.addGlyph(glyph1, glyph2, glyph3, glyph4)
    console.log(font)

    const context = new GlyphContext(
        [glyph1, glyph2, glyph3, glyph4], 1
    )
    const viewport = new Viewport(
        context, [], null
    )
    container.appendChild(viewport.domCanvas)
    viewport.updateViewportSize()

    viewport.setTool(new HandleTool())

    document.querySelector("button[data-tool=handle]").addEventListener(
        "click", () => viewport.setTool(new HandleTool())
    )
    document.querySelector("button[data-tool=pen]").addEventListener(
        "click", () => viewport.setTool(new BezierPenTool())
    )

    window.addEventListener("resize", () => {
        viewport.updateViewportSize()
    })
}