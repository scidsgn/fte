export default function TextInput(
    get: () => string,
    set: (v: string) => void,
    update?: (
        callback: (v: string) => void
    ) => void,
    charLimit?: number
): HTMLInputElement {
    const input = document.createElement("input")
    input.type = "text"

    if (charLimit) input.max = charLimit.toString()

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