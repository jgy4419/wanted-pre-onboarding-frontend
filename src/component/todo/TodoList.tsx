import { useTodo } from './hooks/useTodoMovement';
import * as List from './style/todoList';
import TodoItem from './TodoItem';
import TodoAdd from './TodoAdd';
import { IUseTodo } from './types/interface';
import { TodoType } from './types/type';

const TodoList = () => {
    const { todos, editTodo, createTodo, deleteTodo }: IUseTodo = useTodo();

    const todoItemProps = {
        editTodo,
        deleteTodo
    }
    return (
        <>
            <List.TodoListContain>
                <List.TodoListInner>
                    <TodoAdd createTodo={ createTodo } />
                    <List.TodoLists>
                        {
                            todos.length !== 0 ? todos!.map((item: TodoType, index) => {
                                return (
                                    <TodoItem key={index} {...todoItemProps} item={item} />
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