import { readFileSync, writeFileSync } from "fs";
import { extname } from "path";
import { SmartBuffer } from "smart-buffer";
import { Font } from "../font/font";
import { FTEX1 } from "./ftex/ftex";
import { exportFont_opentype } from "./opentype.js/export";
import { importFont_opentype } from "./opentype.js/import";
import { importFontData_otfcc } from "./otfcc/import";

export function openFont(filePath: string): Font {
    const ext = extname(filePath.toLowerCase())

    if (ext === ".ftex") {
        // FTE Font
        const ftex = new FTEX1()
        ftex.decode(
            SmartBuffer.fromBuffer(readFileSync(filePath))
        )

        return ftex.getFont()
    } else {
        // Opentype.js, take over

        console.log(importFontData_otfcc(filePath)) // I NEED TO SEE!

        return importFont_opentype(filePath)
    }
}

export function saveFont(font: Font, filePath: string) {
    const ext = extname(filePath.toLowerCase())

    if (ext === ".ftex") {
        // FTE Font
        const ftex = FTEX1.fromFont(font)
        const buf = ftex.encode().toBuffer()

        writeFileSync(filePath, buf)
    } else if (ext === ".ttf" || ext === ".otf") {
        // Opentype.js
        exportFont_opentype(font, filePath)
    }
}