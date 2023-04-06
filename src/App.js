
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import './App.css';
import { Footer } from './components/Footer';
import {Index} from './components/pages/Index'
import Navbar from './components/Navbar';
import Login from './components/pages/Login';
import Signup from './components/pages/Signup';
import { MainPage } from './components/User-Navbar/MainPage';
import Protected from './components/Protected';
import { useState } from 'react';
import ViewStatement from './components/pages/user/ViewStatement';


function App() {
  
  return (
    <BrowserRouter>
    <Navbar/>
    <Routes>
    <Route path='/login' element={<Login/>}></Route>
    <Route path='/signup' element={<Signup/>}></Route>
    {/* <Route path='/viewstatement/:customerId' element={<ViewStatement/>}></Route> */}
    <Route path='/account/*' element={
       <MainPage /> }></Route>
    
    
    
    <Route path='/' element={<Index/>}></Route>

    
    </Routes>
   
    </BrowserRouter>

      
    
  );
}

export default App;
