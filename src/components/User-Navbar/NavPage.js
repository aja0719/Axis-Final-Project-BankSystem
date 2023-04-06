import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Dashboard from '../pages/user/Dashboard';
import TransferFund from '../pages/user/TransferFund';
import ViewStatement from '../pages/user/ViewStatement';
import Profile from '../pages/user/Profile';
const NavPage = () => {

    return (

        <div>
            <Routes>
                {/* <Route path='/' element={<Home/>}></Route> */}
                <Route path='/' element={<Dashboard/>}></Route>
                <Route path='/transferfund' element={<TransferFund/>}></Route>
                {/* <Route path='/viewStatement' element={<ViewStatement/>}></Route> */}
                <Route path='/profile' element={<Profile/>}></Route>
                <Route path='/viewstatement/:customerId' element={<ViewStatement/>}></Route>
                
                

            </Routes>

        </div>

    )
}

export { NavPage };
