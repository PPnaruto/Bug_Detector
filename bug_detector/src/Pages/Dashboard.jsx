import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
    const navigate = useNavigate();
    const state = useSelector((selector)=>{
        return selector.auth.authState;
    })

    useEffect(()=>{
        if(!state){
            navigate("/login");
        }
    })
  return (
    <div>
        <h1>Dashboard</h1>
    </div>
  )
}

export default Dashboard