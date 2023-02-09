import { useLayoutEffect, useState } from 'react';
import { getTodoList } from '../apis/getTodo';

export function useGetTodos() {
    const [todos, setTodos] = useState([]);
    const todoLength = todos.length;
    // promise {fullfill?? 뭐시기 해결방법}
    const fetchTodoList = async () => {
        try {
            const res = await getTodoList();
            if(res !== undefined) setTodos(res.data);
        } catch (error){
            console.error(error);
        }
    }
    useLayoutEffect(() => {
        (async () => await fetchTodoList())();
    }, [todos]);
    return {todos, todoLength}
}