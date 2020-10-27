import { remote } from "electron"

export default function SliderInput(
    get: () => number,
    set: (v: number) => void,
    update?: (
        callback: (v: number) => void
    ) => void,
    min = 0, max = 0, step = 0.01,
    presets?: {
        name: string,
        value: number
    }[]
): HTMLInputElement {
    const input = document.createElement("input")
    input.type = "range"

    input.min = min.toString()
    input.max = max.toString()
    input.step = step.toString()

    input.value = get().toString()
    input.addEventListener("input", () => {
        set(+input.value)
    })

    const openMenu = () => {
        if (!presets || !presets.length) return

        remote.Menu.buildFromTemplate(
            presets.map(
                preset => {
                    return {
                        label: preset.name,
                        click: () => set(preset.value)
                    }
                }
            )
        ).popup()
    }

    input.addEventListener(
        "contextmenu", () => openMenu()
    )

    if (update) {
        update((v: number) => {
            input.value = v.toString()
        })
    }

    return input
}