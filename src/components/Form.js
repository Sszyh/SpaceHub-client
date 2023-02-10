import React, { useState } from 'react';
// import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Axios from 'axios';

import '../styles/Host.css';

export default function Form() {
  const url = "http://localhost:8000/host/1"
  const [data, setData]=useState({
    title:"",
    image_url:"",
    country:"",
    street:"",
    city:"",
    price:"",
    desc_short:"",
    user_id:1
  })

  function submit(e){
    e.preventDefault();
    // const payload = {
    //   title: data.title,
    //   image_url: data.image_url,
    //   country:data.country,
    //   street:data.street,
    //   city:data.city,
    //   price:data.price,
    //   desc:data.desc
    // }
    console.log("====================", data);

    Axios.post(url, data)
    .then(res=>{
      console.log('-----------------data---------',res.data)
    })
  }

  function handle(e){
    const newdata = {...data}
    newdata[e.target.id]=e.target.value
    setData(newdata)
    console.log(data)
  }

  return (
    <div
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
      
    >
      <div className='create__form'>
        <form onSubmit={(e)=>submit(e)}>

        <TextField
          required
          id="title"
          label="Title"
          placeholder='Title'
          onChange={handle}
          value={data.title}
        />

        <TextField
          required
          id="image_url"
          label="Image"
          placeholder='image_url'
          onChange={(e)=>{handle(e)}}
          value={data.image_url}
        />

        <TextField
          id="street"
          label="Address"   
          onChange={(e)=>{handle(e)}}
          value={data.street}       
        />

        <TextField
          id="city"
          label="City"    
          onChange={(e)=>{handle(e)}}
          value={data.city}      
        />

        <TextField
          id="province"
          label="Province"    
          onChange={(e)=>{handle(e)}}
          value={data.province}      
        />

        <TextField
          id="country"
          label="Country"     
          onChange={(e)=>{handle(e)}}
          value={data.country}     
        />

        <TextField
          id="price"
          label="Price/day" 
          onChange={(e)=>{handle(e)}}
          value={data.price}         
        />

        <TextField
          id="desc_short"
          label="Description"  
          onChange={(e)=>{handle(e)}}
          value={data.desc_short}        
        />
          {/* <button>Submit</button> */}
        </form>
      </div>
      
    </div>
  );
}