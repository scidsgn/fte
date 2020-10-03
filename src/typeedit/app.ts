import "./styles/app.scss"

import { Font as OTFont } from "opentype.js"
import { BezierPenTool } from "./viewport/tools/bezierPen"
import { HandleTool } from "./viewport/tools/handle"
import { Glyph } from "./font/glyph"
import { GlyphContext } from "./viewport/context/glyph"
import { Font } from "./font/font"
import { updateSubactions } from "./ui/actionbar"
import { setupViewport } from "./ui/viewport"
import { prepareGlyphBar } from "./ui/glyphBar"
import { prepareGlyphList } from "./ui/glyphList"
import { ITool, ToolSubAction } from "./viewport/tools/tool"
import { undo, redo, canUndo, canRedo } from "./undo/history"
import { prepareToolbar } from "./ui/toolbar"

const basicCharacterSet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890.,!? "

const globalSubActions: ToolSubAction[] = [
    {
        name: "Undo",
        icon: "undo",
        accelerator: "^KeyZ",
        handler: () => {
            undo()
        }
    },
    {
        name: "Redo",
        icon: "redo",
        accelerator: "^+KeyZ",
        handler: () => {
            redo()
        }
    },
]

const globalTools = [
    new HandleTool(),
    new BezierPenTool()
]

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
    updateSubactions(viewport, [globalSubActions, viewport.tool.subactions])
    
    prepareToolbar(
        globalTools,
        globalTools[0],
        (tool: ITool) => {
            viewport.setTool(tool)
            updateSubactions(
                viewport,
                [globalSubActions, tool.subactions]
            )
        }
    )

    prepareGlyphList(font)

    prepareGlyphBar(viewport)

    viewport.updateViewportSize()

    // exportFont(font, "build/test/exported.otf")

    window.addEventListener("keyup", (e) => {
        if (document.activeElement !== document.body) return // for now

        let accelString = e.code
        if (e.shiftKey) accelString = "+" + accelString
        if (e.ctrlKey) accelString = "^" + accelString

        for (let action of [
            globalSubActions, viewport.tool.subactions
        ].flat()) {
            if (action.accelerator === accelString) {
                action.handler()
                viewport.render()
                return
            }
        }
    })
}