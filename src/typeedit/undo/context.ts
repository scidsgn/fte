import { IUndoableAction } from "./actions/action"


export class UndoContext {
    public actions: IUndoableAction[] = []

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