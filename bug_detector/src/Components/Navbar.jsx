import React from 'react';
import { Button, ButtonGroup } from '@chakra-ui/react';
import style from "../Styles/Navbar.module.css"; 
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className={style.navbar}>
        <div>
            <img src="https://notion-emojis.s3-us-west-2.amazonaws.com/prod/svg-twitter/1f41e.svg" alt="bug" />
            <p>Bug tracker</p>
        </div>
        

        <div style={{display:"flex",gap:"30px"}}>
          <Link to="/login">
            <Button colorScheme='red' cursor="pointer" className={style.button} >Login</Button>
          </Link>
          <Link>
              <Button colorScheme='blue' cursor="pointer" className={style.button} >Dashboard</Button>
          </Link>
        </div>
    </div>
  )
}

export default Navbar