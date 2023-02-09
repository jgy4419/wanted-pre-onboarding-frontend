import api from '../../../utils/apis/useApi';

function createTodo(content: string) {
    const createTodo = api.post(`/todos`, {
        todo: content   
    });
    createTodo.then(res => {
        alert('게시글이 생성되었습니다!');
    }).catch(() => {
        alert('게시글이 생성되지 않았습니다. 로그인 여부를 확인해보세요.');
        window.location.reload();
    });
}

export { createTodo };