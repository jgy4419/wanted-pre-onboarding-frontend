import { ITodoItemProps } from './types/interface';
import { putItem } from './apis/todoPut';
import { todoDelete } from './apis/deleteTodo';
import TodoEdit from './TodoEdit';
import * as Item from './style/todoItem';
import { useState } from 'react';


const TodoItem = ({ item }: ITodoItemProps) => {
    const [editState, setEditState] = useState<boolean>(false);
    return (
        <>
            {  
                !editState &&
                 <Item.TodoList key={item?.id} >
                        <Item.TodoContain>
                            <Item.TodoCheckBox
                                checked={ item.isCompleted}
                                onClick={() => putItem(item.id, item.todo, !item.isCompleted)}
                            />
                            <Item.TodoContent>{item?.todo}</Item.TodoContent>
                            <Item.TodoEdit>
                                <Item.TodoEditButton
                                    data-testid="modify-button"
                                    onClick={() => { setEditState(true) }}
                                >수정</Item.TodoEditButton>
                                <Item.TodoDeleteButton
                                    onClick={() => todoDelete(item.id)}
                                    data-testid="delete-button"
                                >삭제</Item.TodoDeleteButton>
                            </Item.TodoEdit>
                        </Item.TodoContain>
                    </Item.TodoList>
            }
            
            <TodoEdit item={ item }  editState={editState} setEditState={ setEditState}/>
        </>
    );
};

export default TodoItem;