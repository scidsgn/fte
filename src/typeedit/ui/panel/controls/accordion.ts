export default function Accordion(
    name: string,
    headerItems: HTMLElement[],
    content: HTMLElement[]
): HTMLDivElement {
    const div = document.createElement("div")
    div.className = "accordion"

    const header = document.createElement("header")
    header.textContent = name
    headerItems.forEach(
        i => header.appendChild(i)
    )
    div.appendChild(header)

    const contentDiv = document.createElement("div")
    contentDiv.className = "content"
    content.forEach(
        i => contentDiv.appendChild(i)
    )
    div.appendChild(contentDiv)

    return div
}