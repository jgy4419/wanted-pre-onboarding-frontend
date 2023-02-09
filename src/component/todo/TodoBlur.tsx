import { Link } from 'react-router-dom';
import { blurTitle, blurContent } from '../../utils/constants';
import * as Blur from './style/todoBlur';
import * as Item from './style/todoItem';
import * as List from './style/todoList';

const TodoBlur = () => {
    return (
        <Blur.TodoContain>
            <div className="todo_inner">
                <Blur.BeforeLoginText>
                    <Blur.TodoBlurText>Todo를 만들기 위해서는 로그인이 필요해요!</Blur.TodoBlurText>
                    <Link to='/signin'>
                        <Blur.TodoBlurButton>로그인 하러 가기</Blur.TodoBlurButton>
                    </Link>
                </Blur.BeforeLoginText>
            </div>
            <List.TodoLists
            style={{
                filter: "blur(4px)",
                pointerEvents: "none"
            }}>
                {
                    blurTitle.map((item, index) => {
                        return (
                            <Item.TodoList key={index} >
                                <Item.TodoContent>{ blurContent[index] }</Item.TodoContent>
                            </Item.TodoList>
                        )
                    })
                }
            </List.TodoLists>
        </Blur.TodoContain>
    );
};

export default TodoBlur;