import { TodoType, createTodo, deleteTodo, editTodo } from "./type";

export interface ITodoItemAddProps {
    setReloadCount: React.Dispatch<React.SetStateAction<number>>
}

export interface ITodoAdd {
    createTodo: createTodo
}

export interface ITodoItemProps {
    item: TodoType,
    editTodo: editTodo,
    deleteTodo: deleteTodo
}

export interface ITodoEditProps {
    item: TodoType,
    editState: boolean,
    editTodo: editTodo,
    setEditState: React.Dispatch<React.SetStateAction<boolean>>
}

export interface IUseTodo {
    todos: TodoType[],
    setTodos: React.Dispatch<React.SetStateAction<TodoType[]>>,
    editTodo: editTodo,
    createTodo: createTodo,
    deleteTodo: deleteTodo,
}