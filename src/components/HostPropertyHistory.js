import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Header from './Header';
import SearchItem from './SearchItem';
import {format} from "date-fns";

export default function HostPropertyHistory() {
    const [host, setHost] = useState([]);
    const params = useParams();
    useEffect(() => {
        fetch(`http://localhost:8000/user/host/${params.id}`)
        .then((res) => res.json())
        .then((result) => {
            setHost(result.host);
        });
    }, [params.id]);
    console.log(host,"booking detail for host")
    const bookingList = host.map((item, index)=>{
        const total=item.price_for_stay;
        const formattedStartDate = format(new Date(item.check_in_date),"dd MMMM yyyy");
        const formattedEndDate = format(new Date(item.check_out_date),"dd MMMM yyyy");
        const dateDisplay = formattedStartDate + " ->" + formattedEndDate
        const rating = item.rating+" <- "+item.first_name + " " + item.last_name
    
        // prepare booking detail for host
        const check_in_date = item.check_in_date;
        const check_out_date = item.check_out_date;
        const first_name = item.first_name;
        const last_name = item.last_name;
        const phone_number = item.phone_number;
        const price_per_day = item.price_per_day;
        const price_for_stay = item.price_for_stay;
        

        return(
            <SearchItem
                total_price={total.slice(1)}
                price_per_day={item.price_per_day}
                src={item.image_url}
                title={item.title}
                rating={rating}
                desc_long={item.desc_long}
                city={dateDisplay}
                key={index}
            />

        )
    })
    return (
        <>
            <Header />
            
            <div>
                {host[0] && <h2>Booking history for my properties</h2>}
                {bookingList}
            </div>
        </>
    );
}
