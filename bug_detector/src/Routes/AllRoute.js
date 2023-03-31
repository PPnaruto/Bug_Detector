import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Home from '../Pages/Home'
import Login from '../Pages/Login'
import SignUp from '../Pages/SignUp'

const AllRoute = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/signup' element={<SignUp/>} />
            <Route path="/login" element={<Login/>} />
        </Routes>
    </div>
  )
}

export default AllRoute