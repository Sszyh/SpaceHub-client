import React from 'react'
import '../styles/Header.css'
import SearchIcon from '@mui/icons-material/Search';
import MenuIcon from '@mui/icons-material/Menu';
import { Avatar } from '@mui/material/';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div className='header'>

      <Link to='/'>
        <img
          className='header__icon'
          src="https://i.pinimg.com/originals/3c/bf/be/3cbfbe148597341fa56f2f87ade90956.png"
          alt=""
        />
      </Link>

      <div className='header__center'>
        <input type="text" />
        <SearchIcon />
      </div>

      <div className='header__right'>
        <Avatar />
      </div>
    </div>
  )
}

export default Header