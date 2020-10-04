import { load } from "opentype.js"
import app from "./typeedit/app"
import paper from "paper"

const scope = new paper.PaperScope()
scope.install(window)
scope.setup(new paper.Size(1000, 1000))

load("test/Inter-Regular.otf").then(
    (font) => {
        app(font)
    }
)