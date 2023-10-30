import { useEffect, useState } from "react";
import {useApi} from "../api";
import { useLocation, useNavigate } from "react-router-dom";
import { useAuthStore } from "../stores/authStore";

function useAuth(){
    const {user, setUser} = useAuthStore();
    const {api} = useApi();
    const location = useLocation();
    const navigate = useNavigate();

    const userId = localStorage.getItem('id');

    // 한번만 실행
    useEffect(()=>{
        if(!userId && !user){
            if(location.pathname !== '/signin'){
                localStorage.setItem('returnUrl', location.pathname);
            }
            navigate('/signin');
        }
    }, []);

    const fetchUser = async userId => {
        await api.user.get(userId)
        .then(res => {
            setUser(res.data);
            localStorage.setItem('id', res.data.id);
            localStorage.setItem('email', res.data.email);
            localStorage.setItem('name', res.data.name);
        })
        .catch(err => console.log(err));
    }

    const login = async params => {
        console.log('params : ', params);
        // TODO : 인증 서버를 거쳐서 로그인 후 id 또는 토큰값을 받아온다.
        const uId = 1;
        await fetchUser(uId);   // 조회
        const returnUrl = localStorage.getItem('returnUrl');
        if(returnUrl){
            localStorage.removeItem('returnUrl');
            navigate(returnUrl);
        }
        else
        {
            navigate('/')
        }
    }

    const logout = () => {
        localStorage.removeItem('id');
        localStorage.removeItem('email');
        localStorage.removeItem('name');
        localStorage.removeItem('returnUrl');
        setUser(null);
    }

    return {user, login, logout}
}

export default useAuth;