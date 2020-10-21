export default function Row(
    content: HTMLElement[]
): HTMLDivElement {
    const div = document.createElement("div")
    div.className = "row"

    content.forEach(
        i => div.appendChild(i)
    )

    return div
}