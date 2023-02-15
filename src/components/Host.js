import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import HostBookingHistory from './HostBookingHistory';
import Header from './Header';
import HostPropCard from './HostPropCard';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import CreateForm from './CreateForm';

import '../styles/Host.css';

export default function Host() {

  const [host, setHost] = useState([]);
  const params = useParams();

  const [showForm, setShowForm] = useState(false);
  const [showBookingHistory, setShowBookingHistory] = useState(false);

  const handleCreateForm = () => {
    setShowForm(!showForm);
  }

  const handleBookingHistory = () => {
    setShowBookingHistory(!showBookingHistory);
  }

  useEffect(() => {
    fetch(`http://localhost:8000/host/${params.id}`)
      .then((res) => res.json())
      .then((result) => {
        setHost(result.user);
      })
  }, [params.id]);

  // console.log("host:", host)

  const cards = host.map((card, index) => {
    let isHost = 0;
    if (card.userType === "host") {
      isHost = 1
    }

    // console.log("Host - card:", card);

    return (

      <Grid item xs={12} sm={6} md={4} key={index}>

        <HostPropCard
          src={card.image_url}
          title={card.title}
          price={card.price_per_day}
          description={card.desc_short}
          id={card.id}
          isHost={isHost}
          property_id={card.property_id}
        />

      </Grid>
    );
  });

  return (

    <div>

    <Header />

      <div className='host'>

        <h2>Your Active Properties</h2>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={4}>
            {cards}
          </Grid>
        </Box>

        <br />

        <div className='create'>
          <Button
            className='create__button'
            onClick={handleCreateForm}
          >Add New Property</Button>
          <br/>
          {showForm && (
            <CreateForm />
          )}
        </div>

        <div className='booking__history'>
          <Button
            className='booking__history__button'
            onClick={handleBookingHistory}
          >Show Booking History</Button>
          <br/>
          {showBookingHistory && (
            <HostBookingHistory />
          )}

        </div>
      </div>
    </div>
  );
}
