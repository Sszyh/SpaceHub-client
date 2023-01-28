import React, { useState, useEffect } from 'react'
import '../styles/Header.css'

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Fragment } from 'react';

export default function TestCard(props) {
  // const [properties, setProperties] = useState([]);

  // useEffect(() => {
    
  //   fetch("http://localhost:8000/properties")

  //     .then((res) => res.json())
  //     .then((data) => {
  //       console.log(data,"dataaa")
  //       setProperties(data.properties)});
  // }, []);

  return (
    <div className='card'>
      <img src={props.src} alt="" />
      <div className='card__info'>
        <h2>{props.title}</h2>
        {/* <h4>{description}</h4> */}
        <h3>{props.price}</h3>
      </div>
    </div>
  );


  // return (
  //   <Fragment>
  //     {properties.length > 0 && 
  //       <Card sx={{ maxWidth: 345 }}>
  //       <CardMedia
  //         sx={{ height: 140 }}
  //         src={properties[0].image_url}
  //         title="green iguana"
  //       />
  //       <CardContent>
  //         <Typography gutterBottom variant="h5" component="div">
  //           {properties[0].title}
  //         </Typography>
  //         <Typography variant="body2" color="text.secondary">
  //           {properties[0].price_per_day} per night
  //         </Typography>
  //       </CardContent>
  //       <CardActions>
  //         <Button size="small">Details</Button>
  //         <Button size="small">Book Now</Button>
  //       </CardActions>
  //       </Card>
  //     }
  //   </Fragment>
  // );
}
