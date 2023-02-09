import { useRef, KeyboardEvent } from 'react';
import { loginAuth } from './apis/useAuthPost';
// import { api } from './api/useAuthPost';
import * as LoginStyle from './style/login';

const Login = () => {
    const email = useRef<HTMLInputElement>(null);
    const password = useRef<HTMLInputElement>(null);
    // const loginAuth = useLoginAuth();
    
    const loginState = (enter: KeyboardEvent): void => {
        if (enter.key === 'Enter') {
            // loginAuth.mutate({ email: email.current!.value, password: password.current!.value })
            loginAuth(email.current!.value, password.current!.value);
        }
    }
    return (
        <LoginStyle.LoginContain>
            <LoginStyle.LoginInner>
                <LoginStyle.Text>로그인</LoginStyle.Text>
                <LoginStyle.InputContain>
                    <LoginStyle.AuthInput ref={email} type="email" placeholder="id"
                        onKeyDown={(keyBoard) => { loginState(keyBoard) }}
                    />
                    <LoginStyle.AuthInput ref={password} type="password" placeholder='pw'
                        onKeyDown={(keyBoard) => { loginState(keyBoard) }}
                    />
                    <LoginStyle.LoginBtn onClick={() => { loginAuth(email.current!.value, password.current!.value) } }>로그인</LoginStyle.LoginBtn>
                </LoginStyle.InputContain>
            </LoginStyle.LoginInner>
        </LoginStyle.LoginContain>
    );
};

export default Login;