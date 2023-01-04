import React, { useState, useEffect } from 'react';
import TodoModal from './modal/TodoModal';
import axios from 'axios';
import '../../styles/todo/TodoList.scss';
import { TodoType } from '../../type/type';
import {modalStateType } from '../../type/type';

const TodoList = () => {
    const blurTitle = ['오늘 할 일 ~~', '오늘 할 일 ~~~', '오늘 할 일 ~!!~!', '오늘 할 일 !!~!!'];
    const blurContent = ['오늘은 ~~', '오늘은 ~~', '오늘은 ~~', '오늘은 ~~'];
    const [todoData, setTodoData] = useState<TodoType[]>([] as TodoType[]);
    const [modalState, setModalState] = useState<string>('');
    const [clickedTodo, setClickedTodo] = useState<string>('');

    const modalStateFunc = (type: string): void => {
        setModalState(type);
    };

    function modalData (id: string): void{
        setClickedTodo(id);
        modalStateFunc('detail');
    }

    const props: modalStateType = {
        modalState,
        modalStateFunc
    }

    useEffect(() => {
        // todo 리스트 가져오기
        axios.get(`${process.env.REACT_APP_API_URL}/todos`, {
            headers: {
                Authorization: 'login token'
            }
        }).then(res => {
            setTodoData(res.data.data);   
        })
        // modal이 변경되면 리스트 재렌더링 없이 다시 출력하기
    }, [modalState]); 

    return (
        <>
            <div className="todo_list_contain"
                style={
                    !localStorage.getItem('token')
                        ? {
                            filter: "blur(4px)",
                            pointerEvents: "none"
                        }
                        : {
                            filter: "blur(0px)",
                            pointerEvents: "auto"
                        }}>
                <div className="todo_list_inner">
                    {
                        todoData.length === 0 && localStorage.getItem('token') 
                        && <p className="none_todo_text">데이터가 없습니다!</p>
                    }
                    <ul className="todo_lists">
                        {
                            !localStorage.getItem('token') ?
                            blurTitle.map((item, index) => {
                                return (
                                    <li key={index} className="todo_list">
                                        <h2 className="title">{ item }</h2>
                                        <p className="content">{ blurContent[index] }</p>
                                    </li>
                                )
                            })
                            : todoData.map((item, index) => {
                                return (
                                    <li key={index} className="todo_list"
                                    onClick={() => {modalData(item.id)}}>
                                        <div className="content">
                                            <h2 className="title">{item.title}</h2>
                                            <p className="date">{item.createdAt.substr(0, 10)}</p>
                                        </div>
                                    </li>
                                )
                            })
                        }
                    </ul>
                    <button className="add_todo_button" onClick={ () => {modalStateFunc('create')}}>+</button>
                </div>
            </div>
            <div className="todo_modal">
                {
                    modalState === 'create' || modalState === 'detail' ? <TodoModal {...props} clickedTodo={ clickedTodo } />
                    : null
                }
            </div>
        </>
    );
};

export default TodoList;