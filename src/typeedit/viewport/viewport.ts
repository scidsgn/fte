import { throws } from "assert"
import { Point } from "../geometry/point"
import { IContext } from "./context/context"
import { ViewportCoordinates } from "./coordinates"
import { IDrawableHandle } from "./drawable"
import { CurveGuide } from "./guides/curve"
import { GridGuide } from "./guides/grid"
import { IGuide } from "./guides/guide"
import { HorizontalGuide, VerticalGuide } from "./guides/line"
import { PointGuide } from "./guides/point"
import { ITool } from "./tools/tool"
import { MenuItem, MenuItemConstructorOptions, remote } from "electron"
import { accelStringToElectron } from "../utils/accelerator"
import { currentFont } from "../app"
import { wrappedDist } from "../utils/wrappedDist"

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

        this.domCanvas.addEventListener("contextmenu", () => {
            const menuItems: MenuItemConstructorOptions[] = []
            
            this.tool.subactions.forEach(
                (section, i) => {
                    if (section.collapse) {
                        menuItems.push({
                            type: "submenu",
                            label: section.name,
                            submenu: section.subactions.map(
                                a => {
                                    return {
                                        label: a.name,
                                        click: () => a.handler(),
                                        accelerator: accelStringToElectron(a.accelerator)
                                    }
                                }
                            )
                        })
                    } else {
                        menuItems.push(
                            ...section.subactions.map(
                                a => {
                                    return {
                                        label: a.name,
                                        click: () => a.handler(),
                                        accelerator: accelStringToElectron(a.accelerator)
                                    }
                                }
                            )
                        )
                    }

                    if (i < this.tool.subactions.length - 1) {
                        menuItems.push({
                            type: "separator"
                        })
                    }
                }
            )

            const menu = remote.Menu.buildFromTemplate(menuItems)

            menu.popup()
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

            if (type && handle.type !== type || handle.hidden)
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

    updateViewportSize(autoCenter = true) {
        const parent = this.domCanvas.parentElement
        if (!parent) return

        const rect = parent.getBoundingClientRect()

        if (autoCenter) {
            this.co.translate(
                (rect.width - this.domCanvas.width) / 2,
                (rect.height - this.domCanvas.height) / 2
            )
        }
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

    nudgeToGuides(pos: Point, obj: any, guides: IGuide[], strict = true) {
        const nudgedPoints: Point[] = []
        
        guides.forEach(
            g => {
                const point = g.nudge(this, pos, obj)
                if (point && pos.distance(point) && strict)
                    nudgedPoints.push(point)
                else if (point && !strict)
                    pos.copy(point)
            }
        )

        if (nudgedPoints.length && strict) {
            const distances = nudgedPoints.map(p => p.distance(pos))
            const minDist = Math.min(...distances)
            const minIndex = distances.indexOf(minDist)

            pos.copy(nudgedPoints[minIndex])
        }
    }

    nudgePoint(pos: Point, obj?: any) {
        const guides = [
            ...this.context.guides,
            ...this.tool.guides
        ]

        this.nudgeToGuides(
            pos, obj,
            guides.filter(g => g instanceof CurveGuide)
        )

        if (currentFont.settings.gridEnabled)
            this.nudgeToGuides(pos, obj, this.context.grids)

        this.nudgeToGuides(
            pos, obj,
            guides.filter(
                g => g instanceof HorizontalGuide ||
                     g instanceof VerticalGuide
            ),
            false
        )
        this.nudgeToGuides(
            pos, obj,
            guides.filter(g => g instanceof PointGuide)
        )
    }

    restrictAngles(start: Point, pos: Point, e: MouseEvent) {
        const angles = [
            currentFont.settings.constructionAngle0,
            currentFont.settings.constructionAngle1,
            currentFont.settings.constructionAngle2,
            currentFont.settings.constructionAngle3
        ]
        const r = pos.distance(start)
        const angle = pos.angle(start)

        if (e.shiftKey) {
            let add180 = false
            let nrmAngle = angle * (180 / Math.PI)
            if (nrmAngle < 0) {
                nrmAngle = 180 + nrmAngle
                add180 = true
            }

            const angleDists = angles.map(
                a => wrappedDist(nrmAngle, a, 180)
            )
            const minIndex = angleDists.indexOf(
                Math.min(...angleDists)
            )

            let selectedAngle = angles[minIndex]
            if (
                Math.abs(
                    angle * (180 / Math.PI) - selectedAngle
                ) > 90
            ) {
                selectedAngle += 180
            }
            const finalAngle = selectedAngle * (Math.PI / 180)

            pos.x = start.x + r * Math.cos(finalAngle)
            pos.y = start.y + r * Math.sin(finalAngle)
        }
    }

    disableAllGuides() {
        this.context.grids.forEach(
            g => g.active = false
        )
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

        this.co.transformCanvas(this.ctx)

        this.context.render(this, this.ctx)
        
        this.ctx.resetTransform()
        
        
        if (currentFont.settings.gridEnabled)
            this.context.grids.forEach(
                g => g.render(this, this.ctx)
            )

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