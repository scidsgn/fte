import { BezierPenTool } from "./viewport/tools/bezierPen"
import { HandleTool } from "./viewport/tools/handle"
import { GlyphContext } from "./viewport/context/glyph"
import { updateSubactions } from "./ui/actionbar"
import { setupViewport } from "./ui/viewport"
import { prepareGlyphBar } from "./ui/glyphBar"
import { prepareGlyphList } from "./ui/glyphList"
import { ITool, ToolSubAction } from "./viewport/tools/tool"
import { undo, redo, getUndoActionName, getRedoActionName } from "./undo/history"
import { prepareToolbar, setActiveTool } from "./ui/toolbar"
import { Font } from "./font/font"
import { RectangleTool } from "./viewport/tools/rectangle"
import { EllipseTool } from "./viewport/tools/ellipse"
import { addFontSettingsEvents, prepareFontSettings } from "./ui/panel"
import { prepareSnappingPanel } from "./ui/panel/snapping"
import { prepareFontInfoPanel } from "./ui/panel/fontInfo"

export let currentFont: Font = null

const globalSubActions: ToolSubAction[] = [
    {
        name: () => {
            const undoName = getUndoActionName()

            return undoName ? `Undo ${undoName}` : "Undo"
        },
        icon: "undo",
        accelerator: "^KeyZ",
        handler: () => {
            undo()
        }
    },
    {
        name: () => {
            const redoName = getRedoActionName()

            return redoName ? `Redo ${redoName}` : "Redo"
        },
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

    prepareFontSettings()
    addFontSettingsEvents()
    
    prepareFontInfoPanel(font)
    prepareSnappingPanel(font)

    const context = new GlyphContext(
        "ABC".split("").map(
            chr => font.glyphs.find(g => g.codePoint === chr.codePointAt(0))
        ), 0
    )

    const viewport = setupViewport(context)
    viewport.setTool(new HandleTool())
    updateSubactions(viewport, [
        globalSubActions,
        ...viewport.tool.subactions.filter(g => !g.hiddenInActionBar).map(s => s.subactions)
    ])
    
    prepareToolbar(
        globalTools,
        globalTools[0],
        (tool: ITool) => {
            viewport.setTool(tool)
            updateSubactions(
                viewport,
                [
                    globalSubActions,
                    ...tool.subactions.filter(g => !g.hiddenInActionBar).map(s => s.subactions)
                ]
            )
        }
    )

    prepareGlyphBar(viewport)

    viewport.updateViewportSize(false)
    viewport.co.translate(
        (viewport.domCanvas.baseWidth - context.glyph.metrics.rightBearing) / 2,
        (viewport.domCanvas.baseHeight - 512) / 2
    )
    viewport.render()

    font.on("settingChanged", () => viewport.render())

    if (currentKeybCallback)
        window.removeEventListener("keyup", currentKeybCallback)

    currentKeybCallback = (e: KeyboardEvent) => {
        if (document.activeElement !== document.body) return // for now

        let accelString = e.code
        if (e.shiftKey) accelString = "+" + accelString
        if (e.ctrlKey) accelString = "^" + accelString

        for (let action of [
            globalTools,
            globalSubActions,...viewport.tool.subactions.map(s => s.subactions)
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
                        [
                            globalSubActions,
                            ...viewport.tool.subactions.filter(g => !g.hiddenInActionBar).map(s => s.subactions)
                        ]
                    )
                    setActiveTool(globalTools.indexOf(action))
                }
                e.preventDefault()
                return false
            }
        }
    }
    window.addEventListener("keyup", currentKeybCallback)
}