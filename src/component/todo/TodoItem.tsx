import { ITodoItemProps } from './types/interface';
import { putItem } from './apis/todoPut';
import { todoDelete } from './apis/deleteTodo';
import TodoEdit from './TodoEdit';
import * as Item from './style/todoItem';
import { useState } from 'react';


const TodoItem = ({ item, setReloadCount }: ITodoItemProps) => {
    const [editState, setEditState] = useState<boolean>(false);

    const deleteHandler = (id: number) => {
        setReloadCount(prev => prev - 1);
        todoDelete(id)
    }

    const checkBoxHandler = (id: number, todo: string, isCompleted: boolean) => {
        putItem(id, todo, isCompleted)
        setReloadCount((prev) => prev + 1);
    }

    const editProps = {
        item,
        setEditState,
        editState,
        setReloadCount
    }
    return (
        <>
            {  
                !editState &&
                 <Item.TodoList key={item?.id} >
                        <Item.TodoContain>
                            <Item.TodoCheckBox
                                checked={ item.isCompleted}
                                onClick={() => checkBoxHandler(item.id, item.todo, !item.isCompleted)}
                            />
                            <Item.TodoContent>{item?.todo}</Item.TodoContent>
                            <Item.TodoEdit>
                                <Item.TodoEditButton
                                    data-testid="modify-button"
                                    onClick={() => { setEditState(true) }}
                                >수정</Item.TodoEditButton>
                                <Item.TodoDeleteButton
                                    onClick={() => deleteHandler(item.id)}
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