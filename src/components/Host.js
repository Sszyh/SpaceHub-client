import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Header from './Header';
import SearchItem from './SearchItem';
import {format} from "date-fns";
import HostPropertyHistory from './HostPropertyHistory';
import CardItem from './CardItem'
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Form from './Form';

export default function Host() {
    const[host,setHost] = useState([]);
    const params = useParams();
    useEffect(()=>{
        fetch(`http://localhost:8000/host/${params.id}`)
        .then((res)=>res.json())
        .then((result)=>{
            setHost(result.user);
        })
    },[params.id]);

    console.log('all properties for host',host)
    const cards = host.map((card,index) => {
        let ifHost=0;
        if(card.userType==="host"){
            ifHost=1
        }
        return (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <CardItem
              src={card.image_url}
              title={card.title}
              price={card.price_per_day}
              description={card.desc_short}
              id={card.id}
              ifHost={ifHost}
              property_id={card.property_id}
            />
          </Grid>
        );
      });

    return (
      <>
        <HostPropertyHistory />
        <>
            <h2>My own properties</h2>
            <Button>Add a new property</Button>
            <Form/>
        </>
        
        <Box sx={{ flexGrow: 1}}>
            <Grid container spacing={4}>
            {cards}
            </Grid>
        </Box>
      </>
    );
}
