import { css } from 'styled-components';

export const inputBasicStyle =  css`
    margin: auto;
    width: 80%;
    height: 45px;
    border: none;
    border-radius: 10px;
    box-sizing: border-box;
    margin-top: 30px;
`

export const button = css`
    margin-top: 10px;
    border: 0;
    border-radius: 5px;
    width: 60px;
    height: 40px;
    font-size: 14px;
    font-weight: 700;
    cursor: pointer;
`

export const edit = css`
    width: 80%;
    margin-left: 30px;  
    padding: 10px;
    background-color: rgb(242, 239, 239);
    box-sizing: border-box;
    border-radius: 10px;
    box-shadow: 2px 3px 3px 2px rgb(243, 239, 239);
    border: 0;
    font-weight: 600;
`

export const TodoButton = css`
    width: 70px;
    height: 50px;
    color: #333;
    border-radius: 20px;
    border: 0;
    font-size: 17px;
    font-weight: 700;
    box-sizing: border-box;
    margin-left: 10px;
    cursor: pointer;
    @media screen and (max-width: 1200px) {
        border-radius: 15px;
        font-size: 14px;
        width: 60px;
        height: 50px;
    }
`