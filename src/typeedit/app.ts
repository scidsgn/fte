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
import { ITool } from "./viewport/tools/tool"

export default (font: OTFont) => {
    const container = document.querySelector("div.viewport")

    const subactionContainer = document.querySelector("div.subactions")

    const fteFont = Font.fromOTFont(font)

    const [
        glyph1, glyph2, glyph3, glyph4, glyph5
    ] = [
        Glyph.fromOTGlyph(fteFont, font, font.charToGlyph("t")),
        Glyph.fromOTGlyph(fteFont, font, font.charToGlyph("h")),
        Glyph.fromOTGlyph(fteFont, font, font.charToGlyph("i")),
        Glyph.fromOTGlyph(fteFont, font, font.charToGlyph("C")),
        Glyph.fromOTGlyph(fteFont, font, font.charToGlyph("c")),
    ]
    fteFont.addGlyph(glyph1, glyph2, glyph3, glyph4, glyph5)
    console.log(font)

    const context = new GlyphContext(
        [glyph1, glyph2, glyph3, glyph4, glyph5], 2
    )
    const viewport = new Viewport(
        context, [], null
    )
    container.appendChild(viewport.domCanvas)
    viewport.updateViewportSize()

    viewport.setTool(new HandleTool())
    updateSubactions()

    function updateSubactions() {
        //subactionContainer
        subactionContainer.innerHTML = ""

        viewport.tool.subactions.forEach(
            subact => {
                const button = document.createElement("button")
                button.addEventListener("click", () => {
                    subact.handler()
                    viewport.render()
                })

                button.innerHTML = `
                    <img src="res/icons/${subact.icon}.svg">
                `

                subactionContainer.appendChild(button)
            }
        )
    }

    document.querySelector("button[data-tool=handle]").addEventListener(
        "click", () => {
            viewport.setTool(new HandleTool())
            updateSubactions()
        }
    )
    document.querySelector("button[data-tool=pen]").addEventListener(
        "click", () => {
            viewport.setTool(new BezierPenTool())
            updateSubactions()
        }
    )

    window.addEventListener("resize", () => {
        viewport.updateViewportSize()
    })
}