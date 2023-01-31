import React from 'react'
import '../styles/Banner.css'
import { Button } from '@mui/material'

function Banner() {


  return (
    <div className='banner'>
      <div className='banner__info'>
        <h1>Find your space</h1>
        <h5>Connecting you with the perfect space for your creativity.</h5>
        <Button
          variant='outlined'
        >Explore Nearby</Button>
      </div>

    </div>
  )
}

export default Banner