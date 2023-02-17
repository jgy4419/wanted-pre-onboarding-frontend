import api from '../../../utils/apis/useApi';

function createTodos(content: string) {
    const createTodo = api.post(`/todos`, {
        todo: content   
    });
    return createTodo;
}

export { createTodos };