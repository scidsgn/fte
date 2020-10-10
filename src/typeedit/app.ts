import { BezierPenTool } from "./viewport/tools/bezierPen"
import { HandleTool } from "./viewport/tools/handle"
import { GlyphContext } from "./viewport/context/glyph"
import { updateSubactions } from "./ui/actionbar"
import { setupViewport } from "./ui/viewport"
import { prepareGlyphBar } from "./ui/glyphBar"
import { prepareGlyphList } from "./ui/glyphList"
import { ITool, ToolSubAction } from "./viewport/tools/tool"
import { undo, redo } from "./undo/history"
import { prepareToolbar, setActiveTool } from "./ui/toolbar"
import { Font } from "./font/font"
import { RectangleTool } from "./viewport/tools/rectangle"
import { EllipseTool } from "./viewport/tools/ellipse"

export let currentFont: Font = null

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
    new BezierPenTool(),
    new RectangleTool(),
    new EllipseTool()
]

let currentKeybCallback: (e: KeyboardEvent) => void = null

export default (font: Font) => {
    currentFont = font

    document.title = `${font.info.fontFamily} - FTE`
    prepareGlyphList(font)

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

    prepareGlyphBar(viewport)

    viewport.updateViewportSize()

    if (currentKeybCallback)
        window.removeEventListener("keyup", currentKeybCallback)

    currentKeybCallback = (e: KeyboardEvent) => {
        if (document.activeElement !== document.body) return // for now

        let accelString = e.code
        if (e.shiftKey) accelString = "+" + accelString
        if (e.ctrlKey) accelString = "^" + accelString

        for (let action of [
            globalTools,
            globalSubActions, ...viewport.tool.subactions
        ].flat()) {
            if (action.accelerator === accelString) {
                if ("handler" in action) {
                    action.handler()
                    viewport.render()
                    if (viewport.context instanceof GlyphContext)
                        viewport.context.glyph.emit("modified")
                } else {
                    viewport.setTool(action)
                    updateSubactions(
                        viewport,
                        [globalSubActions, ...action.subactions]
                    )
                    setActiveTool(globalTools.indexOf(action))
                }
                return
            }
        }
    }
    window.addEventListener("keyup", currentKeybCallback)
}