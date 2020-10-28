import { remote } from "electron"
import { on } from "process"

type AugmentedHTMLCanvasElement = HTMLCanvasElement & {
    baseWidth: number,
    baseHeight: number
}

export let displayScalingFactor = 1
updateScalingFactor()

remote.screen.on(
    "display-metrics-changed", () => {
        updateScalingFactor()
    }
)

function updateScalingFactor() {
    const display = remote.screen.getPrimaryDisplay()
    displayScalingFactor = display.scaleFactor
}

export function createCanvas(
    onResize?: (canvas: AugmentedHTMLCanvasElement) => void
): AugmentedHTMLCanvasElement {
    const canvas = document.createElement("canvas") as AugmentedHTMLCanvasElement

    canvas.baseWidth = 0
    canvas.baseHeight = 0

    remote.screen.on(
        "display-metrics-changed", () => {
            if (!canvas.parentElement) return
            resizeCanvas(
                canvas, canvas.baseWidth, canvas.baseHeight
            )
            if (onResize) onResize(canvas)
        }
    )

    return canvas
}

export function resizeCanvas(
    canvas: AugmentedHTMLCanvasElement,
    w: number, h: number
) {
    canvas.baseWidth = w
    canvas.baseHeight = h

    canvas.width = w * displayScalingFactor
    canvas.height = h * displayScalingFactor

    canvas.style.transform = `scale(${1 / displayScalingFactor}, ${1 / displayScalingFactor})`

}

export function fixMouseEvent(e: MouseEvent) {
    const rect = (
        e.target as HTMLElement
    ).getBoundingClientRect()
    return Object.assign({
        clientX: (e.clientX - rect.x) * displayScalingFactor + rect.x,
        clientY: (e.clientY - rect.y) * displayScalingFactor + rect.y
    }, e)
}

export function resetTransform(ctx: CanvasRenderingContext2D) {
    const canvas = ctx.canvas
    ctx.resetTransform()
    ctx.scale(displayScalingFactor, displayScalingFactor)
}