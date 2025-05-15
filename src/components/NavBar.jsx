import React from 'react'
import navImg from "../assets/img 1.jpg"
import suitCase from '../assets/suitCase img.png'
import "./NavBar.css"

export const NavBar = () => {

    return (
        <div id="mainNav">
            <div
                style={{
                    backgroundImage: `URL(${navImg})`
                }}
                className="navImgContainer">
            </div>

            <div className="haedings">
                <h1>FAR AWAY</h1>
                <h2>Trip Luggage</h2>
            </div>

            <img className='suitCaseImg' src={suitCase} alt="" />
        </div>
    )
}
