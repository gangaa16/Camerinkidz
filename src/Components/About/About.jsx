import React from 'react';
import './About.css'; // corrected import statement

import about_img from '../../images/new.jpg';
import play_icon from '../../images/play-icon.png';

const About = () => {
  return (
    <div className='about'>
      <div className="about-left">
        <img src={about_img} alt="" className='about-img'/>
        <img src={play_icon} alt="" className='play-icon'/>
      </div>
      <div className="about-right"> 
      <h3>About Camerinkidz</h3>
        <h2>Unlock Your Child's Potential: </h2>
        <p>At CamerinKidz, we believe that every child has the potential to become a master of technology. With a mission to inspire and empower the next generation of innovators, our platform offers a dynamic and interactive environment where kids can explore the fascinating world of coding. Through engaging curriculum, personalized learning paths, and live interactive sessions, we aim to make coding accessible, enjoyable, and meaningful for kids of all ages. </p>
        <p>Join us on this exciting journey as we unlock the endless possibilities of coding together!</p>
      </div>
    </div>
  );
}

export default About;
