import { TodoType } from "./type";

export interface ITodoMovement {
    todos?: TodoType[],
    todoLength?: number
    reloadCount: number
    setReloadCount: React.Dispatch<React.SetStateAction<number>>
    setEditReloadState: React.Dispatch<React.SetStateAction<boolean>>
}

export interface ITodoItemAddProps {
    setReloadCount: React.Dispatch<React.SetStateAction<number>>
}

export interface ITodoItemProps {
    item: TodoType,
    setReloadCount: React.Dispatch<React.SetStateAction<number>>
}

export interface ITodoEditProps {
    item: TodoType,
    editState: boolean,
    setEditState: React.Dispatch<React.SetStateAction<boolean>>
}