import React, { useContext, useState } from 'react'
import { assets } from '../assets/assets'
import axios from 'axios'
import { ContextStore } from '../context/ContextStore'

function LoginPopup({ setShowLogin }) {

  const url = 'http://localhost:4000'

  const {setToken} = useContext(ContextStore)

  const [currState , setCurrState] = useState('Login')
  const [data,setData] = useState({
    name: "",
    email: "",
    password: ""
  })
  


  function onChangeHandler(event){
    const name = event.target.name
    const value = event.target.value
    setData(d => ({...d, [name]:value}))
  }
  
  const onLogin = async (event) => {
    event.preventDefault()

    let newUrl = url
    if(currState === 'Login'){
      newUrl += '/api/user/login'
    }
    else{
      newUrl += '/api/user/register'
    }
    const response = await axios.post(newUrl,data)

    if(response.data.success){
      setToken(response.data.token)
      localStorage.setItem('token',response.data.token)
      setShowLogin(false)
    }
    else{
      alert(response.data.message)
    }
  }


  return (
    <div className='login-popup'>
        <form onSubmit={onLogin} className='login-popup-container'>
          <div className='login-popup-title'>
            <h2>{currState}</h2>
            <img onClick={() => setShowLogin(false)} src={assets.cross_icon} alt="" />
          </div>
          <div className='login-popup-inputs'>
            {currState === "Login" ? <></> :  <input onChange={onChangeHandler} name='name' value={data.name} type="text" placeholder='Your Name' required />}
            <input onChange={onChangeHandler} name='email' value={data.email} type="email" placeholder='Your Email' required />
            <input onChange={onChangeHandler} name='password' value={data.password} type="password" placeholder='Password' required />
          </div>
          <button type='submit'>{currState === "Sign Up" ? "Create account" : "Login"}</button>
          <div className='login-popup-condition'>
            <input type="checkbox" required />
            <p>By continuing , i agree the terms of use & privacy policy</p>
          </div>
          { currState === 'Login'
           ? <p>Create a new account? <span onClick={() => {setCurrState("Sign Up")}}>Click here</span></p>
           : <p>Already have an account? <span onClick={() => {setCurrState("Login")}}>Login here</span></p>
          }
        </form>
    </div>
  )
}

export default LoginPopup