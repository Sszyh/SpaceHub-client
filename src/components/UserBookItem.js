import React from 'react'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import StarIcon from '@mui/icons-material/StarBorder';
import Axios from 'axios';
import { useState } from "react";
import '../styles/SearchResult.css';


export default function UserBookItem(props){
    const [data,setData]=useState({
        rating:props.rating,
        booking_id:props.booking_id
    });
    const [showForm,setShowForm]=useState(false);

    const handleEditForm=()=>{
        setShowForm(!showForm);
      }
      
    const handleSubmit = (e)=>{
        e.preventDefault();
        console.log(data)
        Axios.all([
            Axios.put('http://localhost:8000/bookings',data),
            Axios.put('http://localhost:8000/bookings/avg')
        ])
        .then(Axios.spread((res)=>{
            setData(res.data)
            console.log('res',res.data)
        }));
    }

    function handle(e){
        const newdata = {...data}
        newdata[e.target.id]=e.target.value
        setData(newdata)
        console.log(data)
      }
      return(
        <div
            className='searchResult'
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
                         <strong>{data.rating}</strong>
                        </p>
                    </div>
                    <div className='searchResult__price'>
                        <h2>{props.price_per_day}</h2>
                        <p>${props.total_price}</p>
                    </div>
                    <button onClick={handleEditForm}>Add Rating</button>
                    {
                        showForm && (
                            <form onSubmit={(e)=>handleSubmit(e)}>
                            <input type="text" id="rating" placeholder="5.0" value={data.rating} onChange={handle}/>
                            <button type="submit">Submit</button>
                            </form>
                            )
                    }
                </div>
            </div>
        </div>

    )
}