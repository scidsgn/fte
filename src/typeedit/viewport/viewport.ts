import { ViewportCoordinates } from "./coordinates"
import { IDrawable, IDrawableHandle } from "./drawable"
import { ITool } from "./tools/tool"

export class Viewport {
    public domCanvas = document.createElement("canvas")
    private ctx = this.domCanvas.getContext("2d")

    public co = new ViewportCoordinates()

    constructor(
        public items: IDrawable[],
        public handles: IDrawableHandle[],
        public tool: ITool
    ) {
        this.setupCanvasEvents()
    }

    private setupCanvasEvents() {
        this.domCanvas.addEventListener("click", (e) => {
        })

        this.domCanvas.addEventListener("mousedown", (e) => {
            this.tool.handleMouseEvent(this, e)
            this.render()
        })

        this.domCanvas.addEventListener("mouseup", (e) => {
            this.tool.handleMouseEvent(this, e)
            this.render()
        })

        this.domCanvas.addEventListener("mousemove", (e) => {
            if (e.buttons & 4) { // Middle Button
                this.co.translate(e.movementX, e.movementY)
                this.render()
            } else {
                this.tool.handleMouseEvent(this, e)
                this.render()
            }
        })
    }

    nearHandle(
        x: number, y: number,
        type?: string
    ): IDrawableHandle {
        for (let handle of this.handles) {
            if (type && handle.type !== type)
                continue

            const dist = Math.hypot(
                handle.position.x - x,
                handle.position.y - y
            )

            if (dist < handle.hitRadius)
                return handle
        }

        return null
    }

    selectHandles(handles: IDrawableHandle[]) {
        for (let handle of this.handles) {
            handle.selected = false
        }

        for (let handle of handles) {
            handle.selected = true
        }
    }

    purgeHandles() {
        this.handles = []
    }

    updateViewportSize() {
        const parent = this.domCanvas.parentElement
        if (!parent) return

        const rect = parent.getBoundingClientRect()

        this.domCanvas.width = rect.width
        this.domCanvas.height = rect.height

        this.render()
    }

    render() {
        this.ctx.resetTransform()
        this.ctx.clearRect(
            0, 0, this.domCanvas.width, this.domCanvas.height
        )

        this.co.transformCanvas(this.ctx)

        for (let item of this.items) {
            item.render(this, this.ctx)
        }

        for (let handle of this.handles) {
            const clientPos = this.co.worldToClient(
                handle.position.x, handle.position.y
            )

            this.ctx.resetTransform()
            this.ctx.translate(clientPos.x, clientPos.y)

            handle.render(this, this.ctx)
        }

        this.ctx.resetTransform()
        this.co.transformCanvas(this.ctx)
        this.tool.render(this, this.ctx)
    }
}