import React, { useContext, useState } from 'react'
import './style.css'
import { assets } from '../../src/assets/assets'
import { Link, useNavigate } from 'react-router-dom'
import { ContextStore } from '../context/ContextStore'

function Navbar( {setShowLogin} ) {


    const [menu , setMenu] = useState('home')

    function changeActiveNav(link){
        setMenu(link)
    }


    const {getTotalCardsAmount,token,setToken} = useContext(ContextStore)

    const navigate = useNavigate()

    function logOut(){
        localStorage.removeItem("token")
        setToken("")
        navigate('/')
    }



  return (
    <nav className='navbar'>
        <Link to='/'><img src={assets.logo} alt="logo" className='nav-logo' /></Link>

        <ul className='nav-items'>
            <Link to='/' className={menu == 'home' ? 'active-nav' : ''} onClick={() => changeActiveNav('home')}>home</Link>
            <a href='#explore-menu' className={menu == 'foods' ? 'active-nav' : ''} onClick={() => changeActiveNav('foods')}>foods</a>
            <a href='#app-download' className={menu == 'apps' ? 'active-nav' : ''} onClick={() => changeActiveNav('apps')}>our apps</a>
            <a href='#footer' className={menu == 'contact' ? 'active-nav' : ''} onClick={() => changeActiveNav('contact')}>contact us</a>
        </ul>

        <div className='nav-right'>
            <img src={assets.search_icon} alt="search-icon" />
            <div className='nav-search-icon'>
                <Link to='/cart'><img src={assets.basket_icon} alt="" /></Link>
                <div className={getTotalCardsAmount() === 0 ? "" : 'dot'}></div>
            </div>
            {!token ? <button className='sign-btn' onClick={() => setShowLogin(true)}>sign in/up</button> 
            : <div className='navbar-profile'>
                <img src={assets.profile_icon} alt="" />
                <ul className="nav-profile-dropdown">
                    <li onClick={()=> navigate('/myorders')}><img src={assets.bag_icon} alt="" /><p>Orders</p></li>
                    <hr />
                    <li onClick={logOut}><img src={assets.logout_icon} alt="" /><p>Logout</p></li>
                </ul>
            </div> }
            
        </div>

    </nav>
  )
}

export default Navbar