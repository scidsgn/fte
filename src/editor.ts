import { load } from "opentype.js"
import app from "./typeedit/app"

load("test/Inter-Regular.otf").then(
    (font) => {
        app(font)
    }
)