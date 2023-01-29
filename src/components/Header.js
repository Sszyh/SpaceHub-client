import React from 'react';
import '../styles/Header.css';
import { Avatar } from '@mui/material/';
import { Link, withRouter } from 'react-router-dom';
import SearchInput from "./searchInput";

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

      <SearchInput/>

      <div className='header__right'>
        <Avatar />
      </div>
    </div>
    );
  };

export default Header;