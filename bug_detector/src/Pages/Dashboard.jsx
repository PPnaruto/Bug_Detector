import { Text, Box, Button, Input } from '@chakra-ui/react';
import React, { useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { Droptest } from '../Components/Droptest';
import {
    Popover,
    PopoverTrigger,
    PopoverContent,
    PopoverHeader,
    PopoverBody,
    PopoverFooter,
    PopoverArrow,
    PopoverCloseButton,
    PopoverAnchor,
    Portal
  } from '@chakra-ui/react'


const Dashboard = () => {

    const navigate = useNavigate();
    const state = useSelector((selector)=>{
        return selector.auth.authState;
    });
    const initRef = React.useRef()
    const [list,setList] = useState([
        {
        id:'0',
        content:"list 0"
        },
        {
            id:'1',
            content:"list 1"
            },
            {
                id:'2',
                content:"list 2"
                }
    ]);
    const [test,setTest] = useState([]);
    useEffect(()=>{
        if(!state){
            navigate("/login");
        }
    })
  return (
    <div>
       <Text fontSize='5xl' as='b'> Bug Tracker </Text>
        <Box>
        <Popover closeOnBlur={false} placement='right' initialFocusRef={initRef} >
      {({ isOpen, onClose }) => (
        <>
          <PopoverTrigger>
            <Button>Report Bug</Button>
          </PopoverTrigger>
          <Portal>
            <PopoverContent>
              <PopoverHeader>Add Bug</PopoverHeader>
              <PopoverCloseButton />
              <PopoverBody>
                <Box>
                    <Text fontSize='1xl'>Name</Text>
                    <Input placeholder='Bug Name'/>
                </Box>
                <Box display="flex" gap="20px">
                    <Button
                    mt={4}
                    colorScheme='blue'
                    onClick={onClose}
                    ref={initRef}
                    >
                    Add it
                    </Button>
                    <Button
                    mt={4}
                    // colorScheme='blue'
                    varient="outline"
                    onClick={onClose}
                    ref={initRef}  
                    >
                    Cancel
                    </Button>
                </Box>
                
              </PopoverBody>
              <PopoverFooter>Bug Tracker </PopoverFooter>
            </PopoverContent>
          </Portal>
        </>
      )}
    </Popover>
            
        <Droptest data={list}/>
        </Box>
       
    </div>
  )
}

export default Dashboard