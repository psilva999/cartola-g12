import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom"
import LogoDesktop from '../assets/imgs/g12-logo.png'

const Header = () => {
  const [fixed, setFixed] = useState(false),
        [isLoggedIn, setIsLoggedIn] = useState(false)

  useEffect(() => {
    window.addEventListener('scroll', handleHeader)
    window.addEventListener('load', handleHeader)

    return () => {
      window.removeEventListener('scroll', handleHeader)
    }
  }, [])

  const handleHeader = () => {
    window.scrollY >= 3 ? setFixed(true) : setFixed(false)
  }

  const activeButtonClick = () => {
    setIsLoggedIn(true)
  }

  const removeButtonClick = () => {
    setIsLoggedIn(false)
  }

  return (
    <header className={fixed ? 'fixed' : ''}>
      <Link to='/cartola-g12/' onClick={removeButtonClick}>
        <nav>
          <div></div>
          <div></div>
          <h1>menu</h1>
        </nav>
      </Link>

      <Link to='/cartola-g12/'>
        <img
          src={LogoDesktop}
          className='logo'
          alt="logo"
          onClick={removeButtonClick}
        />
      </Link>

      <Link to='/cartola-g12/time'>
        <button onClick={activeButtonClick}>
          {isLoggedIn ? 'PERFIL' : 'ACESSAR'}
        </button>
      </Link>
    </header>
  )
}

export default Header
