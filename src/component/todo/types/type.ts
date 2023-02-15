export type TodoType = {
    id: number,
    isCompleted: boolean,
    todo: string,
    userId: number
}

export type createTodo = (content: string) => void;
export type editTodo = (id: number, current: string, state: boolean) => void
export type deleteTodo = (id: number) => unknown;

export type EditState = 'none' | 'edit';