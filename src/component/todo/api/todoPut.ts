import api from '../../../utils/api/useApi';

function putItem(id: number,content: string, isCompleted: boolean) {
    if (content !== '') {
        const putTodoItem = api.put(`${process.env.REACT_APP_API_URL}/todos/${id}`, {
            todo: content, 
            isCompleted
        });
        putTodoItem.then(() => {
            // alert('변경되었습니다.');
            console.log('g');
        })
    } else {
        alert('내용이 비어있습니다.');
        return;
    }
}

export { putItem };