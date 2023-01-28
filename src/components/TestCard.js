import React, { useState, useEffect } from 'react'
import '../styles/Header.css'

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Fragment } from 'react';

export default function TestCard() {
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    
    fetch("http://localhost:8000/properties")

      .then((res) => res.json())
      .then((data) => {
        console.log(data,"dataaa")
        setProperties(data.properties)});
  }, []);

  return (
    <Fragment>
      {properties.length > 0 && 
        <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          sx={{ height: 140 }}
          src={"https://images.unsplash.com/photo-1534511902651-6ab0ce131f2a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1031&q=80"}
          title="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {properties[0].title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {properties[0].price_per_day} per night
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Details</Button>
          <Button size="small">Book Now</Button>
        </CardActions>
        </Card>
      }
    </Fragment>
  );
}
