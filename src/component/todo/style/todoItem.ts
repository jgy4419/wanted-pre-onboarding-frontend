import styled from 'styled-components';
import { TodoButton } from '../../../styles/styledComponents/overlapStyle';

export const TodoList = styled.div`
    width: 100%;
    min-height: 50px;
    box-shadow: 4px 3px 3px 2px rgb(243, 239, 239);
    background-color: rgb(243, 243, 243);
    border-radius: 20px;
    margin-top: 30px;
    cursor: pointer;
    transition: .3s;
    word-wrap: break-word;
`

export const TodoContain = styled.label`
    display: flex;
    justify-content: space-between;
`



export const TodoCheckBox = styled.input.attrs({
    type: 'checkbox',
})`
    margin-left: 20px;
    overflow: hidden;
    white-space: nowrap;
    width: 20px;
    &:checked {
        & + span {
          text-decoration: line-through;
        }
    }
`

export const TodoContent = styled.span`
    width: 200px;
    padding-top: 10px;
    box-sizing: border-box;
    font-size: 17px;
    font-weight: 700;
    text-align: center;
    display: flex;
    @media screen and (max-width: 1200px) {
        font-size: 14px;
    }
`

export const TodoEditButton = styled.button`
    ${TodoButton}
    background-color: rgb(236, 236, 201);
`

export const TodoDeleteButton = styled.button`
    ${TodoButton}
    color: #fff;
    background-color: #F48484;  
`

export const TodoSubmitButton = styled.button`
    ${TodoButton}
    color: #333;
    background-color: rgb(236, 236, 201);
`

export const TodoEditInput = styled.input`
    width: 60%;
    height: 100%;
    padding: 10px;
    font-size: 15px;
    font-weight: 700;
    border: 3px solid lightgrey;
    border-radius: 10px;
    @media screen and (max-width: 1200px) {
        width: 50%;
        height: 100%;
        font-size: 12px;
    }
`

export const TodoEdit = styled.span`
    height: 100%;
    vertical-align: middle;
`
