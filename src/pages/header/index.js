import React from 'react';
import Github from '../../assets/github.jpg';
import './index.css'

export default function Header(){
    return(
        <div className="container">
            <div className="imageContainer">
                <img className="image" src={Github} alt="Logo"/>
                <div className="formContainer">
                    <input className="form" placeholder="Search or jump to..."/>
                </div>
                    <nav className="nav-container">
                        <ul>
                            <li><a>Pull requests</a></li>
                            <li>Issues</li>
                            <li>MarketPlace</li>
                            <li>Explore</li>
                        </ul>
                    </nav>
            </div>
            
        </div>
    )
}