import "./typeedit/styles/app.scss"
import "./typeedit/styles/app/main.scss"
import "./typeedit/styles/app/panel.scss"
import "./typeedit/styles/app/editor.scss"
import "./typeedit/styles/app/controls.scss"

import "./typeedit/styles/welcome.scss"

import app, { currentFont } from "./typeedit/app"
import paper, { tool } from "paper"
import { remote } from "electron"
import { basename, extname } from "path"
import { importFont_opentype } from "./typeedit/io/opentype.js/import"
import { Font } from "./typeedit/font/font"
import { exportFont_opentype } from "./typeedit/io/opentype.js/export"
import { existsSync, readFileSync, writeFileSync } from "fs"
import { setOtfccPath } from "./typeedit/io/otfcc/import"
import { createFontPreview } from "./typeedit/utils/preview"
import { FTEX1 } from "./typeedit/io/ftex/ftex"
import { SmartBuffer } from "smart-buffer"
import { openFont, saveFont } from "./typeedit/io/io"
import { prepareFontSettings, prepareTabbedPanel } from "./typeedit/ui/panel"
import { setIdleTimeout } from "./typeedit/utils/idle"

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
        if (!file || !file.filePath) return
        
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
                const font = openFont(file.filePath)
                
                const welcome = document.querySelector("article.welcome") as HTMLDivElement
                welcome.style.display = "none"
                    
                app(font)

                const index = recentFiles.findIndex(
                    p => p.filePath === file.filePath
                )
                if (index >= 0) {
                    const item = recentFiles[index]
                    recentFiles.splice(index, 1)
                    recentFiles.unshift(item)

                    localStorage.setItem(
                        "recentFiles",
                        JSON.stringify(
                            recentFiles.slice(0, 8)
                        )
                    )
                }
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
                            name: "Supported fonts",
                            extensions: [
                                "ftex", "otf", "ttf"
                            ]
                        },
                        {
                            name: "FTEX project file",
                            extensions: ["ftex"]
                        },
                        {
                            name: "OpenType fonts",
                            extensions: ["otf"]
                        },
                        {
                            name: "TrueType fonts",
                            extensions: ["ttf"]
                        }
                    ],
                    properties: ["openFile"]
                }
            ).then(result => {
                if (
                    result.canceled ||
                    result.filePaths.length !== 1
                ) return

                try {
                    const font = openFont(result.filePaths[0])

                    const welcome = document.querySelector("article.welcome") as HTMLDivElement
                    welcome.style.display = "none"

                    app(font)

                    const index = recentFiles.findIndex(
                        p => p.filePath === result.filePaths[0]
                    )
                    if (index >= 0) recentFiles.splice(index, 1)

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
                } catch(e) {
                    // Well, error!
                    console.error(e)
                    alert("Couldn't load the font file.")
                }
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
                            name: "FTEX project file",
                            extensions: ["ftex"]
                        },
                        {
                            name: "OpenType fonts",
                            extensions: ["otf"]
                        },
                        {
                            name: "TrueType fonts",
                            extensions: ["ttf"]
                        }
                    ],
                    defaultPath: currentFont.info.fontFamily +
                                 "-" + currentFont.info.fontSubfamily
                }
            ).then(result => {
                if (result.canceled) return

                saveFont(currentFont, result.filePath)
            })
        }
    )
)

document.body.addEventListener("keydown", (e) => {
    if (e.code === "KeyZ" && e.ctrlKey) {
        e.preventDefault()
    }
})

document.addEventListener("drop", (e) => {
    e.preventDefault()
    e.stopPropagation()

    if (!e.dataTransfer.files.length) return

    try {
        const path = e.dataTransfer.files.item(0).path
        const font = openFont(path)
        if (!font) return
        
        const welcome = document.querySelector("article.welcome") as HTMLDivElement
        welcome.style.display = "none"

        app(font)

        const index = recentFiles.findIndex(
            p => p.filePath === path
        )
        if (index >= 0) recentFiles.splice(index, 1)

        recentFiles.unshift(
            {
                filePath: path,
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
    } catch (e) {
        // Well, error!
        console.error(e)
        alert("Couldn't load the font file.")
    }
})

document.addEventListener("dragover", (e) => { 
    e.preventDefault()
    e.stopPropagation()
}); 

prepareTabbedPanel()

// load("test/Inter-Regular.otf").then(
//     (font) => {
//         app(font)
//     }
// )

setIdleTimeout(
    (e: MouseEvent) => {
        let element = e.target as HTMLElement
        while (
            element &&
            !(element instanceof HTMLButtonElement)
        ) {
            element = element.parentElement
        }

        if (!element) return

        const title = element.getAttribute("data-title")
        if (!title) return

        const tooltip: HTMLDivElement = document.querySelector(
            "div.tooltip"
        )

        tooltip.style.display = "block"

        tooltip.style.left = `${e.clientX + 16}px`
        tooltip.style.top = `${e.clientY + 16}px`
        tooltip.textContent = title
    }, () => {
        const tooltip: HTMLDivElement = document.querySelector(
            "div.tooltip"
        )
        tooltip.style.display = "none"
    }, 250
)