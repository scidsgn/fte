import "./typeedit/styles/app.scss"
import "./typeedit/styles/app/main.scss"
import "./typeedit/styles/app/editor.scss"

import "./typeedit/styles/welcome.scss"

import { load } from "opentype.js"
import app from "./typeedit/app"
import paper from "paper"
import { remote } from "electron"
import { basename } from "path"

console.log(remote)

const scope = new paper.PaperScope()
scope.install(window)
scope.setup(new paper.Size(1000, 1000))

const recentFiles: string[] = JSON.parse(
    localStorage.getItem("recentFiles")
) ?? []

recentFiles.forEach(
    file => {
        const btn = document.createElement("button")

        btn.textContent = basename(file)
        btn.addEventListener(
            "click", () => {
                load(file).then(f => {
                    const welcome = document.querySelector("article.welcome") as HTMLDivElement
                    welcome.style.display = "none"
                    
                    app(f)
                })
            }
        )

        document.querySelector("div.recentFiles").appendChild(btn)
    }
)

document.querySelector("button.openDT").addEventListener(
    "click", () => remote.getCurrentWebContents().openDevTools()
)

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

                    recentFiles.unshift(result.filePaths[0])
                    localStorage.setItem("recentFiles", JSON.stringify(recentFiles))
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