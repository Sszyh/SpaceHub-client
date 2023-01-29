import React from 'react'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import StarIcon from '@mui/icons-material/StarBorder';

export default function SearchItem(props){

    return(

        <div className='searchResult'>
            <img src={props.src} alt=""/>
            <FavoriteBorderIcon className='searchResult__heart'/>
            <div className='searchResult__info'>
                <div className='searchResult__infoTop'>
                    <p>{props.province}</p>
                    <h3>{props.title}</h3>
                    <p>{props.city}</p>
                    <p>____</p>
                </div>
                <div className='searchResult__infoBottom'>
                    <div className='searchResult__stars'>
                      <StarIcon className='searchResult__star'/>
                        <p>
                         <strong>{props.rating}</strong>
                        </p>
                    </div>
                    <div className='searchResult__price'>
                        <h2>{props.price_per_day}</h2>
                    </div>
                </div>
            </div>
        </div>

    )
}