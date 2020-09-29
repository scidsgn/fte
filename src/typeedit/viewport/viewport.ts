import { throws } from "assert"
import { IContext } from "./context/context"
import { ViewportCoordinates } from "./coordinates"
import { IDrawable, IDrawableHandle } from "./drawable"
import { ITool } from "./tools/tool"

export class Viewport {
    public domCanvas = document.createElement("canvas")
    private ctx = this.domCanvas.getContext("2d")

    public co = new ViewportCoordinates()

    constructor(
        public context: IContext,
        public handles: IDrawableHandle[],
        public tool: ITool
    ) {
        this.setupCanvasEvents()
    }

    dispatchMouseEvent(e: MouseEvent) {
        const box = this.domCanvas.getBoundingClientRect()
        if (!this.tool) return

        this.tool.handleMouseEvent(
            this, e,
            e.clientX - box.left,e.clientY - box.top
        )
        this.render()
    }

    private setupCanvasEvents() {
        this.domCanvas.addEventListener("click", (e) => {
        })

        this.domCanvas.addEventListener("mousedown", (e) => {
            this.dispatchMouseEvent(e)
        })

        this.domCanvas.addEventListener("mouseup", (e) => {
            this.dispatchMouseEvent(e)
        })

        this.domCanvas.addEventListener("mousemove", (e) => {
            if (e.buttons & 4) { // Middle Button
                this.co.translate(e.movementX, e.movementY)
                this.render()
            } else {
                this.dispatchMouseEvent(e)
            }
        })
    }

    nearHandle(
        x: number, y: number,
        type?: string
    ): IDrawableHandle {
        const handles = [
            ...this.context.handles,
            ...this.tool.handles
        ]

        for (let i = handles.length - 1; i >= 0; i--) {
            const handle = handles[i]

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

    selectHandles(
        select: IDrawableHandle[]
    ) {
        const handles = [
            ...this.context.handles,
            ...this.tool.handles
        ]

        for (let handle of handles) {
            handle.selected = false
        }

        for (let handle of select) {
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

    drawHandles(handles: IDrawableHandle[]) {
        for (let handle of handles) {
            const clientPos = this.co.worldToClient(
                handle.position.x, handle.position.y
            )

            this.ctx.resetTransform()
            this.ctx.translate(clientPos.x, clientPos.y)

            handle.render(this, this.ctx)
        }
    }

    render() {
        this.ctx.resetTransform()
        this.ctx.clearRect(
            0, 0, this.domCanvas.width, this.domCanvas.height
        )

        this.co.transformCanvas(this.ctx)

        this.context.render(this, this.ctx)
        // for (let item of this.items) {
        //     item.render(this, this.ctx)
        // }

        if (this.tool && this.tool.supportsForeignHandles) {
            this.drawHandles(this.context.handles)
            this.drawHandles(this.handles)
        }
        if (this.tool)
            this.drawHandles(this.tool.handles)

        this.ctx.resetTransform()
        this.co.transformCanvas(this.ctx)
        if (this.tool)
            this.tool.render(this, this.ctx)
    }

    setTool(tool: ITool) {
        this.tool = tool
        this.tool.updateContext(this.context)
        this.render()
    }
}