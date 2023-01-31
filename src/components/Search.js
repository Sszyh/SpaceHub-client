import React, { useState } from 'react'
import '../styles/Search.css'
import { Button } from '@mui/material'
import { DateRangePicker } from 'react-date-range'
import 'react-date-range/dist/styles.css' // main style file
import 'react-date-range/dist/theme/default.css' // theme css file
import { useNavigate } from "react-router-dom";
//removed to Header.js
function Search() {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  const selectionRange = {
    startDate: startDate,
    endDate: endDate,
    key: "selection",
  }
  const navigate = useNavigate();

  function handleSelect(ranges) {
    setStartDate(ranges.selection.startDate);
    setEndDate(ranges.selection.endDate);
  }

  function handleClick() {
    const totalDays = (endDate - startDate) / (1000 * 60 * 60 * 24) + 1;
    navigate(`/search?days=${totalDays}`);
  }


  return (
    <div className='search'>
        <DateRangePicker
        ranges={[selectionRange]}
        onChange={handleSelect}
      />

      <Button onClick={handleClick}>Search SpaceHub</Button>

    </div>
  )
}

export default Search