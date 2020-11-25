import { Font } from "../../../font/font";
import { CMAPTable } from "../types";

export function generateCMAP(font: Font): CMAPTable {
    const cmap: CMAPTable = {}

    font.glyphs.forEach(
        glyph => {
            if (glyph.codePoint)
                cmap[glyph.codePoint] = glyph.name
        }
    )

    return cmap
}