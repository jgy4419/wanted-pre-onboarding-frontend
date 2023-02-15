import api from '../../../utils/apis/useApi';

async function putItem(id: number,content: string, isCompleted: boolean) {
    if (content !== '') {
        await api.put(`/todos/${id}`, {
            todo: content,
            isCompleted
        });
    } else {
        alert('내용이 비어있습니다.');
        return;
    }
}

export { putItem };