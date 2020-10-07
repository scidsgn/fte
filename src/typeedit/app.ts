import { Font as OTFont } from "opentype.js"
import { BezierPenTool } from "./viewport/tools/bezierPen"
import { HandleTool } from "./viewport/tools/handle"
import { GlyphContext } from "./viewport/context/glyph"
import { updateSubactions } from "./ui/actionbar"
import { setupViewport } from "./ui/viewport"
import { prepareGlyphBar } from "./ui/glyphBar"
import { prepareGlyphList } from "./ui/glyphList"
import { ITool, ToolSubAction } from "./viewport/tools/tool"
import { undo, redo } from "./undo/history"
import { prepareToolbar } from "./ui/toolbar"
import { importFont } from "./io/import"

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
    const font = importFont(otfont)

    const context = new GlyphContext(
        "ABC".split("").map(
            chr => font.glyphs.find(g => g.codePoint === chr.codePointAt(0))
        ), 0
    )

    const viewport = setupViewport(context)
    viewport.setTool(new HandleTool())
    updateSubactions(viewport, [globalSubActions, ...viewport.tool.subactions])
    
    prepareToolbar(
        globalTools,
        globalTools[0],
        (tool: ITool) => {
            viewport.setTool(tool)
            updateSubactions(
                viewport,
                [globalSubActions, ...tool.subactions]
            )
        }
    )

    prepareGlyphList(font)

    prepareGlyphBar(viewport)

    viewport.updateViewportSize()

    window.addEventListener("keyup", (e) => {
        if (document.activeElement !== document.body) return // for now

        let accelString = e.code
        if (e.shiftKey) accelString = "+" + accelString
        if (e.ctrlKey) accelString = "^" + accelString

        for (let action of [
            globalSubActions, ...viewport.tool.subactions
        ].flat()) {
            if (action.accelerator === accelString) {
                action.handler()
                viewport.render()
                return
            }
        }
    })
}