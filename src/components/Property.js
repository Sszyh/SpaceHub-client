import React, { useState, useEffect } from 'react';
import BookingForm from './BookingForm';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import StarIcon from '@mui/icons-material/StarBorder';
import '../styles/Property.css';
import { useParams } from 'react-router-dom';

function Property() {

  const [property, setProperty] = useState([]);
  const { id } = useParams();


  useEffect(() => {
    fetch(`http://localhost:8000/properties/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setProperty(data.property)
      })
      .catch(err => {
        throw (err)
      })
  }, []);

  return (
    <div className='property'>
      <img src={property[0]?.image_url} alt="" />

      <div className='property__info'>
        <div className='property__infoCard'>
          <h3>{property[0]?.title}</h3>
          <p>{property[0]?.street}</p>
          <p>{property[0]?.city}, {property[0]?.province}</p>
          <br></br>
          {/* <div className='property__price'> */}
          <div>
            <h5>{property[0]?.price_per_day} /day</h5>
          </div>
          <div className='property_icons'>
            <FavoriteBorderIcon className='property__stars' />
            <div className='property__stars'>
              <StarIcon className='property__star' />
              <p>
                <strong>{property[0]?.average_rating}</strong>
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
