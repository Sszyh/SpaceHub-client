import React from 'react'
import '../styles/Header.css'
import SearchIcon from '@mui/icons-material/Search';
import { Avatar } from '@mui/material/';

function Header() {
  return (
    <div className='header'>
      <img
        className='header__icon'
        src="https://i.pinimg.com/originals/3c/bf/be/3cbfbe148597341fa56f2f87ade90956.png"
        alt=""
      />

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