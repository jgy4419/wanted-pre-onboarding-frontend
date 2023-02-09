import TodoBlur from './TodoBlur';
import useTokenCheck from '../../utils/hooks/useTokenCheck';
import TodoList from './TodoList';

const TodoMain = () => {
    const { tokenState } = useTokenCheck();
    return (
        tokenState === true
            ? <TodoList/>
            : < TodoBlur />
    );
};

export default TodoMain;