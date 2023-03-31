import { Text, Box, Button, Input } from '@chakra-ui/react';
import React, { useEffect, useRef, useState,useLayoutEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { Droptest } from '../Components/Droptest';
import axios from 'axios';
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
  } from '@chakra-ui/react';
import { bugAction } from '../Redux/Actions/bugAction';
import { QuoteApp } from '../Components/Droptestfunc';


const Dashboard = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const state = useSelector((selector)=>{
        return selector.auth;
    });

    const [bug,setBug] = useState({
        bugname:""
    });

    const [status,setStatus] = useState(false);
    const initRef = React.useRef()
    const [list,setList] = useState([]);
    const [test,setTest] = useState([]);
    useEffect(()=>{
        if(!state.authState){
            navigate("/login");
        }
    },[status])
    useEffect(()=>{
        axios.get("http://localhost:8000/bug")
        .then((res)=>{
            console.log(res.data.data);
            setList([...res.data.data]);
            
            setStatus(false);
        })
    },[status]);

    const handleChange = (e) =>{
        setBug({
            ...bug,
            bugname:e.target.value
        });
    }
    
    const addBug = ()=>{
        axios.post("http://localhost:8000/bug/add",bug)
        .then((res)=>{
            console.log(res.status);
            // alert("Bug Added Successfully");
            setStatus(true);
            bugAction(true,dispatch);
        }).catch((err)=>{
            console.log("In Error");
        })
    }
    console.log(list);
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
                    <Input placeholder='Bug Name' onChange={handleChange}/>
                </Box>
                <Box display="flex" gap="20px">
                    <Button
                    mt={4}
                    colorScheme='blue'
                    onClick={()=>{
                        onClose();
                        addBug();
                    }}
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
    {
        
        list.length != 0 &&  <QuoteApp data={list}/>
    }        
        </Box>
       
    </div>
  )
}
{/* <Droptest data={list} /> */}
export default Dashboard