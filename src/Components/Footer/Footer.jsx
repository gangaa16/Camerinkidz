import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <div className='footer'>
        <p>@ 2024 Camerinkidz .All rights reserved</p>
        <ul>
            <li>Terms of Service</li>
            <li>privacy</li>
        </ul>
        <div class='footer-link-items'>
            <h2>Social Media</h2>
            <li to='/'>Instagram</li>
            <li to='/'>Facebook</li>
            <li to='/'>Youtube</li>
            <li to='/'>Twitter</li>
          </div>
      
    </div>
  )
}

export default Footer
