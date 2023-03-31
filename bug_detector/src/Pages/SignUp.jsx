import React, { useState } from 'react';
import { Box, Input,Text } from '@chakra-ui/react';
import style from "../Styles/SignUp.module.css";
import { Link, redirect, useNavigate, useParams } from 'react-router-dom';
import axios from "axios";
import { useToast } from '@chakra-ui/react'



const SignUp = () => {

    const [data,setData] = useState({
        name:"",
        email:"",
        password:""
    });
    const navigate = useNavigate();
    const toast = useToast()

    const handleChange = (e) =>{
        setData({
            ...data,
            [e.target.name]:e.target.value
        })
    }

    const handleSubmit = (e)=>{
        e.preventDefault();
        axios.post("http://localhost:8000/users/signup",data)
        .then((res)=>{
            if(res.status == 200){ 
                toast({
                    title: 'Account created.',
                    description: "We've created your account for you.",
                    status: 'success',
                    duration: 2000,
                    isClosable: true,
                });
                navigate("/login");
            }
        }).catch((err)=>{
            console.error(err);
            toast({
                title: 'An error occurred.',
                description: "Unable to create user account.",
                status: 'error',
                duration: 2000,
                isClosable: true,
            });
        })
    }



  return (
    <div>
        <form action=""  className={style.form} onSubmit={handleSubmit}>
            <Text fontSize='lg' as="b">Name</Text>
            <Input placeholder='Enter name here' size='md' name='name' onChange={handleChange} /> 
            <Text fontSize='lg' as="b">Email</Text>
            <Input placeholder='Enter Email here' size='md' name='email' onChange={handleChange} />
            <Text fontSize='lg'as="b">Password</Text>
            <Input placeholder='Enter password here' size='md' name='password' onChange={handleChange} />
            <Input type="submit" size='md' value="Register"/>     
            <Box>
                <Text fontSize='xs'>If you have already registered</Text> 
                <Text fontSize='xs'>Please 
                    <Link to= "/login">
                        <span 
                        style={{color:"orange",fontStyle:"italic",cursor:"pointer"}}>
                         Login
                        </span>
                    </Link> 
                </Text>
            </Box>
        </form>
    </div>
  )
}

export default SignUp;