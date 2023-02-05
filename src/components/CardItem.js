import React from 'react'
import '../styles/Header.css'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import { useState } from "react";
import Axios from 'axios';

function CardItem(props) {
  // console.log(props.ifHost)
  const [showForm,setShowForm]=useState(false);
  const [data, setData]=useState({
    title:"",
    price:"",
    desc_short:"",
    proprety_id:props.property_id
  })
  const handleEditForm=()=>{
    setShowForm(!showForm);
  }

  function handleSubmit(e){
    e.preventDefault();
    
    Axios.put('http://localhost:8000/properties',data)
    .then(
      res=>{
        console.log('-----------------data---------',res.data.property)
        console.log('+++++++++++data+++++++++++++++',data)
        setData(res.data.property)
      }
    )
  }

  function handle(e){
    const newdata = {...data}
    newdata[e.target.id]=e.target.value
    setData(newdata)
    console.log(data)
  }

  return (
    <Card
      className='card'
      sx={{ maxWidth: 360 }}    
    >
      <CardMedia
        className='card__media'
        sx={{ height: 200 }}
        image={props.src}
        title={props.title}
        // description={props.description}
      />
      <CardContent className='card__info'>
        <Typography gutterBottom variant='h5' component='div'>
          {props.title}
        </Typography>
        <Typography variant='body2' color='GrayText.secondary'>
          {props.description}
        </Typography>
        <Typography variant='body2' color='GrayText.secondary'>
          {props.price}
        </Typography>
        {/* <Typography variant='body2' color='GrayText.secondary'>
          id {props.property_id}
        </Typography> */}
      </CardContent>
      
      <CardActions>
      {props.ifHost===0?
        (
          <>
            <button onClick={handleEditForm}>Edit</button>
            {
              showForm && (
              <form onSubmit={(e)=>handleSubmit(e)}>
                <input type="text" id="title" placeholder="Title" value={data.title} onChange={handle}/>
                <input type="text" id="desc_short" placeholder="Description" value={data.desc_short} onChange={(e)=>{handle(e)}}/>
                <input type="text" id="price" placeholder="price" value={data.price} onChange={(e)=>{handle(e)}}/>
                <button type="submit">Submit</button>
              </form>
              )
            }
          </>
        ):
        (<Link to={`../properties/${props.id}`} >
        Book Now
        </Link >)}
      </CardActions>
    </Card>
  );
}

export default CardItem