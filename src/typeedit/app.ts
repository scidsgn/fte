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
import { updateSubactions } from "./ui/toolbar"
import { setupViewport } from "./ui/viewport"
import { prepareGlyphBar } from "./ui/glyphBar"
import { prepareGlyphList } from "./ui/glyphList"

const basicCharacterSet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890.,!? "

export default (otfont: OTFont) => {
    const font = Font.fromOTFont(otfont)

    const glyphs: Glyph[] = []
    for (let i = 0; i < otfont.glyphs.length; i++) {
        glyphs.push(
            Glyph.fromOTGlyph(
                font, otfont,
                otfont.glyphs.get(i)
            )
        )
    }
    font.addGlyph(...glyphs)

    const context = new GlyphContext(
        "ABC".split("").map(
            chr => glyphs.find(g => g.codePoint === chr.codePointAt(0))
        ), 0
    )
    const viewport = setupViewport(context)
    viewport.setTool(new HandleTool())
    updateSubactions(viewport, [viewport.tool.subactions])
    
    prepareGlyphList(font)

    prepareGlyphBar(viewport)

    // exportFont(font, "build/test/exported.otf")

    document.querySelector("button[data-tool=handle]").addEventListener(
        "click", () => {
            viewport.setTool(new HandleTool())
            updateSubactions(viewport, [viewport.tool.subactions])
        }
    )
    document.querySelector("button[data-tool=pen]").addEventListener(
        "click", () => {
            viewport.setTool(new BezierPenTool())
            updateSubactions(viewport, [viewport.tool.subactions])
        }
    )
}