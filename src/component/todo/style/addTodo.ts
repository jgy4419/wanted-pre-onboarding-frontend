import styled from 'styled-components';
import { TodoButton } from '../../../styles/styledComponents/overlapStyle';

export const TodoContain = styled.div`
    position: relative;
    margin: auto;
    width: 100%;
    height: 50px;
`

export const TodoInner = styled.div`
    position: absolute;
    display: flex;
    width: 30%;
    gap: 20px;
    left: 0;
    right: 0;
    margin: auto;
    @media screen and (max-width: 1200px) {
        width: 50%;
    }
`

export const TodoInput = styled.input`
    width: 100%;
    height: 100%;
    padding: 10px;
    font-size: 18px;
    font-weight: 700;
    border: 3px solid lightgrey;
    border-radius: 10px;
    @media screen and (max-width: 1200px) {
        width: 500px;
        height: 35px;
        font-size: 14px;
        padding: 5px;
    }
`

export const TodoAddButton = styled.button`
    ${TodoButton};
    background-color: rgb(236, 236, 201);
    @media screen and (max-width: 1200px) {
        width: 100px;
    }
`