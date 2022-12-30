import React from 'react'
import { Link } from 'react-router-dom'
import './AboutPage.css'
import top from '../../Assets/responsive web.jpg'
import bottom from '../../Assets/react.png'

function AboutPage() {
  return (
        <>
            <div className="about_ctnr">
                <div className="about_left">
                    <h1>Who am i?</h1>
                    <p>I am a React front-end Developer, I create responsive & secure website for my clint.</p>
                    <Link to="/contact">
                        <button className='btn3'>Contact</button>
                    </Link>
                </div>
                <div className="about_right">
                    <div className="img_ctnr">
                        <div className="img_stack top">
                            <img src={top} className="img_a" alt="true" />
                        </div>
                        <div className="img_stack bottom">
                            <img src={bottom} className="img_a" alt="image" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AboutPage