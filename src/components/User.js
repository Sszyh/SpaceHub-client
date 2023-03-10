import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Header from './Header';
import UserBookItem from './UserBookItem';
import { format } from "date-fns";

import '../styles/User.css';

export default function User() {

  const [user, setUser] = useState([]);
  const params = useParams();

  useEffect(() => {
    fetch(`http://localhost:8000/user/${params.id}`)
      .then((res) => res.json())
      .then((result) => {
        setUser(result.user);
      });
  }, [params.id]);
  console.log(user)


  const bookingList = user.map((item, index) => {
    const total = item.price_for_stay;
    const formattedStartDate = format(new Date(item.check_in_date), "dd MMMM yyyy");
    const formattedEndDate = format(new Date(item.check_out_date), "dd MMMM yyyy");
    const dateDisplay = formattedStartDate + " - " + formattedEndDate

    console.log("User - item:", item);

    return (

      <UserBookItem
        total_price={total.slice(1)}
        price_per_day={item.price_per_day}
        src={item.image_url}
        title={item.title}
        desc_long={item.desc_long}
        city={dateDisplay}
        rating={item.rating}
        review_message={item.review_message}
        booking_id={item.id}
        key={index}
      />

    )
  })
  return (
    <>
      <Header />

      <div className='user'>
        {user[0] && <h2>My booking history</h2>}
        {bookingList}
      </div>
    </>
  );
}
