import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios';



import { Routes, Route } from 'react-router-dom';
import IndexPage from './pages/IndexPage';
import LoginPage from './pages/LoginPage ';
import Leyout  from './Leyout';
import Register from './pages/Register';





function App() {

  return (

    <Routes>

      <Route path='/' element={<Leyout />}>
      <Route index element={<IndexPage />} />
      <Route path='/login' element={<LoginPage />} />
      <Route path='/register' element={<Register />} />
       
      </Route>
      
    </Routes>

  )
}

export default App
