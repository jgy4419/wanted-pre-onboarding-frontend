export type TodoType = {
    id: number,
    isCompleted: boolean,
    todo: string,
    userId: number
}

export type EditState = 'none' | 'edit';