import axios from 'axios';

const api = axios.create({
    // 배포 시 env 파일 잘 적용 안되는 것 같아서 일단 빼서 쓰기.
    baseURL: 'https://pre-onboarding-selection-task.shop',
    headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`,
        'Content-Type': 'application/json'
    }
});

api.interceptors.request.use(config => {
    const token = localStorage.getItem('token');
    if(!token) return config;

    config.headers = {
        'Content-type': 'application/json',
        'Authorization': `Bearer ${token}`,
    };
    return config;
});

export default api;