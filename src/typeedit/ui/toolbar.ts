import { ToolSubAction } from "../viewport/tools/tool";
import { Viewport } from "../viewport/viewport";

const subactionContainer = document.querySelector("div.subactions")

export function updateSubactions(viewport: Viewport, subactionGroups: ToolSubAction[][]) {
    subactionContainer.innerHTML = ""

    for (const group of subactionGroups) {
        const subactionGroup = document.createElement("div")

        for (const subaction of group) {
            const button = document.createElement("button")
            button.addEventListener("click", () => {
                subaction.handler()
                viewport.render()
            })

            button.innerHTML = `
                <img src="res/icons/${subaction.icon}.svg">
            `

            subactionGroup.appendChild(button)
        }

        subactionContainer.appendChild(subactionGroup)
    }
}