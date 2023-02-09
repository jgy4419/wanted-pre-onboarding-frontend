import api from '../../../utils/api/useApi';

function todoDelete(id: number) {
    if (window.confirm('정말로 삭제하시겠습니까?')) {
        api.delete(`${process.env.REACT_APP_API_URL}/todos/${id}`);
        alert('삭제되었습니다.');
    } else {
        alert('삭제되지 않았습니다.');
        return;
    }
}

export { todoDelete };