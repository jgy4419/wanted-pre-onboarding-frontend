import api from '../../../utils/apis/useApi';

function getTodoList() {
    const todoList = api.get(`/todos`);
    return todoList;
}

export { getTodoList };