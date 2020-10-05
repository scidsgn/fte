import { IUndoableAction } from "./actions/action"


export class UndoContext {
    public actions: IUndoableAction[] = []

    public name: string = "Unknown"

    addAction(...actions: IUndoableAction[]) {
        this.actions.push(...actions)
    }

    undo() {
        for (let i = this.actions.length - 1; i >= 0; i--) {
            this.actions[i].undo()
        }
    }

    redo() {
        for (let i = 0; i < this.actions.length; i++) {
            this.actions[i].redo()
        }
    }

    finalize(name?: string) {
        this.actions.forEach(a => a.finalize())
        if (name) this.name = name
    }
}