import { IUndoableAction } from "./action"

export class ArrayAddAction<T> implements IUndoableAction {
    constructor(
        private target: T[],
        private object: T,
        private index: number
    ) {}

    undo() {
        this.target.splice(this.index, 1)
    }

    redo() {
        this.target.splice(this.index, 0, this.object)
    }

    finalize() {}
}

export class ArrayRemoveAction<T> implements IUndoableAction {
    constructor(
        private target: T[],
        private object: T,
        private index: number
    ) {}

    undo() {
        this.target.splice(this.index, 0, this.object)
    }

    redo() {
        this.target.splice(this.index, 1)
    }

    finalize() {}
}