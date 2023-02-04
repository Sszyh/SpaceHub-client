import React from 'react';
import BookingForm from './BookingForm';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import StarIcon from '@mui/icons-material/StarBorder';
import '../styles/Property.css';

function Property() {

  const property = {
    "id": 9,
    "user_id": 1,
    "title": "Regrant",
    "image_url": "https://plus.unsplash.com/premium_photo-1672287579498-08cd90130b0f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
    "street": "815 Tennyson Crossing",
    "city": "ThetfordMines",
    "province": "New Brunswick",
    "price_per_day": "$50.00",
    "average_rating": "2.0",
  };

  return (
    <div className='property'>
      <img src={property.image_url} alt="" />

      <div className='property__info'>
        <div className='property__infoCard'>
          <h3>{property.title}</h3>
          <p>{property.street}</p>
          <p>{property.city}, {property.province}</p>
          <br></br>
          {/* <div className='property__price'> */}
          <div>
            <h5>{property.price_per_day} /day</h5>
          </div>
      <div className='property_icons'>
      <FavoriteBorderIcon className='property__stars' />
          <div className='property__stars'>
            <StarIcon className='property__star' />
            <p>
              <strong>{property.average_rating}</strong>
            </p>
          </div>
      </div>
        </div>
        <div className='property__infoBottom'>
          <div className='property__form'>
            <BookingForm />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Property;
