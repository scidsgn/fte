import { exec, execSync } from "child_process"
import { join } from "path"
import { Font } from "../../font/font"
import { Glyph } from "../../font/glyph"
import { undo } from "../../undo/history"
import { GLYFPoint, NAMEEntries, NumberOrVariation, OTFCCData } from "./types"
import { remote } from "electron"
import { BezierCurve } from "../../geometry/bezier/curve"
import { lerp } from "../../utils/lerp"

let otfccPath: string

export function setOtfccPath(path: string) {
    otfccPath = path
}

const novar = (x: NumberOrVariation) => {
    if (typeof x === "number") return x
    return x[0]
}

function convertOTFCCCoordinates(
    data: OTFCCData, x: number, y: number
): {x: number, y: number} {
    const scaleFactor = 512 / data.OS_2.sCapHeight

    return {
        x: x * scaleFactor,
        y: (data.OS_2.sCapHeight - y) * scaleFactor // easier to work with
    }
}

export async function importFontData_otfcc(filePath: string): Promise<OTFCCData> {
    if (!otfccPath) return

    const stdout = execSync(
        `"${join(otfccPath, "otfccdump")}" "${filePath}"`,
        {
            maxBuffer: 100 * 1024 * 1024
        }
    ).toString("utf-8").trim()
    
    const data = JSON.parse(stdout)

    return data
}