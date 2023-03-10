import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import useTokenCheck from '../../utils/hooks/useTokenCheck';
import * as Head from '../../styles/styledComponents/styledHeader';
import { logout } from '../auth/hooks/useLogout';

const Header = () => {
    const { tokenState } = useTokenCheck();

    const [url, setUrl] = useState(['/', '/signin', '/signup']);
    const [menuList, setMenuList] = useState(['Main', 'Login', 'Join']);
 
    useEffect(() => {
        if (tokenState) {
            setMenuList(['Main']);
            setUrl(['/']);
        }        
    }, [tokenState]);

    return (
        <Head.HeaderContain>
            <Head.GlobalStyle/>
            <Head.HeaderInner>
                <Link to="/"><Head.Logo>wanted</Head.Logo></Link>
                <Head.MenuList>
                    {
                        menuList.map((item, index) => {
                            return (
                                <Head.HeadItemContain key = {index}>
                                    <Link to={url[index]} key={item}>
                                        <Head.MenuItem>{item}</Head.MenuItem>
                                    </Link>
                                </Head.HeadItemContain>
                            )
                        })
                    }
                    {tokenState && <Head.MenuItem onClick={ () => {logout()}}>๋ก๊ทธ์์</Head.MenuItem>}
                </Head.MenuList>
            </Head.HeaderInner>
        </Head.HeaderContain>
    );
};

export default Header;