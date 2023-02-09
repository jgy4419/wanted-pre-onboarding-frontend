import { useRef } from 'react';
import { createTodo } from './apis/todoPost';
import * as Add from './style/addTodo';

const TodoAdd = () => {
    const content = useRef<HTMLInputElement>(null);
    const createHandler = () => {
        createTodo(content.current!.value);
        content.current!.value = '';
    }
    return (
        <>
            <Add.TodoContain>
                <Add.TodoInner>
                    <Add.TodoInput
                        placeholder='Todo를 입력해주세요!'
                        ref={content} data-testid="modify-input" />
                    <Add.TodoAddButton data-testid="submit-button"
                        onClick={() => { createHandler()}}
                    >추가</Add.TodoAddButton>
                </Add.TodoInner>
            </Add.TodoContain>
        </>
    );
};

export default TodoAdd;