import { ITool } from "../viewport/tools/tool"

export function prepareToolbar(
    tools: ITool[],
    defaultTool: ITool,
    callback: (t: ITool) => void
) {
    const toolbar = document.querySelector("div.tools")

    tools.forEach(
        tool => {
            const button = document.createElement("button")

            button.title = tool.name
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