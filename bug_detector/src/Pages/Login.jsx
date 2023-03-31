import React, { useState } from 'react';
import { Box, Input,Text } from '@chakra-ui/react';
import style from "../Styles/SignUp.module.css";
import { Link, redirect, useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import { useToast } from '@chakra-ui/react';
import { useDispatch } from "react-redux";
import { authAction } from '../Redux/Actions/authAction';


const Login = () => {

    const [data,setData] = useState({
        email:"",
        password:""
    });
    const navigate = useNavigate();
    const toast = useToast();
    const dispatch = useDispatch();

    const handleChange = (e) =>{
        setData({
                ...data,
                [e.target.name]:e.target.value
        })
    }

    const handleSubmit = (e)=>{
        e.preventDefault();
        console.log(data);
        axios.post("http://localhost:8000/users/login",data)
        .then((res)=>{
            const token = res.data.data.token;
            console.log(res.data.data.token);
            if(token!=null){
                    toast({
                        title: "Login Successful",
                        position: "top-right",
                        isClosable: true,
                    });
            authAction(true,dispatch); 
            localStorage.setItem("authToken",token);
            navigate("/dashboard");
            }
        }).catch((err)=>{
            console.log(err);
        })
        // alert("Login Successfully");
    }



  return (
    <div>
        <form action=""  className={style.form} onSubmit={handleSubmit}> 
            <Text fontSize='lg' as="b">Email</Text>
            <Input placeholder='Enter Email here' size='md' name='email' onChange={handleChange} />
            <Text fontSize='lg'as="b">Password</Text>
            <Input placeholder='Enter password here' size='md' name='password' onChange={handleChange} />
            <Input type="submit" size='md' value="Login"/>     
            <Box>
                <Text fontSize='xs'>If you have already registered</Text> 
                <Text fontSize='xs'>Please 
                    <Link to= "/signup">
                        <span 
                        style={{color:"orange",fontStyle:"italic",cursor:"pointer"}}>
                         Register
                        </span>
                    </Link> 
                </Text>
            </Box>
        </form>
    </div>
  )
}

export default Login;