import { Font } from "../../font/font";
import { generateCMAP } from "./tables/cmap";
import { OTFCCData } from "./types";

export function createOTFCCData(font: Font): OTFCCData {
    return {
        cmap: generateCMAP(font)
    } as OTFCCData // Still work in progress
}