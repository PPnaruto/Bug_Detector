import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Home from '../Pages/Home'
import Login from '../Pages/Login'
import SignUp from '../Pages/SignUp'
import PrivateRoute from './PrivateRoute'
import Dashboard from '../Pages/Dashboard'

const AllRoute = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/signup' element={<SignUp/>} />
            <Route path="/login" element={<Login/>} />
            <Route path='/dashboard' element={
              <PrivateRoute> <Dashboard/> </PrivateRoute>
            } />
        </Routes>
    </div>
  )
}

export default AllRoute