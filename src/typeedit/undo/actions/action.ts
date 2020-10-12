import { EventEmitter } from "events"
import { stat } from "fs"

export interface IUndoableAction {
    undo: () => void
    redo: () => void
    finalize: () => void
    valid: boolean
}