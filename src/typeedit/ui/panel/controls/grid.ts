export default function Grid(
    content: HTMLElement[],
    numColumns = 2
): HTMLDivElement {
    const div = document.createElement("div")
    div.className = "grid"
    div.style.gridTemplateColumns = `repeat(${numColumns}, 1fr)`

    content.forEach(
        i => div.appendChild(i)
    )

    return div
}