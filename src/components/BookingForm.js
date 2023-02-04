import React, { useState } from "react";
import '../styles/BookingForm.css';
// import { DateRangePicker } from "react-date-range";
// import "react-date-range/dist/styles.css";
// import "react-date-range/dist/theme/default.css";

const BookingForm = () => {

  const [guestCount, setGuestCount] = useState(1);
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  // const [guestCount, setGuestCount] = useState(1);
  // const [dates, setDates] = useState({
  //   startDate: new Date(),
  //   endDate: new Date(),
  // });

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(
      `Booking for ${guestCount} guests from ${startDate} to ${endDate}`
    );
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
    </form>
  );
};

export default BookingForm;
