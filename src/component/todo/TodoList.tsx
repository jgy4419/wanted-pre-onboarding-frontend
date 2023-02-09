import { useGetTodos } from './hooks/useTodoMovement';
import * as List from './style/todoList';
import { ITodoMovement } from './types/interface';
import { TodoType } from './types/type';
import TodoItem from './TodoItem';
import TodoAdd from './TodoAdd';
// import { createContext } from 'react';

const TodoList = () => {
    const { todos, todoLength }: ITodoMovement = useGetTodos();
    
    return (
        <>
            <List.TodoListContain>
                <List.TodoListInner>
                    <TodoAdd/>
                    <List.TodoLists>
                        {
                            todoLength !== 0 ? todos.map((item: TodoType, index) => {
                                return (
                                    <>
                                        <TodoItem key={index} item={item} />
                                    </>
                                )
                            })
                                : <List.NotTodo>투두가 없습니다..</List.NotTodo>
                        }
                    </List.TodoLists>
                </List.TodoListInner>
            </List.TodoListContain>
        </>
    );
};

export default TodoList;