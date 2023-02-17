import { useState, useEffect } from 'react';
import { createTodos } from '../apis/todoPost';
import { getTodoList } from '../apis/getTodo';
import { todoDelete } from '../apis/deleteTodo';
import { putItem } from '../apis/todoPut';
import { TodoType } from '../types/type';

export function useTodo() {
    const [todos, setTodos] = useState<TodoType[]>([]);
    
    const createTodo = (content: string) => {
        const createTodoAPI = createTodos(content);
        createTodoAPI.then(res => {
            const newTodo = res.data;
            alert('투두가 생성되었습니다!');
            setTodos([...todos, newTodo]);
            return res.data;        
        }).catch(() => {
            alert('게시글이 생성되지 않았습니다. 로그인 여부를 확인해보세요.');
            window.location.reload();
        });
    }

    const deleteTodo = async (id: number) => {
        await todoDelete(id);
        todoList();
    }

    const editTodo = async (id: number, current: string, state: boolean) => {
        await putItem(id, current, state);
        todoList();
    }

    const todoList = async () => {
        try {
            const res = await getTodoList();
            if (res !== undefined) setTodos(res.data);
        } catch (error){
            console.error(error);
        }
    }

    useEffect(() => {
        todoList();    
    }, []);

    return {
        createTodo,
        deleteTodo,
        editTodo,
        todos, setTodos
    }
}