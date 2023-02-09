import api from '../../../utils/apis/useApi';

function putItem(id: number,content: string, isCompleted: boolean) {
    if (content !== '') {
        api.put(`${process.env.REACT_APP_API_URL}/todos/${id}`, {
            todo: content,
            isCompleted
        });
    } else {
        alert('내용이 비어있습니다.');
        return;
    }
}

export { putItem };