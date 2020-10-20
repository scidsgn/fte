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
        "input[data-font-setting], button[data-font-setting]"
    ).forEach(
        (input: HTMLInputElement | HTMLButtonElement) => {
            const key: keyof FontSettings = input.getAttribute(
                "data-font-setting"
            ) as (keyof FontSettings)
            if (!(key in currentFont.settings)) return

            if (input instanceof HTMLInputElement) {
                if (input.type === "checkbox")
                    input.checked = !!currentFont.settings[key]
                else
                    input.value = currentFont.settings[key].toString()
            } else if (input instanceof HTMLButtonElement) {
                input.classList.toggle("active", !!currentFont.settings[key])
            }

            if (
                !preparedFontSettings &&
                input instanceof HTMLInputElement
            ) {
                input.addEventListener("input", () => {
                    if (typeof currentFont.settings[key] === "number")
                        (currentFont.settings[key] as any) = +input.value
                    else if (typeof currentFont.settings[key] === "string")
                        (currentFont.settings[key] as any) = input.value
                    else if (typeof currentFont.settings[key] === "boolean")
                        (currentFont.settings[key] as any) = input.checked
                })
            } else if (
                !preparedFontSettings &&
                input instanceof HTMLButtonElement
            ) {
                input.addEventListener("click", () => {
                    (currentFont.settings[key] as any) = !input.classList.contains("active")
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
        const button = document.querySelector(
            `button[data-font-setting=${key}]`
        ) as HTMLInputElement

        if (input) {
            if (input.type === "checkbox")
                input.checked = !!currentFont.settings[key]
            else
                input.value = currentFont.settings[key].toString()
        } else if (button) {
            button.classList.toggle("active", !!currentFont.settings[key])
        }
    })
}