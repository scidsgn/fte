import { Font } from "../../font/font";
import { generateCMAP } from "./tables/cmap";
import { OTFCCData } from "./types";

export function createOTFCCData(font: Font): OTFCCData {
    return {
        cmap: generateCMAP(font),
        glyph_order: font.glyphs.map(g => g.name)
    } as OTFCCData // Still work in progress
}