import React from 'react';
import { Button, ButtonGroup } from '@chakra-ui/react';
import style from "../Styles/Navbar.module.css"; 
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { authAction } from '../Redux/Actions/authAction';


const Navbar = () => {
  const state = useSelector((selector)=>{
    return selector.auth.authState;
  });
  const dispatch = useDispatch();

  const handleClick = () =>{
    authAction(false,dispatch);
  }
  return (
    <div className={style.navbar}>
        <div>
            <img src="https://notion-emojis.s3-us-west-2.amazonaws.com/prod/svg-twitter/1f41e.svg" alt="bug" />
            <p>Bug tracker</p>
        </div>
        

        <div style={{display:"flex",gap:"30px"}}>
          {
            state ? <Link to="/">
                        <Button colorScheme='red' cursor="pointer" className={style.button} onClick={handleClick}>Logout</Button>
                    </Link>
                  :
                    <Link to="/login">
                        <Button colorScheme='red' cursor="pointer" className={style.button}>Login</Button>
                    </Link>
          } 
          <Link to="/dashboard">
              <Button colorScheme='blue' cursor="pointer" className={style.button} >Dashboard</Button>
          </Link>
        </div>
    </div>
  )
}

export default Navbar