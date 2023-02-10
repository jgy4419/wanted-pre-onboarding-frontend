import { useGetTodos } from './hooks/useTodoMovement';
import * as List from './style/todoList';
import { ITodoMovement } from './types/interface';
import { TodoType } from './types/type';
import TodoItem from './TodoItem';
import TodoAdd from './TodoAdd';

const TodoList = () => {
    const { todos, todoLength, setReloadCount }: ITodoMovement = useGetTodos();

    return (
        <>
            <List.TodoListContain>
                <List.TodoListInner>
                    <TodoAdd setReloadCount={ setReloadCount } />
                    <List.TodoLists>
                        {
                            todoLength !== 0 ? todos.map((item: TodoType, index) => {
                                return (
                                    <TodoItem key={index} setReloadCount={setReloadCount} item={item} />
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