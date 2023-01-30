import React from 'react'
import SearchItem from './SearchItem'
import { useLocation } from "react-router-dom";


export default function SearchList(props){
    const location = useLocation();
    const params = new URLSearchParams(location.search);
    
    const totalDays = params.get("days");

    const list = props.properties.map((item)=>{
        const price_per_day = item.price_per_day;
        const cleanPrice = parseFloat(price_per_day.replace("$", ""));
        const total_price = cleanPrice * totalDays;
        console.log(Number(cleanPrice));
        return(
            <SearchItem 
                src={item.image_url}
                city={item.city}
                province={item.province}
                title={item.title}
                rating={item.average_rating}
                price_per_day={item.price_per_day}
                desc_long={item.desc_long}
                total_price= {total_price}
                
            />
        )
    })

    return(
        <>
            {list}
        </>
    )
}