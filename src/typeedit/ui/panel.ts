import { currentFont } from "../app"
import { Font } from "../font/font"
import { FontSettings } from "../settings/settings"

let preparedFontSettings = false

export function prepareTabbedPanel() {
    document.querySelectorAll("aside nav button").forEach(
        button => {
            const tabId = button.getAttribute("data-tab")

            button.addEventListener("click", () => {
                const currentButton = document.querySelector("aside nav button.active")
                const currentPanel = document.querySelector("aside div.panelContents.active")

                if (currentButton && currentPanel) {
                    currentButton.classList.remove("active")
                    currentPanel.classList.remove("active")
                }

                document.querySelector(
                    `aside div.panelContents[data-tab=${tabId}]`
                ).classList.add("active")
                button.classList.add("active")
            })
        }
    )
}

export function prepareFontSettings() {    
    document.querySelectorAll(
        "input[data-font-setting]"
    ).forEach(
        (input: HTMLInputElement) => {
            const key: keyof FontSettings = input.getAttribute(
                "data-font-setting"
            ) as (keyof FontSettings)
            if (!(key in currentFont.settings)) return

            if (input.type === "checkbox")
                input.checked = !!currentFont.settings[key]
            else
                input.value = currentFont.settings[key].toString()

            if (!preparedFontSettings) {
                input.addEventListener("input", () => {
                    if (typeof currentFont.settings[key] === "number")
                        (currentFont.settings[key] as any) = +input.value
                    else if (typeof currentFont.settings[key] === "string")
                        (currentFont.settings[key] as any) = input.value
                    else if (typeof currentFont.settings[key] === "boolean")
                        (currentFont.settings[key] as any) = input.checked
                })
            }
        }
    )
    
    preparedFontSettings = true
}

export function addFontSettingsEvents() {
    currentFont.on("settingChanged", (key: keyof FontSettings) => {
        const input = document.querySelector(
            `input[data-font-setting=${key}]`
        ) as HTMLInputElement
        if (!input) return

        if (input.type === "checkbox")
            input.checked = !!currentFont.settings[key]
        else
            input.value = currentFont.settings[key].toString()
    })
}