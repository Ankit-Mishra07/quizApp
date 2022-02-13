import React from 'react'
import './Header.css'
import {BrowserRouter, Link} from 'react-router-dom'
const Header = () => {
  return (
    <BrowserRouter>
    <div>
      <Link to="/" className='title'>Intuitive Quiz Hub</Link>
      <hr className='divider'/>
    </div>
    </BrowserRouter>
  )
}

export default Header