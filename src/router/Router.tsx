import { Navigate, Route, Routes } from 'react-router-dom';
import TodoMain from '../component/todo/TodoMain';
import Page404 from '../pages/404';
import Login from '../component/auth/Login';
import Join from '../component/auth/Join';
import useTokenCheck from '../utils/hooks/useTokenCheck';

const Router = () => {
    const { tokenState } = useTokenCheck();
    return (
        <Routes>
            <Route path="/" element={<Navigate to="/todo" />} />
            < Route path="/todo" element={<TodoMain />} />
            {
                tokenState === true
                    ? <Route path="/signin" element={<Navigate to="/todo" />} />
                    : <Route path="/signin" element={<Login />} />
                
            }
            {
                tokenState === true
                    ? <Route path="/signup/*" element={<Navigate to="/todo" />} />
                    : <Route path="/signup" element={<Join />} />
                
            }
            <Route path="/*" element={ <Page404/>} />
        </Routes>
    )
}

export default Router;