import { Font } from "../../font/font";
import { generateCMAP } from "./tables/cmap";
import { OTFCCData } from "./types";

function createOTFCCData(font: Font): OTFCCData {
    return {
        cmap: generateCMAP(font)
    }
}