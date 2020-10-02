import { IContext } from "../viewport/context/context"
import { Viewport } from "../viewport/viewport"

export function setupViewport(context: IContext) {
    const container = document.querySelector("div.viewport")

    const viewport = new Viewport(
        context, [], null
    )
    
    container.appendChild(viewport.domCanvas)
    viewport.updateViewportSize()
    
    window.addEventListener("resize", () => {
        viewport.updateViewportSize()
    })

    return viewport
}