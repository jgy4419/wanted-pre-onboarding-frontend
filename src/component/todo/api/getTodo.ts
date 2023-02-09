import api from '../../../utils/api/useApi';

async function getTodoList() {
    const todoList = api.get(`${process.env.REACT_APP_API_URL}/todos`);
    return todoList;
}

export { getTodoList };