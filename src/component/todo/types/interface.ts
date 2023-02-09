import { TodoType } from "./type";

export interface ITodoMovement {
    todos: TodoType[],
    todoLength: number
}

export interface ITodoItemProps {
    item: TodoType,
}

export interface ITodoEditProps {
    editState: boolean,
    setEditState: React.Dispatch<React.SetStateAction<boolean>>
}