import "./styles/app.scss"

import { Font } from "opentype.js"
import { Viewport } from "./viewport/viewport"
import { Polygon } from "./geometry/polygon"
import { Point } from "./geometry/point"
import { BasicPointHandle } from "./viewport/handles/basicpoint"
import { HandleTool } from "./viewport/tools/handle"
import { BezierCurve } from "./geometry/bezier/curve"
import { BezierPoint } from "./geometry/bezier/point"
import { Path } from "./geometry/path"
import { BezierBasePointHandle } from "./viewport/handles/bezierBasePoint"
import { BezierControlPointHandle } from "./viewport/handles/bezierControlPoint"
import { IDrawableHandle } from "./viewport/drawable"
import { BezierPenTool } from "./viewport/tools/bezierPen"

export default (font: Font) => {
    const container = document.querySelector("main")

    const viewport = new Viewport(
        [], [],
        new BezierPenTool()
    )
    container.appendChild(viewport.domCanvas)
    viewport.updateViewportSize()

    window.addEventListener("resize", () => {
        viewport.updateViewportSize()
    })
}