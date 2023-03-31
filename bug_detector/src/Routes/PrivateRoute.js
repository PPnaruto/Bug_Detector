import React from 'react'
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';


const PrivateRoute = ({children}) =>{
    const navigate = useNavigate();
    const state = useSelector((selector)=>{
        return selector.auth.authState;
    })
    console.log(state);
    if(!state){
        navigate("/login");
    }
    return children;
}

export default PrivateRoute;