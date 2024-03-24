import React, { useEffect, useState } from 'react'
import './Navbar.css'
import { Link } from 'react-scroll';


const Navbar = () => {
  const [sticky,setSticky] =useState(false);

  useEffect(()=>{
    window.addEventListener('scroll',()=>{
      window.scrollY >50 ? setSticky(true): setSticky(false);
    })
  },[])



  return (
    <nav className={`container ${sticky ? 'dark-nav':''}`}>
      <header>CAMERINKIDZ</header>
      
        <ul>
            <li><Link to='Hero' smooth={true}  offset={0} duration={500}>Home </Link></li>
            <li><Link to='programs' smooth={true}  offset={0} duration={500}>Program </Link></li>
            <li><Link to='about' smooth={true}  offset={0} duration={500}>About US </Link></li>
            <li><Link to='contact' smooth={true}  offset={0} duration={500}>Contact Us </Link></li>
            <li> <button className='btn'>Login</button></li>
            
        </ul>
    </nav>
  )
}

export default Navbar
