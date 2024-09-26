import React, { useState } from 'react'
import Navbar from './Components/Navbar'
import {  Routes , Route } from 'react-router-dom'
import Home from './Pages/Home'
import Cards from './Pages/Cards'
import Orders from './Pages/Orders'
import Footer from './Components/Footer'
import LoginPopup from './Components/LoginPopup'
import Verify from './Pages/verify/Verify'
import MyOrders from './Pages/MyOrders/MyOrders'


function App() {

  
  const [showLogin , setShowLogin] = useState(false)

  return (
    <>
    {showLogin ? <LoginPopup setShowLogin={setShowLogin}/> : <></>}
      <div className='container'>
        <Navbar setShowLogin={setShowLogin}/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/cart' element={<Cards/>}/>
          <Route path='/orders' element={<Orders/>}/>
          <Route path='/verify' element={<Verify/>}/>
          <Route path='/myorders' element={<MyOrders/>}/>
        </Routes>
      </div>
      <Footer/>
    </>

  )
}

export default App