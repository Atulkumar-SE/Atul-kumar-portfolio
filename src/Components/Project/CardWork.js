import React from 'react'
import './CardWork.css'
import { NavLink } from 'react-router-dom';

const CardWork = (props) => {
  return (
    <div className="project_card">
    <img src={props.imgsrc} alt="image" />
    <h2 className="project_title">{props.title}</h2>
    <div className="pro_detail">
      <p>{props.text}</p>
      <div className="pro_btn">
        <NavLink to={props.view} className="btn3" target="_blank">View</NavLink>
        <NavLink to={props.source} className="btn3" target="_blank">Source</NavLink>

      </div>
    </div>
</div>
  )
}

export default CardWork