export default function ButtonGroup(
    buttons: HTMLButtonElement[]
): HTMLDivElement {
    const div = document.createElement("div")
    div.className = "buttonGroup"

    buttons.forEach(
        b => div.appendChild(b)
    )

    return div
}