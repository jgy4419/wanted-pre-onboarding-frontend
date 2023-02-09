import api from '../../../utils/apis/useApi';

function authPost(email: string, password: string) {
    // const navigate = useNavigate();
    const authPost = api.post(`${process.env.REACT_APP_API_URL}/auth/signup`, {
        email, password
    });

    authPost.then((res) => {
        console.log(res);
        alert('회원가입이 완료되었습니다.');
        window.location.href = "/signin";
        return res;
    }).catch(err => {
        alert('이메일이나 비밀번호가 잘못되었습니다.');
        return err;   
    })
}

function loginAuth(email: string, password: string) {
    const loginAuth = api.post(`${process.env.REACT_APP_API_URL}/auth/signin`, {
        email,
        password
    });
    loginAuth.then((res) => {
        alert('로그인 되었습니다.');
        localStorage.setItem('token', res.data.access_token);
        window.location.href = "/todo";
        return res
    }).catch(err => {
        alert('아이디나 비밀번호가 잘못되었습니다.');
        return err;
    });
}

export { authPost, loginAuth };