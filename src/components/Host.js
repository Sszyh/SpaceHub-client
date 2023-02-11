import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import HostBookingHistory from './HostBookingHistory';
import Header from './Header';
import HostPropCard from './HostPropCard';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Form from './Form';

import '../styles/Host.css';

export default function Host() {

  const [host, setHost] = useState([]);
  const params = useParams();

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

        {/* Replace CardItem with HostPropCard */}

        <HostPropCard
          src={card.image_url}
          title={card.title}
          price={card.price_per_day}
          description={card.desc_short}
          id={card.id}
          isHost={isHost}
          property_id={card.property_id}
        />

        {/* <CardItem
          src={card.image_url}
          title={card.title}
          price={card.price_per_day}
          description={card.desc_short}
          id={card.id}
          isHost={isHost}
          property_id={card.property_id}
        /> */}

      </Grid>
    );
  });

  return (

    <div>

    <Header />

      <div className='host'>

        <HostBookingHistory />

        <br/>

        <h2>Your Properties</h2>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={4}>
            {cards}
          </Grid>
        </Box>

        <br />

        <div>
          <h3>Add New Property</h3>
          <br/>
          <Form />
          
        </div>

      </div>
    </div>

  );
}
