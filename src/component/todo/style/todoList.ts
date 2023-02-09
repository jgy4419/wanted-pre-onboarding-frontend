import styled from 'styled-components';

export const TodoListContain = styled.div`
    position: relative;
    margin: auto;
    margin-top: 30px;
    width: 100%;
    height: 90vh;   
`

export const TodoListInner = styled.div`
    text-align: center;
`
export const TodoLists = styled.ul`
    position: absolute;
    right: 0;
    left: 0;
    width: 40%;
    height: 70%;
    margin: 2% auto;
    overflow-y: scroll;
    @media screen and (max-width: 1200px) {
        width: 70%;
    }
`

export const NotTodo = styled.h1`
    color: #333;
`