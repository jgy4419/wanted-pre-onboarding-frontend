import { useRef, useState } from 'react';
import { authPost } from './api/useAuthPost';
import * as JoinStyle from './style/join';
import { authCheck } from '../auth/hooks/useAuthCheck';

const Join = () => {
    const [authState, setAuthState] = useState(false);
    const email = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);
    const passwordConfirmedRef = useRef<HTMLInputElement>(null);

    const check = () => {
        let authCheckRes = authCheck({
            email: email.current!.value,
            password: passwordRef.current!.value,
            passwordConfirmed: passwordConfirmedRef.current!.value
        });
        setAuthState(authCheckRes);
        return authCheckRes;
    }
    function joinHandler() {
        if (!check()) {
            alert('이메일이나 비밀번호가 잘못되었습니다.');
            return;
        }
        authPost(email.current!.value, passwordRef.current!.value);
    }

    return (
        <JoinStyle.JoinContain>
            <JoinStyle.JoinInner>
            <JoinStyle.Text>회원가입</JoinStyle.Text>
            <JoinStyle.InputContain>
                    <JoinStyle.AuthInput type="email"
                        data-testid="email-input"
                        ref={email} placeholder="이메일을 입력해주세요." />
                    <JoinStyle.AuthInput type="password"
                        data-testid="password-input"
                        ref={passwordRef} placeholder='비밀번호는 최소 8자 이상 입력해주세요.' />
                    <JoinStyle.AuthInput type="password"
                        data-testid="password-input"
                        ref={passwordConfirmedRef} placeholder='다시 한 번 입력해주세요.' />
                <JoinStyle.BtnContain>
                    <JoinStyle.AuthButton onClick={ () => {check() && alert('유효성 검사가 완료되었습니다.') }}>유효성 검사</JoinStyle.AuthButton>
                        <JoinStyle.JoinButton
                            data-testid="signup-button"
                            style={
                                authState ? { cursor: "pointer" } :
                                    {
                                        cursor: "not-allowed",
                                        backgroundColor: 'lightGrey'
                                    }
                            }
                            onClick={() => { joinHandler() }} disabled={authState ? false : true}>
                            회원가입
                        </JoinStyle.JoinButton>
                </JoinStyle.BtnContain>
            </JoinStyle.InputContain>
            </JoinStyle.JoinInner>
        </JoinStyle.JoinContain>
    );
};

export default Join;