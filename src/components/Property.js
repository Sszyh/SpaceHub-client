import React, { useState } from 'react';
import { Grid, Paper, Typography, Button } from '@mui/material';
import { DateRangePicker } from 'react-date-range'
import 'react-date-range/dist/styles.css' // main style file
import 'react-date-range/dist/theme/default.css' // theme css file
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import StarIcon from '@mui/icons-material/StarBorder';
import '../styles/Property.css'


function Property({
  img,
  location,
  title,
  description,
  star,
  price,
  total
}) {

  const property = {
    "id": 9,
    "user_id": 1,
    "title": "Regrant",
    "image_url": "https://plus.unsplash.com/premium_photo-1672287579498-08cd90130b0f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
    "country": "Canada",
    "street": "815 Tennyson Crossing",
    "city": "ThetfordMines",
    "province": "New Brunswick",
    "post_code": "G6G",
    "coord_long": "-73.58248",
    "coord_lat": "45.40008",
    "price_per_day": "$50.00",
    "average_rating": "2.0",
    "category": "Space",
    "wheelchair": true,
    "wifi": true,
    "created_at": "2023-01-19T05:00:00.000Z",
    "updated_at": "2023-01-21T05:00:00.000Z"
  };

  return (
    <div className='property'>
        <img src={property.image_url} alt=""/>
        <FavoriteBorderIcon className='property__heart'/>

        <div className='property__info'>
          <div className='property__infoTop'>
          <h3>{property.title}</h3>
            <p>{property.street}</p>
            <p>{property.city}</p>
            <p>{property.province}</p>
            <p>____</p>
            {/* <p>{description}</p> */}
            <p>Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica</p>
          </div>

          <div className='property__infoBottom'>
            <div className='property__stars'>
              <StarIcon className='property__star'/>
              <p>
                <strong>{star}</strong>
              </p>
            </div>
            <div className='property__price'>
              <h2>{property.price}</h2>
            </div>
            <div>
              {/* <DateRangePicker /> */}
            </div>
            <div>
              <Button>
                Book Now!
              </Button>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Property