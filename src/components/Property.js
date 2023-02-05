import React , { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Header from './Header';
import BookingForm from './BookingForm';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import StarIcon from '@mui/icons-material/StarBorder';
import '../styles/Property.css';

function Property() {

  // const property = {
  //   "id": 9,
  //   "user_id": 1,
  //   "title": "Brushstroke Studio",
  //   "image_url": "https://plus.unsplash.com/premium_photo-1672287579498-08cd90130b0f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
  //   "country": "Canada",
  //   "street": "815 Tennyson Crossing",
  //   "city": "ThetfordMines",
  //   "province": "New Brunswick",
  //   "post_code": "G6G",
  //   "coord_long": "-73.58248",
  //   "coord_lat": "45.40008",
  //   "price_per_day": "$50.00",
  //   "average_rating": "2.0",
  //   "category": "Space",
  //   "wheelchair": true,
  //   "wifi": true,
  //   "desc_short": "Express yourself creatively",
  //   "desc_long": "An inspiring space to bring your creative ideas to life.",
  //   "created_at": "2023-01-19T05:00:00.000Z",
  //   "updated_at": "2023-01-21T05:00:00.000Z"
  // };

  const[property, setProperty] = useState([]);
  const params = useParams();

  useEffect(()=>{
    fetch(`http://localhost:8000/properties/${params.id}`)
    .then((res)=>res.json())
    .then((result)=>{
        setProperty(result.property);
    })
  },[params.id]);

  return (
    <div className='property'>

      <Header />

      <div className='property__info'>
      <img src={property.image_url} alt="" />
        <h3>{property.title}</h3>
        <p>{property.street}</p>
        <p>{property.city}, {property.province}</p>
        <br></br>
        <div>
          <h5>{property.price_per_day} /day</h5>
        </div>
        <p>{property.desc_long}</p>
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

      <div className='property__form'>
        <BookingForm />
      </div>

    </div>
  )
}

export default Property;
