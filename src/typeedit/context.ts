import { Viewport } from "./viewport/viewport"

export interface IContext {
    createViewport: () => Viewport
}