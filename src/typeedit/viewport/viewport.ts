import { throws } from "assert"
import { Point } from "../geometry/point"
import { IContext } from "./context/context"
import { ViewportCoordinates } from "./coordinates"
import { IDrawable, IDrawableHandle } from "./drawable"
import { GridGuide } from "./guides/grid"
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
            e.clientX - box.left, e.clientY - box.top
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

        this.domCanvas.addEventListener("wheel", (e) => {
            if (e.buttons & 4 || e.ctrlKey) { // Middle Button
                const box = this.domCanvas.getBoundingClientRect()
                const pos = this.co.clientToWorld(
                    e.clientX - box.left, e.clientY - box.top
                )

                this.co.scale(
                    1.2 ** Math.sign(-e.deltaY),
                    pos.x, pos.y
                )
                this.render()
            } else {
                if (e.shiftKey && !e.deltaX) {
                    this.co.translate(
                        -e.deltaY, 0
                    )
                } else {
                    this.co.translate(
                        -e.deltaX, -e.deltaY
                    )
                }
                this.render()
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

            if (dist < handle.hitRadius / this.co.scaleFactor)
                return handle
        }

        return null
    }

    selectHandles(
        select: IDrawableHandle[],
        exclusive = true
    ) {
        const handles = [
            ...this.context.handles,
            ...this.tool.handles
        ]

        if (exclusive) {
            for (let handle of handles) {
                handle.selected = false
            }
        }

        for (let handle of select) {
            handle.selected = true
        }
    }

    getSelectedHandles() {
        const handles = [
            ...this.context.handles,
            ...this.tool.handles
        ]

        return handles.filter(h => h.selected)
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
            this.ctx.translate(
                Math.round(clientPos.x) + 0.5,
                Math.round(clientPos.y) + 0.5
            )

            handle.render(this, this.ctx)
        }
    }

    nudgePoint(pos: Point, obj?: any) {
        this.context.grids.forEach(
            g => g.nudge(this, pos, obj)
        )
        this.context.guides.forEach(
            g => g.nudge(this, pos, obj)
        )
        this.tool.guides.forEach(
            g => g.nudge(this, pos, obj)
        )
    }

    disableAllGuides() {
        this.context.guides.forEach(
            g => g.active = false
        )
        this.tool.guides.forEach(
            g => g.active = false
        )
    }

    render() {
        this.ctx.resetTransform()
        this.ctx.clearRect(
            0, 0, this.domCanvas.width, this.domCanvas.height
        )

        this.context.grids.forEach(
            g => g.render(this, this.ctx)
        )

        this.co.transformCanvas(this.ctx)

        this.context.render(this, this.ctx)

        Array(
            ...this.context.guides,
            ...this.tool.guides
        ).forEach(
            guide => {
                if (guide.active || guide instanceof GridGuide) {
                    this.ctx.resetTransform()
                    if (guide.worldRender)
                        this.co.transformCanvas(this.ctx)
                        
                    guide.render(this, this.ctx)
                }
            }
        )

        this.ctx.resetTransform()
        if (this.tool && this.tool.supportsForeignHandles) {
            this.drawHandles(this.context.handles)
            this.drawHandles(this.handles)
        }
        if (this.tool) {
            this.drawHandles(this.tool.handles)
        }

        this.ctx.resetTransform()
        this.co.transformCanvas(this.ctx)
        if (this.tool)
            this.tool.render(this, this.ctx)
    }

    setTool(tool: ITool) {
        this.tool = tool
        this.tool.updateContext(this.context)
        this.disableAllGuides()
        this.render()
    }
}