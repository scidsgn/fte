import "./styles/app.scss"

import { Font as OTFont } from "opentype.js"
import { Viewport } from "./viewport/viewport"
import { BezierPenTool } from "./viewport/tools/bezierPen"
import { HandleTool } from "./viewport/tools/handle"
import { Glyph } from "./font/glyph"
import { GlyphContext } from "./viewport/context/glyph"
import { Font } from "./font/font"
import { exportFont } from "./io/export"
import { canRedo, canUndo, redo, undo } from "./undo/history"

const basicCharacterSet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890.,! "

export default (font: OTFont) => {
    const container = document.querySelector("div.viewport")

    const subactionContainer = document.querySelector("div.subactions")

    const fteFont = Font.fromOTFont(font)

    const glyphs = basicCharacterSet.split("").map(
        chr => Glyph.fromOTGlyph(fteFont, font, font.charToGlyph(chr))
    )
    fteFont.addGlyph(...glyphs)
    console.log(font)

    const context = new GlyphContext(
        "Hi there!".split("").map(
            chr => glyphs.find(g => g.codePoint === chr.codePointAt(0))
        ), 5
    )
    const viewport = new Viewport(
        context, [], null
    )
    container.appendChild(viewport.domCanvas)
    viewport.updateViewportSize()

    viewport.setTool(new HandleTool())
    updateSubactions()

    exportFont(fteFont, "build/test/exported.otf")

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

    const g = window as any

    g.undo = () => {
        if (!canUndo()) return false

        undo()
        viewport.render()
        return true
    }
    g.redo = () => {
        if (!canRedo()) return false

        redo()
        viewport.render()
        return true
    }
}