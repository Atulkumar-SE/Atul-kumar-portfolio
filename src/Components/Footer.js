import React from 'react'
import './Footer.css'
import { FaFacebookF, FaHome, FaInstagram, FaLinkedinIn, FaPhone, FaWhatsapp, } from 'react-icons/fa'
import {FiMail} from 'react-icons/fi'

const Footer = () => {
  return (
    <div className='footer'>
        <div className="footer_container">
            
            <div className="left">
                <h4>About Company</h4>
                <p>This is me Atul kumar, CEO & Founder of Fewwork. <br /> I enjoy discussing new project and design challenges.</p>
                <div className="social_icon">
             <a href="https://www.linkedin.com/in/atul-kumar-3998241b5/" target='_blank' ><FaWhatsapp className='f_social'/></a>
              <a href="https://www.linkedin.com/in/atul-kumar-3998241b5/" target='_blank' ><FaLinkedinIn className='f_social'/></a>
              <a href="https://www.linkedin.com/in/atul-kumar-3998241b5/" target='_blank' ><FaFacebookF className='f_social'/></a>
              <a href="https://www.linkedin.com/in/atul-kumar-3998241b5/" target='_blank' ><FaInstagram className='f_social'/></a>
                </div>
            </div>
            <div className="right">
                <div className="location">
                    <h5><FaHome className='f_icon'/>
                    Noida Delhi-NCR, UttarPradesh, India</h5>
                </div>  
                <div className="phone">
                    <h5><FaPhone className='f_icon'/>
                    9718901909</h5>
                </div>
                <div className="mail">
                   <h5> <FiMail  className='f_icon'/>
                    atuljaiswal.se@gmail.com</h5>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer