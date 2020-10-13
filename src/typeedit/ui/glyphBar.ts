import { Glyph } from "../font/glyph"
import { GlyphContext } from "../viewport/context/glyph"
import { Viewport } from "../viewport/viewport"

const glyphBar = document.querySelector("div.glyphBar") as HTMLDivElement

export function getGlyphBarGlyphs(allGlyphs: Glyph[]) {
    const glyphs: Glyph[] = []

    glyphBar.childNodes.forEach(
        node => {
            if (node instanceof Text) {
                glyphs.push(
                    ...node.textContent.split("").map(
                        chr => allGlyphs.find(
                            g => g.codePoint === chr.codePointAt(0)
                        )
                    )
                )
            } else if (node instanceof HTMLDivElement) {
                glyphs.push(
                    allGlyphs.find(g => g.name === node.textContent)
                )
            }
        }
    )

    return glyphs
}

export function appendCharacter(glyph: Glyph) {
    if (glyph.codePoint >= 32) {
        glyphBar.append(
            String.fromCharCode(glyph.codePoint)
        )
    } else {
        const nonTextGlyph = document.createElement("div")
        nonTextGlyph.className = "ntglyph"
        nonTextGlyph.contentEditable = "false"

        nonTextGlyph.innerHTML = `<span>${glyph.name}</span>`

        glyphBar.appendChild(nonTextGlyph)
    }
    glyphBar.dispatchEvent(new InputEvent("input"))
}

export function prepareGlyphBar(viewport: Viewport) {
    glyphBar.addEventListener("keydown", (e) => {
        if (e.code === "KeyZ" && e.ctrlKey) {
            e.preventDefault()
        }
    })

    glyphBar.addEventListener("input", () => {
        if (!(viewport.context instanceof GlyphContext)) return

        const glyphs = getGlyphBarGlyphs(
            viewport.context.glyph.font.glyphs
        )
        if (!glyphs.length) return

        viewport.context.setGlyphs(glyphs)
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
