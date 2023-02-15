import { ITodoItemProps } from './types/interface';
import TodoEdit from './TodoEdit';
import * as Item from './style/todoItem';
import { useState } from 'react';


const TodoItem = ({ item, editTodo, deleteTodo }: ITodoItemProps) => {
    const [editState, setEditState] = useState<boolean>(false);

    const editProps = {
        item,
        editTodo,
        setEditState,
        editState
    }
    return (
        <>
            {  
                !editState &&
                 <Item.TodoList key={item?.id} >
                        <Item.TodoContain>
                            <Item.TodoCheckBox
                                checked={ item.isCompleted}
                                onClick={() => editTodo(item.id, item.todo, !item.isCompleted)}
                            />
                            <Item.TodoContent>{item?.todo}</Item.TodoContent>
                            <Item.TodoEdit>
                                <Item.TodoEditButton
                                    data-testid="modify-button"
                                    onClick={() => { setEditState(true) }}
                                >수정</Item.TodoEditButton>
                                <Item.TodoDeleteButton
                                    onClick={() => deleteTodo(item.id)}
                                    data-testid="delete-button"
                                >삭제</Item.TodoDeleteButton>
                            </Item.TodoEdit>
                        </Item.TodoContain>
                    </Item.TodoList>
            }
            
            <TodoEdit {...editProps} />
        </>
    );
};

export default TodoItem;