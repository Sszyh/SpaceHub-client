import React from 'react'
import StarIcon from '@mui/icons-material/StarBorder';

import '../styles/Host.css';
import '../styles/SearchResult.css';
// import '../styles/HostPropCard.css';

export default function HostBookCard(props) {

  // console.log("HostBookCard - props:", props);

  return (

    <div className='searchResult'>

      <img src={props.src} alt="" />

      <div className='searchResult__info'>
        <div className='searchResult__infoTop'>
          <p>{props.province}</p>
          <h2>{props.title}</h2>
          <p><strong>Booked by guest {props.guest_name} from {props.dates}</strong></p>
          <p>Contact {props.first_name}</p>
          <p>____</p>
          <p>{props.desc_long}</p>
        </div>

        <div className='searchResult__infoBottom'>

          <div className='searchResult__stars'>
            <StarIcon className='searchResult__star' />
            <p>
              <strong>{props.rating}</strong>
            </p>
          </div>

          <div className='searchResult__price'>
            
            <p>Price per Day: {props.price_per_day}</p>
            <h3>Total Price for Stay: ${props.total_price}</h3>
          </div>

        </div>
      </div>
    </div>
  )
}