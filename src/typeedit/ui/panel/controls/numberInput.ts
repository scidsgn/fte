export default function NumberInput(
    get: () => number,
    set: (v: number) => void,
    update?: (
        callback: (v: number) => void
    ) => void,
    min = 0, max = 0, step = 0.01
): HTMLInputElement {
    const input = document.createElement("input")
    input.type = "number"

    input.min = min.toString()
    input.max = max.toString()
    input.step = step.toString()

    input.value = get().toString()
    input.addEventListener("input", () => {
        set(+input.value)
    })

    if (update) {
        update((v: number) => {
            input.value = v.toString()
        })
    }

    return input
}