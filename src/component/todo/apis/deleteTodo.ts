import api from '../../../utils/apis/useApi';

async function todoDelete(id: number) {
    if (window.confirm('정말로 삭제하시겠습니까?')) {
        await api.delete(`/todos/${id}`).then(res => {
            alert('삭제되었습니다.');
            return;
        });
    } else {
        alert('삭제되지 않았습니다.');
        return;
    }
}

export { todoDelete };