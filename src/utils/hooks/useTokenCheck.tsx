import { useLayoutEffect, useState } from 'react';

const useTokenCheck = () => {
    const [tokenState, setTokenState] = useState(false);
    
    useLayoutEffect(() => {
        localStorage.getItem('token')
            ? setTokenState(true)
            : setTokenState(false);
    }, []);
    return { tokenState };
};

export default useTokenCheck;
