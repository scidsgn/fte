import { accelStringToUserFriendly } from "../utils/accelerator";
import { ToolSubAction } from "../viewport/tools/tool";
import { Viewport } from "../viewport/viewport";

const subactionContainer = document.querySelector("div.subactions")

export function updateSubactions(viewport: Viewport, subactionGroups: ToolSubAction[][]) {
    subactionContainer.innerHTML = ""

    for (const group of subactionGroups) {
        
        const subactionGroup = document.createElement("div")

        for (const subaction of group) {
            const button = document.createElement("button")

            button.addEventListener("fteTooltip", () => {
                const name = (typeof subaction.name === "string") ?
                             subaction.name : subaction.name()
                
                button.setAttribute(
                    "data-title", `${name}${
                        subaction.accelerator ? ` (${
                            accelStringToUserFriendly(subaction.accelerator)
                        })` : ""
                    }`
                )
            })

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