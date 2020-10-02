import { GlyphContext } from "../viewport/context/glyph"
import { Viewport } from "../viewport/viewport"

const glyphBar = document.querySelector("input.viewportText") as HTMLInputElement

export function appendCharacter(chr: string) {
    glyphBar.value += chr
    glyphBar.dispatchEvent(new InputEvent("input"))
}

export function prepareGlyphBar(viewport: Viewport) {
    glyphBar.addEventListener("input", () => {
        if (!(viewport.context instanceof GlyphContext)) return

        const text = glyphBar.value
        if (!text.length) return

        const glyphs = viewport.context.glyph.font.glyphs

        const textGlyphs = text.split("").map(
            chr => glyphs.find(g => g.codePoint === chr.codePointAt(0))
        ).filter(g => g)

        viewport.context.setGlyphs(textGlyphs)
        viewport.tool.updateContext(viewport.context)
        viewport.render()
    })

    document.querySelector("button.prevGlyph").addEventListener(
        "click", () => {
            if (!(viewport.context instanceof GlyphContext)) return

            viewport.context.setGlyphs(
                null, viewport.context.currentIndex === 0 ?
                      viewport.context.glyphs.length - 1 :
                      viewport.context.currentIndex - 1
            )
            viewport.tool.updateContext(viewport.context)
            viewport.render()
        }
    )
    document.querySelector("button.nextGlyph").addEventListener(
        "click", () => {
        if (!(viewport.context instanceof GlyphContext)) return

            viewport.context.setGlyphs(
                null, viewport.context.currentIndex === viewport.context.glyphs.length - 1 ?
                      0 :
                      viewport.context.currentIndex + 1
            )
            viewport.tool.updateContext(viewport.context)
            viewport.render()
        }
    )
}

export function getGlyphBarValue() {

}