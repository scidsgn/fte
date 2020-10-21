export default function Label(
    text: string
): HTMLLabelElement {
    const label = document.createElement("label")

    label.textContent = text
    
    return label
}