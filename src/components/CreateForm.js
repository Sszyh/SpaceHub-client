import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Axios from 'axios';

import '../styles/Host.css';
import '../styles/Form.css';

export default function CreateForm() {
  const url = "http://localhost:8000/host/1"
  const [data, setData] = useState({
    title: "",
    image_url: "",
    country: "",
    street: "",
    city: "",
    price: "",
    desc_short: "",
    user_id: 1
  })

  function submit(e) {
    e.preventDefault();

    // console.log("data:", data);

    Axios.post(url, data)
      .then(res => {
        // console.log("res.data:", res.data)
      })
  }

  function handle(e) {
    const newdata = { ...data }
    newdata[e.target.id] = e.target.value
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
      <div>
        <form
          className='create__form'
          onSubmit={(e) => submit(e)}
        >
          <input
            required
            type="text"
            id="title"
            label="Title"
            placeholder='Title'
            onChange={handle}
            value={data.title}
          />

          <input
            required
            type="text"
            id="image_url"
            label="Image"
            placeholder='Image URL'
            onChange={(e) => { handle(e) }}
            value={data.image_url}
          />

          <input
            type="text"
            id="street"
            label="Address"
            placeholder='Address'
            onChange={(e) => { handle(e) }}
            value={data.street}
          />

          <input
            type="text"
            id="city"
            label="City"
            placeholder='City'
            onChange={(e) => { handle(e) }}
            value={data.city}
          />

          <input
            type="text"
            id="province"
            label="Province"
            placeholder='Province'
            onChange={(e) => { handle(e) }}
            value={data.province}
          />

          <input
            type="text"
            id="country"
            label="Country"
            placeholder='Country'
            onChange={(e) => { handle(e) }}
            value={data.country}
          />

          <input
            type="text"
            id="price"
            label="Price/day"
            placeholder='Price/Day'
            onChange={(e) => { handle(e) }}
            value={data.price}
          />

          <input
            type="text"
            id="desc_short"
            label="Description"
            placeholder='Description'
            onChange={(e) => { handle(e) }}
            value={data.desc_short}
          />

          <Button
            type="submit"
            className='create__button'
          >Create</Button>
          
        </form>
      </div>

    </div>
  );
}