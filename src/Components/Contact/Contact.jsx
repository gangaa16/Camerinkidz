import React from 'react'
import './Contact.css'
import msg_icon from '../../images/msg-icon.png'
import mail_icon from '../../images/mail-icon.png'
import phn_icon from '../../images/phone-icon.png'
import loc_icon from '../../images/location-icon.png'

const Contact = () => {
  
  return (
    <div className='contact'>
        <div className="contact-col">
            <h3>Send us a message <img src={msg_icon} alt="" /></h3>
            <p>Feel free to reach out through contact form or find our contact information below.Your feedback,questions and suggestions are important to us as we strive to provide exceptional service to our children</p>
            <ul>
                <li> <img src={mail_icon} alt="" />Contact@camerinkidz.gmail.com</li>
                <li> <img src={phn_icon} alt="" />0000000000 </li>
                <li> <img src={loc_icon} alt="" />Jp Ventures,3rd Floor,Dr.Rajkrishnans Building, North Fort Gate,Tripunithura,Ernakulam ,Kochi, Kerala 682301, India </li>
            </ul>
        </div>
        <div className="contact-col">
          <form >
            <label>Your name</label>
            <input type="text" name='name' placeholder='Enter Your Name'required />

            <label>Phone Number</label>
            <input type="tel" name='phone' placeholder='Enter Your Mobile Number' required />

            <label>Write Your Message Here</label>
            <textarea name="message"  rows="6" placeholder='Enter Your Message' required></textarea>
            <button type='submit' className='btn dark-btn'>Submit Now</button>
          </form>
          <span></span>


        </div>
      
    </div>
  )
}

export default Contact
