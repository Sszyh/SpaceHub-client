import React, { useState, useEffect, moment } from "react";
import '../styles/BookingForm.css';
import { useCookies } from 'react-cookie';
import axios from 'axios';
import Popup from 'reactjs-popup';
import Alert from '@mui/material/Alert';

const BookingForm = (props) => {
  const cookies = useCookies();
  const [guestCount, setGuestCount] = useState(1);
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [currentProperty, setCurrentProperty] = useState("");
  const [showPopup, setShowPopup] = useState(false);

  // Caculate days
  const date1 = new Date(startDate);
  const date2 = new Date(endDate);
  const Difference_In_Time = date2.getTime() - date1.getTime();
  const Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);

  const propertyId = parseInt(props.propertyId);
  const user_id = cookies[0].user_obj.id;
  const pricePerDay = currentProperty.price_per_day;


  useEffect(() => {
    fetch(`http://localhost:8000/properties/${propertyId}`)
      .then((res) => res.json())
      .then((data) => {
        setCurrentProperty(data.property[0])
      })
      .catch(err => {
        throw (err)
      })
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(
      `Booking for ${guestCount} guests from ${startDate} to ${endDate}`
    );

    const cleanPrice = parseFloat(pricePerDay.replace("$", ""));
    const priceForStay = cleanPrice * Difference_In_Days;

    console.log(user_id, "user_id");
    console.log(propertyId, "property_id");
    console.log(startDate, "start_day");
    console.log(endDate, "enddate");
    console.log(cleanPrice, "clean price per day");
    console.log(Difference_In_Days, "staying days");
    console.log(priceForStay, "forstay");

    axios.post("http://localhost:8000/bookings/", {

      user_id: user_id,
      property_id: propertyId,
      check_in_date: startDate,
      check_out_date: endDate,
      price_per_day: cleanPrice,
      price_for_stay: priceForStay

    }).then((res) => {
      if (res.data) {
        console.log("seccuss");
        setShowPopup(true);
      }
      console.log(res, "ressss")
    }).catch((err) => {
      console.log(err, "Err")
    })
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="guest-count">Guest Count:</label>
        <input
          type="number"
          id="guest-count"
          value={guestCount}
          onChange={(event) => setGuestCount(parseInt(event.target.value, 10))}
        />
      </div>

      <div>
        <label htmlFor="start-date">Start Date:</label>
        <input
          type="date"
          id="start-date"
          value={startDate}
          onChange={(event) => setStartDate(event.target.value)}
        />
      </div>
      <div>
        <label htmlFor="end-date">End Date:</label>
        <input
          type="date"
          id="end-date"
          value={endDate}
          onChange={(event) => setEndDate(event.target.value)}
        />
      </div>


      {/* <DateRangePicker
        onChange={({ startDate, endDate }) => setDates({ startDate, endDate })}
        startDate={dates.startDate}
        endDate={dates.endDate}
        minDate={new Date()}
      /> */}

      <button type="submit">Book Now!</button>
      { showPopup && 
      <Alert severity="success">Your order has been placed successfully!</Alert>
      }
    </form>
  );
};

export default BookingForm;
