import { useRef } from 'react';
import { putItem } from './apis/todoPut';
import { ITodoEditProps, ITodoItemProps } from './types/interface';
import * as Edit from './style/todoItem';

const TodoEdit = ({ item, editState, setEditState, setReloadCount }: ITodoItemProps & ITodoEditProps) => {
    const content = useRef<HTMLInputElement>(null);
    const editHandler = () => {
        putItem(item.id, content.current!.value, true);
        setEditState(false)
        setReloadCount((prev) => prev + 1);
    }
    return (
        <>
            {
                editState && 
                <Edit.TodoList key={item?.id} className="todo_list">
                <Edit.TodoEditInput data-testid="modify-input"
                    placeholder={item.todo}
                    ref={content} />
                <Edit.TodoSubmitButton data-testid="submit-button"
                    onClick={() => { editHandler() }}
                >제출</Edit.TodoSubmitButton>
                <Edit.TodoDeleteButton data-testid="cancel-button"
                    onClick={() => {
                    }}
                >취소</Edit.TodoDeleteButton>
            </Edit.TodoList>
            }
                
        </>
    );
};

export default TodoEdit;