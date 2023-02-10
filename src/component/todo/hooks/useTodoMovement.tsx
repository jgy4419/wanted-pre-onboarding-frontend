import { useLayoutEffect, useState } from 'react';
import { getTodoList } from '../apis/getTodo';

export function useGetTodos() {
    const [todos, setTodos] = useState([]);
    let [reloadCount, setReloadCount] = useState(todos.length);
    const [editReloadState, setEditReloadState] = useState<boolean>(false);
    const todoLength = todos.length;
    
    const fetchTodoList = async () => {
        try {
            const res = await getTodoList();
            if (res !== undefined) setTodos(res.data);
            setReloadCount(res.data.length);
        } catch (error){
            console.error(error);
        }
    }
    useLayoutEffect(() => {
        fetchTodoList();
    }, [reloadCount]);
    return {todos, todoLength, reloadCount, setReloadCount, editReloadState, setEditReloadState}
}