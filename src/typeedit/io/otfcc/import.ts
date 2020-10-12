import { exec } from "child_process"
import { join } from "path"
import { Font } from "../../font/font"

let otfccPath: string

export function setOtfccPath(path: string) {
    otfccPath = path
}

function otfccToFont(data: any): Font {
    return new Font({}, {}, [])
}

export function importFont_otfcc(filePath: string) {
    if (!otfccPath) return

    return new Promise(
        (resolve, reject) => {
            exec(
                `"${join(otfccPath, "otfccdump")}" "${filePath}"`,
                {
                    maxBuffer: 40 * 1024 * 1024 // output JSON usually exceeds 1 MB
                },
                (err, stdout, stdin) => {
                    const data = JSON.parse(stdout)
                    const font = otfccToFont(data)

                    console.log(data)
                    console.log(font)
                }
            )
        }
    )
}