export default function TextInput(
    get: () => string,
    set: (v: string) => void,
    update?: (
        callback: (v: string) => void
    ) => void
): HTMLInputElement {
    const input = document.createElement("input")
    input.type = "text"

    input.value = get()
    input.addEventListener("input", () => {
        set(input.value)
    })

    if (update) {
        update((v: string) => {
            input.value = v
        })
    }

    return input
}