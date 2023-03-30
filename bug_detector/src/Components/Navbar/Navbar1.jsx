import React from 'react';
import { Button, ButtonGroup } from '@chakra-ui/react';
import style from "../../Styles/Navbar.module.css"; 

const Navbar1 = () => {
  return (
    <div className={style.navbar}>
        <div>
            <img src="https://notion-emojis.s3-us-west-2.amazonaws.com/prod/svg-twitter/1f41e.svg" alt="bug" />
            <p>Bug tracker</p>
        </div>
        

        <div>
           <Button colorScheme='red' cursor="pointer" className={style.button} >Login</Button>
        </div>
    </div>
  )
}

export default Navbar1