import React from 'react'
import { assets } from '../assets/assets'

function Footer() {

    const current_year = new Date().getFullYear()


  return (
    <footer className='footer' id='footer'>
        <div className='footer-content'>
            <div className="footer-content-left">
                <img src={assets.logo} alt="" />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet corporis fugiat tempore possimus ex ipsa soluta saepe? Ea sint ab recusandae eos, iure consequuntur, veniam necessitatibus libero maiores aliquid aperiam?</p>
                <div className='footer-social-icons'>
                    <a href="#"><img src={assets.linkedin_icon} alt="" /></a>
                    <a href="#"><img src={assets.twitter_icon} alt="" /></a>
                    <a href="#"><img src={assets.facebook_icon} alt="" /></a>
                </div>
            </div>
            <div className="footer-content-center">
                <h2>Company</h2>
                <ul>
                    <li>Home</li>
                    <li>Delivery</li>
                    <li>About us</li>
                    <li>Privacy policy</li>
                </ul>
            </div>
            <div className="footer-content-right">
                <h2>Get In Touch</h2>
                <ul>
                    <li>021-444858555</li>
                    <li>contact@gmail.com</li>
                </ul>
            </div>
            <hr />
            <p className="footer-copyright">Copyright {current_year} &copy; - All rights reserved.</p>
        </div>
    </footer>
  )
}

export default Footer