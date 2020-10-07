import "./typeedit/styles/app.scss"
import "./typeedit/styles/app/main.scss"
import "./typeedit/styles/app/editor.scss"

import "./typeedit/styles/welcome.scss"

import { load } from "opentype.js"
import app from "./typeedit/app"
import paper from "paper"
import { remote } from "electron"

console.log(remote)

const scope = new paper.PaperScope()
scope.install(window)
scope.setup(new paper.Size(1000, 1000))

document.querySelector("button.openFile").addEventListener(
    "click", () => {
        remote.dialog.showOpenDialog(
            remote.getCurrentWindow(),
            {
                filters: [
                    {
                        name: "Fonts",
                        extensions: ["otf", "ttf"]
                    }
                ],
                properties: ["openFile"]
            }
        ).then(result => {
            if (
                result.canceled ||
                result.filePaths.length !== 1
            ) return

            load(result.filePaths[0]).then(
                font => {
                    const welcome = document.querySelector("article.welcome") as HTMLDivElement
                    welcome.style.display = "none"

                    app(font)
                }
            )
        })
    }
)

// load("test/Inter-Regular.otf").then(
//     (font) => {
//         app(font)
//     }
// )