import styled from 'styled-components';
import { inputBasicStyle } from '../../../styles/styledComponents/overlapStyle';


export const LoginContain = styled.div`
    position: relative;
    width: 100vw;
    height: 90vh;
`

export const LoginInner = styled.div`
    position: absolute;
    left: 0;
    right: 0;
    margin: auto;
    width: 40%;
    height: 80%;
    box-shadow: 4px 12px 30px 6px rgb(243, 239, 239);
    @media screen and (max-width: 1200px) {
        width: 70vw;
    }
`
export const Text = styled.h1`
    font-size: 30px;
    font-weight: 700;
    text-align: center;
    margin-top: 20%;
`;

export const InputContain = styled.div`
    position: absolute;
    width: 100%;
    display: flex;
    flex-direction: column;
`;

export const AuthInput = styled.input`
    ${inputBasicStyle}    
    transition: .3s;
    padding: 20px;
    box-shadow: 4px 5px 5px 1px rgb(243, 239, 239);
    &:hover{
        box-shadow: none;   
    }
`

export const LoginBtn = styled.button`
    ${inputBasicStyle}
    background-color: #A6BB8D;
    color: #fff;
    font-weight: 700;
    cursor: pointer;
`