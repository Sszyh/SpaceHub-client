import React, { useState } from 'react'
import '../styles/Search.css'
import { Button } from '@mui/material'
import { DateRangePicker } from 'react-date-range'
import { useNavigate } from 'react-router-dom'
import 'react-date-range/dist/styles.css' // main style file
import 'react-date-range/dist/theme/default.css' // theme css file

function Search() {

  const navigate = useNavigate();
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  const selectionRange = {
    startDate: startDate,
    endDate: endDate,
    key: "selection"
  }

  function handleSelect(ranges) {
    setStartDate(ranges.selection.startDate);
    setEndDate(ranges.selection.endDate);
  }

  return (
    <div className='search'>
      <DateRangePicker
        ranges={[selectionRange]}
        onChange={handleSelect}
      />
      <Button
        onClick={() => navigate('/search')}
      >Search SpaceHub</Button>
    </div>
  )
}

export default Search