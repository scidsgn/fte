import "./typeedit/styles/app.scss"
import "./typeedit/styles/app/main.scss"
import "./typeedit/styles/app/panel.scss"
import "./typeedit/styles/app/editor.scss"

import "./typeedit/styles/welcome.scss"

import app, { currentFont } from "./typeedit/app"
import paper from "paper"
import { remote } from "electron"
import { basename } from "path"
import { importFont_opentype } from "./typeedit/io/opentype.js/import"
import { Font } from "./typeedit/font/font"
import { exportFont_opentype } from "./typeedit/io/opentype.js/export"
import { existsSync } from "fs"
import { setOtfccPath } from "./typeedit/io/otfcc/import"
import { createFontPreview } from "./typeedit/utils/preview"

console.log(remote)

const scope = new paper.PaperScope()
scope.install(window)
scope.setup(new paper.Size(1000, 1000))

type RecentFile = {
    filePath: string
    fontName: string
    thumbnail: string
}

const recentFiles: RecentFile[] = JSON.parse(
    localStorage.getItem("recentFiles")
) ?? []

if (existsSync("./otfcc_test")) {
    // There are otfcc binaries
    // NOTE: still testing this part, so they aren't included in the repo
    setOtfccPath("./otfcc_test")
}

recentFiles.forEach(
    file => {
        const btn = document.createElement("button")
        btn.classList.add("recent")

        const fontPreview = document.createElement("img")
        fontPreview.classList.add("preview")
        fontPreview.src = file.thumbnail
        btn.appendChild(fontPreview)

        const fontNameLabel = document.createElement("label")
        fontNameLabel.classList.add("name")
        fontNameLabel.textContent = file.fontName
        btn.appendChild(fontNameLabel)

        const filePathLabel = document.createElement("label")
        filePathLabel.classList.add("path")
        filePathLabel.textContent = basename(file.filePath)
        btn.appendChild(filePathLabel)

        btn.addEventListener(
            "click", () => {
                importFont_opentype(file.filePath).then(font => {
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

                importFont_opentype(result.filePaths[0]).then(
                    font => {
                        const welcome = document.querySelector("article.welcome") as HTMLDivElement
                        welcome.style.display = "none"

                        app(font)

                        recentFiles.unshift(
                            {
                                filePath: result.filePaths[0],
                                fontName: font.info.fontFamily + " " +
                                          font.info.fontSubfamily,
                                thumbnail: createFontPreview(font)
                            }
                        )
                        localStorage.setItem(
                            "recentFiles",
                            JSON.stringify(
                                recentFiles.slice(0, 8)
                            )
                        )
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

                exportFont_opentype(currentFont, result.filePath)
            })
        }
    )
)

document.body.addEventListener("keydown", (e) => {
    if (e.code === "KeyZ" && e.ctrlKey) {
        e.preventDefault()
    }
})

// load("test/Inter-Regular.otf").then(
//     (font) => {
//         app(font)
//     }
// )