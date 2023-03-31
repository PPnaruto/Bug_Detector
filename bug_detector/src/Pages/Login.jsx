import React, { useState } from 'react';
import { Box, Input,Text } from '@chakra-ui/react';
import style from "../Styles/SignUp.module.css";
import { Link, redirect, useParams } from 'react-router-dom';


const Login = () => {

    const [data,setData] = useState({
        email:"",
        password:""
    });

    const handleChange = (e) =>{
        setData({
            ...data,
            [e.target.name]:e.target.value
        })
    }

    const handleSubmit = ()=>{
        e.preventDefault();
        console.log(data);
        alert("Login Successfully");
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