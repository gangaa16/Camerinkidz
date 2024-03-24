import React from 'react'
import './Hero.css'
import dark_arrow from '../../images/dark-arrow.png'
const Hero = () => {
  return (
    <div className='Hero container'>
        <div className="hero-text">
            <h1>Unlock the Future with Fun: Empowering Kids Through Coding Adventures!</h1>
            
            <button className='btn'>Explore more <img src={dark_arrow} alt="" /></button>
        </div>

      
    </div>
  )
}

export default Hero
