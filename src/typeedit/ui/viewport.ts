import { IContext } from "../viewport/context/context"
import { Viewport } from "../viewport/viewport"

export function setupViewport(context: IContext) {
    const container = document.querySelector("div.viewport")
    
    const prevViewport = container.querySelector("canvas")
    if (prevViewport) {
        container.removeChild(prevViewport)
    }

    const viewport = new Viewport(
        context, [], null
    )
    
    container.appendChild(viewport.domCanvas)
    
    window.addEventListener("resize", () => {
        viewport.updateViewportSize()
    })

    return viewport
}