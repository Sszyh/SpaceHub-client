import React from 'react'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import StarIcon from '@mui/icons-material/StarBorder';
import '../styles/SearchResult.css';
import { useNavigate } from "react-router-dom";

export default function SearchItem(props) {

    const navigate = useNavigate();

    return (

        <div
            className='searchResult'
            onClick={() => { navigate(`/properties/${props.id}`) }}
        >
            <img src={props.src} alt="" />
            <FavoriteBorderIcon className='searchResult__heart' />
            <div className='searchResult__info'>
                <div className='searchResult__infoTop'>
                    <p>{props.province}</p>
                    <h3>{props.title}</h3>
                    <p>{props.city}</p>
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
                        <h2>{props.price_per_day}</h2>
                        <p>${props.total_price}</p>
                    </div>
                </div>
            </div>
        </div>

    )
}