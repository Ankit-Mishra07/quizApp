import React from 'react'
import './Header.css'
import {BrowserRouter, Link} from 'react-router-dom'
const Header = () => {
  return (
    <div>
      <Link to="/" className='title'>Intuitive Quiz Hub</Link>
      <hr className='divider'/>
    </div>
    
  )
}

export default Header