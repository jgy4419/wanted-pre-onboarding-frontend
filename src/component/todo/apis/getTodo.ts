import api from '../../../utils/apis/useApi';

async function getTodoList() {
    const todoList = api.get(`/todos`);
    return todoList;
}

export { getTodoList };