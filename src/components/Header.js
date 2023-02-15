import React, { Fragment, useState } from 'react';
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import { Button } from '@mui/material';
import { Avatar } from '@mui/material/';
import SearchIcon from '@mui/icons-material/Search';
import { common, deepPurple } from '@mui/material/colors';
import Link from '@mui/material/Link';
// import PeopleIcon from '@mui/icons-material/People';
import { DateRangePicker } from 'react-date-range'

import '../styles/Header.css';
import '../styles/Banner.css';
import '../styles/Search.css';
import logo from '../logo/logo.png';


function Header({ placeholder }) {

  const [searchTerm, setSearchTerm] = useState("");
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [noofGuests, setNoofGuests] = useState(1);
  const [uId, setUID] = useState("");
  const [cookies, setCookie, removeCookies] = useCookies();


  const navigate = useNavigate();

  const handleSearch = () => {
    navigate(`/search/${searchTerm}`);
  };

  const selectionRange = {
    startDate: startDate,
    endDate: endDate,
    key: "selection",
  }

  function handleSelect(ranges) {
    setStartDate(ranges.selection.startDate);
    setEndDate(ranges.selection.endDate);
  }

  function resetInput() {
    setSearchTerm("")
  }

  function handleClick() {
    let totalDays = (endDate - startDate) / (1000 * 60 * 60 * 24) + 1;
    navigate(`/search/${searchTerm}?days=${totalDays}&guests=${noofGuests}&start=${startDate.toISOString()}&end=${endDate.toISOString()}`);
    resetInput()
  }

  function handleLogIn() {
    setUID(4);
  }

  function handleUser() {
    navigate(`/user/${uId}`)
  }

  function handleHost() {
    navigate(`/host/1`)
  }

  function logout() {
    removeCookies('user_obj', { path: '/' });
    navigate(`/`);
  }

  return (

    <div className='header'>
      <Link href='/'>
        {/* Logo */}
        <img
          className='header__icon'
          src={logo}
          alt="Logo"
        />
      </Link>

      {/* Search Bar */}
      <div className='header__center'>
        <input
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
          placeholder={placeholder || "Start your search"}
        />
        <SearchIcon onClick={handleSearch} />

      </div>

      {/* Login */}
      <div className='header__right'>
        {cookies.user_obj ?
          <Fragment>
            <Avatar sx={{ bgcolor: deepPurple[500], color: common }}>

              <Link href={`/${cookies.user_obj.user_type}/${cookies.user_obj.id}`} underline="none">
                {cookies.user_obj.first_name}
              </Link>

            </Avatar>
            <Button
              variant="outline"
              size="small"
              color="primary"
              onClick={logout}>
              Logout
            </Button>
          </Fragment>
          :
          <Avatar >
            <Link href="/users/signin" underline="none">
              Login
            </Link>
          </Avatar>
        }
      </div>

      {searchTerm && (
      <div className='search'>
        <DateRangePicker
          ranges={[selectionRange]}
          onChange={handleSelect}
        />
      
        <h2>Number of Guests</h2>
        <input
          value={noofGuests}
          type="number"
          onChange={e => setNoofGuests(e.target.value)}
          min={1}
        />
        
        <Button className='search__button' onClick={resetInput}>Cancel</Button>
        <Button className='search__button' onClick={handleClick}>Search SpaceHub</Button>
      
      </div>
    )}
    </div>
  );

};

export default Header;