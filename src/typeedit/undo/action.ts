import { stat } from "fs"

export interface IUndoableAction {
    undo: () => void
    redo: () => void
    finalize: () => void
}

type VCAObjectState = {
    [key: string]: any
}
export class ValueChangeAction implements IUndoableAction {
    private beforeState: VCAObjectState = {}
    private afterState: VCAObjectState = {}

    constructor(
        private target: any,
        private keys: string[]
    ) {
        this.captureState(this.beforeState)
    }

    private captureState(stateTarget: VCAObjectState) {
        this.keys.forEach(
            key => stateTarget[key] = this.target[key]
        )
    }

    undo() {
        Object.assign(this.target, this.beforeState)
    }

    redo() {
        Object.assign(this.target, this.afterState)
    }

    finalize() {
        this.captureState(this.afterState)
    }
}

export class UndoContext {
    private actions: IUndoableAction[] = []

    public name: string = "Unknown"

    addAction(...actions: IUndoableAction[]) {
        this.actions.push(...actions)
    }

    undo() {
        this.actions.forEach(a => a.undo())
    }

    redo() {
        this.actions.forEach(a => a.redo())
    }

    finalize(name?: string) {
        this.actions.forEach(a => a.finalize())
        if (name) this.name = name
    }
}