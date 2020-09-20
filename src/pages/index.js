import React from "react"
import Header from './header/index';
import './index.css';

export default function Home() {
  return(
    <div className="container">
      <div className="header">
        <Header/>
      </div>   
      <div className="main"></div>
      <div className="footer"></div>   
    </div>
  )
}
