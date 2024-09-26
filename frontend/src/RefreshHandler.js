import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

function RefrshHandler({ setIsAuthenticated }) {
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        const data = localStorage.getItem('user-info');
        const token = JSON.parse(data)?.token;
        if (token) {
            setIsAuthenticated(true);
            if (
                location.pathname === '/login'
            ) {
                navigate('/profile');
            }
        }
    }, [location, navigate, setIsAuthenticated])

    return (
        null
    )
}

export default RefrshHandler;