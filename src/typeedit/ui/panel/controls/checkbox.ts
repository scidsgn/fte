export default function Checkbox(
    get: () => boolean,
    toggle: () => void,
    update?: (
        callback: (v: boolean) => void
    ) => void
): HTMLInputElement {
    const checkbox = document.createElement("input")
    checkbox.type = "checkbox"

    checkbox.checked = get()
    checkbox.addEventListener("click", () => {
        toggle()
    })

    if (update) {
        update((v: boolean) => {
            checkbox.checked = v
        })
    }

    return checkbox
}