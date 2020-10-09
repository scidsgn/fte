import { accelStringToUserFriendly } from "../utils/accelerator"
import { ITool } from "../viewport/tools/tool"

export function setActiveTool(
    index: number
) {
    const toolbar = document.querySelector("div.tools")
    toolbar.querySelector("button.active").classList.remove("active")

    toolbar.children[index].classList.add("active")
}

export function prepareToolbar(
    tools: ITool[],
    defaultTool: ITool,
    callback: (t: ITool) => void
) {
    const toolbar = document.querySelector("div.tools")
    toolbar.innerHTML = ""

    tools.forEach(
        tool => {
            const button = document.createElement("button")

            button.title = `${tool.name} (${
                accelStringToUserFriendly(tool.accelerator)
            })`
            button.innerHTML = `
                <img src="res/icons/${tool.icon}.svg">
            `

            if (tool === defaultTool)
                button.classList.add("active")

            button.addEventListener("click", () => {
                toolbar.querySelector("button.active").classList.remove(
                    "active"
                )

                callback(tool)
                button.classList.add("active")
            })

            toolbar.appendChild(button)
        }
    )
}