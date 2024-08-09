import React from 'react'


export default function Footer() {
  return (
  <footer className='footer'>
    
  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"/>

    <nav>
    <ul className="nav justify-content-center">
      <li className="nav-item">
        <a className="nav-link active" aria-current="page" href="about">About</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="contact">Contact Us</a>
      </li>
      {/* <li class="nav-item">
        <a class="nav-link" href="follow">Follow Us</a>
      </li>  */}
    </ul>
    </nav>

    <div className="container"> 
        <div className="line"></div>
        <span className="text">Follow Us</span>
        <div className="line"></div>
    </div>  
    </footer>
  )
}