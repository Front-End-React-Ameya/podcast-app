import React from 'react'
import "./styles.css"
import { Link, useLocation } from 'react-router-dom'
// import Header from "../Header"


export default function Header() {
    const location = useLocation();
    const currentPath = location.pathname
    return (
        <div className='navbar'>
            <div className='gradient'></div>
            <div className='links'>
                <Link to="/" className={currentPath == "/" ? "active" : ""} >SignUp</Link>
                <Link to="/podcasts" className={currentPath == "/podcasts" ? "active" : ""} >Podcasts</Link>
                <Link to="/start-a-podcast"className={currentPath == "/start-a-podcast" ? "active" : ""} >Start A Podcast</Link>
                <Link to="/Profile"className={currentPath == "/Profile" ? "active" : ""} >Profile</Link>
            </div>
        </div>
    )
}
