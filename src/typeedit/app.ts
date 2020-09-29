import "./styles/app.scss"

import { Font } from "opentype.js"
import { Viewport } from "./viewport/viewport"
import { BezierPenTool } from "./viewport/tools/bezierPen"
import { BezierContext } from "./viewport/context/bezier"
import { HandleTool } from "./viewport/tools/handle"
import { generateCurvesFromOTGlyph } from "./geometry/bezier/curve"

export default (font: Font) => {
    const container = document.querySelector("div.viewport")

    const beziers = generateCurvesFromOTGlyph(
        font, font.charToGlyph("S")
    )

    console.log(beziers)

    const context = new BezierContext(beziers)
    const viewport = new Viewport(
        context, [], null
    )
    container.appendChild(viewport.domCanvas)
    viewport.updateViewportSize()

    viewport.setTool(new BezierPenTool())

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