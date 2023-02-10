import React, { useState, useEffect, moment } from "react";
import { useNavigate } from 'react-router-dom';
import '../styles/BookingForm.css';
import { Button } from '@mui/material'
import PeopleIcon from '@mui/icons-material/People';
import { useCookies } from 'react-cookie';
import axios from 'axios';
import Popup from 'reactjs-popup';
import Alert from '@mui/material/Alert';

import { DateRangePicker } from 'react-date-range';
import { addDays } from 'date-fns';//for date render

import 'react-date-range/dist/styles.css' // main style file
import 'react-date-range/dist/theme/default.css' // theme css file

const BookingForm = (props) => {

  const cookies = useCookies();

  const [guestCount, setGuestCount] = useState(1);
  const [noofGuests, setNoofGuests] = useState(1);

  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  const [currentProperty, setCurrentProperty] = useState("");

  const [showPopup, setShowPopup] = useState(false);
  // const [bookedDate, setBookedDate] = useState([]);
  const selectionRange = {
    startDate: startDate,
    endDate: endDate,
    key: "selection",
  }

  const navigate = useNavigate();
  console.log(props.bookedDate,"bookeddate props")
  function handleSelect(ranges) {
    setStartDate(ranges.selection.startDate);
    setEndDate(ranges.selection.endDate);
  }

  function handleClick() {
    const totalDays = (endDate - startDate) / (1000 * 60 * 60 * 24) + 1;
    navigate(`/search?days=${totalDays}`);
  }

  //console.log("user_obj:", user_obj);
  // console.log("cookies:", cookies);

  // Caculate days
  const date1 = new Date(startDate);
  const date2 = new Date(endDate);
  const Difference_In_Time = date2.getTime() - date1.getTime();
  const Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);

  const propertyId = parseInt(props.propertyId);
  const user_id = cookies[0].user_obj.id;
  const pricePerDay = currentProperty.price_per_day;

  // check if date already been booked, return booked to component
  const checkDate = (startDate,endDate) => {
    for (let date = startDate; date < endDate; date = addDays((date),1)) {
      setBookedDate(oldArray => [...oldArray,date]);
    }
  }
  // const add = addDays(new Date(),5)
  // console.log("end date",add)
  // console.log("test date function",checkDate(new Date(), add))


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

    <form
      className="booking__form"
      onSubmit={handleSubmit}>

      {/* <div>
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
      </div> */}


      {/* Select Date */}

      <DateRangePicker
        // onChange={({ startDate, endDate }) => setDates({ startDate, endDate })}
        ranges={[selectionRange]}
        onChange={handleSelect}
        startDate={startDate}
        endDate={endDate}
        minDate={addDays(new Date(),-1)}
        disabledDates={props.bookedDate}
      />

      <h2>
        Number of Guests <PeopleIcon />
      </h2>
      <input
        min={1}
        value={noofGuests}
        onChange={e => setNoofGuests(e.target.value)}
        type="number"
      />

      <Button type="submit">Book Now!</Button>

      { showPopup && 
      <Alert severity="success">Your order has been placed successfully!</Alert>
      }

    </form>
  );
};

export default BookingForm;
