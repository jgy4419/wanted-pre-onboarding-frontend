import { useRef } from 'react';
import { putItem } from './apis/todoPut';
import { ITodoEditProps, ITodoItemProps } from './types/interface';
import * as Edit from './style/todoItem';

const TodoEdit = ({ item, editState, setEditState }: ITodoItemProps & ITodoEditProps) => {
    const content = useRef<HTMLInputElement>(null);
    const todoHandler = () => {
        putItem(item.id, content.current!.value, true);
        setEditState(false);
    }
    return (
        <>
            {
                editState &&
                <Edit.TodoList key={item?.id} className="todo_list">
                <Edit.TodoEditInput data-testid="modify-input"
                    placeholder={item.todo}
                    ref={content} />
                <Edit.TodoSubmitButton data-testid="submit- button"
                    onClick={() => { todoHandler() }}
                >제출</Edit.TodoSubmitButton>
                <Edit.TodoDeleteButton data-testid="cancel-button"
                    onClick={() => {
                        setEditState(false);
                    }}
                >취소</Edit.TodoDeleteButton>
            </Edit.TodoList>
            }
                
        </>
    );
};

export default TodoEdit;