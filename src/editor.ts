import "./typeedit/styles/app.scss"
import "./typeedit/styles/app/main.scss"
import "./typeedit/styles/app/editor.scss"

import "./typeedit/styles/welcome.scss"

import app, { currentFont } from "./typeedit/app"
import paper from "paper"
import { remote } from "electron"
import { basename } from "path"
import { importFont } from "./typeedit/io/opentype.js/import"
import { Font } from "./typeedit/font/font"
import { exportFont } from "./typeedit/io/opentype.js/export"

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
                importFont(file).then(font => {
                    const welcome = document.querySelector("article.welcome") as HTMLDivElement
                    welcome.style.display = "none"
                    
                    app(font)
                })
            }
        )

        document.querySelector("div.recentFiles").appendChild(btn)
    }
)

document.querySelectorAll("button.newFont").forEach(
    btn => btn.addEventListener(
        "click", () => {
            const welcome = document.querySelector("article.welcome") as HTMLDivElement
            welcome.style.display = "none"

            app(Font.createBlank())
        }
    )
)

document.querySelectorAll("button.openFont").forEach(
    btn => btn.addEventListener(
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

                importFont(result.filePaths[0]).then(
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
)

document.querySelectorAll("button.saveFont").forEach(
    btn => btn.addEventListener(
        "click", () => {
            remote.dialog.showSaveDialog(
                remote.getCurrentWindow(),
                {
                    filters: [
                        {
                            name: "Fonts",
                            extensions: ["otf", "ttf"]
                        }
                    ],
                    defaultPath: currentFont.info.fontFamily +
                                 "-" + currentFont.info.fontSubfamily +
                                 ".otf"
                }
            ).then(result => {
                if (result.canceled) return

                exportFont(currentFont, result.filePath)
            })
        }
    )
)

// load("test/Inter-Regular.otf").then(
//     (font) => {
//         app(font)
//     }
// )