import React from 'react'

import { Link } from "react-router-dom";

import LogoDesktop from '../assets/imgs/g12-logo.png'

const Header = () => {
  return (

    <header>
      <Link to='/cartola-g12/'>
        <nav>
          <div></div>
          <div></div>
          <h1>menu</h1>
        </nav>
      </Link>

      <Link to='/cartola-g12/'>
        <img 
          src={ LogoDesktop }
          className='logo' 
          alt="logo"/>
      </Link>

      <Link to='/cartola-g12/time'>
        <button>ACESSAR</button> </Link>
    </header>

  )
}

export default Header
