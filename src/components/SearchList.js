import React from 'react'
import SearchItem from './SearchItem'

export default function SearchList(props){

    const list = props.properties.map((item)=>{
        return(
            <SearchItem 
                src={item.image_url}
                city={item.city}
                province={item.province}
                title={item.title}
                rating={item.average_rating}
                price_per_day={item.price_per_day}
                desc_long={item.desc_long}
                
            />
        )
    })
    console.log('list is ', list)

    return(
        <>
            {list}
        </>
    )
}