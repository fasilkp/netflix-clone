import React from 'react'
import './navbar.css'
import {Link} from "react-router-dom"

function Navbar() {
    return (
        <header className="navbar">
            <div className="head-part1">
                <a href="/"><img src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png' alt="Netflix Logo" /></a>
                <a href="/series-tv">Series TV</a>
                <a href="/my-list">My LIst</a>
            </div>
            <div className="head-part2">
            <a href="#">Kids</a>
            <a href="#">DVD</a>
            <a href="#"><img src='https://i.pinimg.com/originals/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1.png' alt="Avatar" /></a>
            </div>
        </header>
    )
}

export default Navbar
