import React from 'react';
import '../styles/Header.css';
import '../styles/Search.css'
import { Button } from '@mui/material'
import { DateRangePicker } from 'react-date-range'
import 'react-date-range/dist/styles.css' // main style file
import 'react-date-range/dist/theme/default.css' // theme css file

import { Avatar } from '@mui/material/';
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import SearchIcon from '@mui/icons-material/Search';
import { useCookies } from "react-cookie";

function Header({ placeholder }) {

  const [searchTerm, setSearchTerm] = useState("");
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [noofGuests, setNoofGuests] = useState(1);
  const [uId,setUID] = useState("");
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

  function handleLogIn(){
    setUID(4);
  }

  function handleUser(){
    navigate(`/user/${uId}`)
  }

  function handleHost(){
    navigate(`/host/1`)
  function logout() {
    removeCookies('user_obj', { path: '/' });
  }

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
        <input
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
          placeholder={placeholder || "Start your search"}
        />
        <SearchIcon onClick={handleSearch} />
      </div>

      <div className='header__right'>
        {cookies.user_obj ?
          <p>Login as {cookies.user_obj.first_name}
            <Button
              variant='contained'
              size="small"
              color="secondary"
              onClick={logout}>
              logout
            </Button>
          </p> :
          <Avatar >
            <Link to={`/users/signin`} >
              L
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
          <div>
            <h2>Number of Guests</h2>
            <input
              value={noofGuests}
              type="number"
              onChange={e => setNoofGuests(e.target.value)}
              min={1}
            />
          </div>
          <div className='flex'>
            <Button onClick={resetInput}>Cancel</Button>
            <Button onClick={handleClick}>Search SpaceHub</Button>
          </div>

        </div>
      )}

    </div>
  );
};
}
export default Header;