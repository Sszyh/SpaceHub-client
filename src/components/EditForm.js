import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Axios from 'axios';

import '../styles/Form.css';

export default function EditForm(props) {

  const [data, setData] = useState({
    title: props.title,
    price: props.price,
    desc_short: props.desc_short,
    property_id: props.property_id
  })

  function handleSubmit(e) {
    e.preventDefault();

    Axios.put('http://localhost:8000/properties', data)
      .then(
        res => {
          console.log('res.data.property:', res.data.property)
          console.log('data:', data)
          setData(res.data.property)
        }
      )
  }

  function handle(e) {
    const newdata = { ...data }
    newdata[e.target.id] = e.target.value
    setData(newdata)
    console.log(data)
  }

  return (
    <div>
      <form
        className='edit__form'
        onSubmit={(e) => handleSubmit(e)}>
        <input type="text" id="title" placeholder="Title" value={data.title} onChange={handle} />
        <input type="text" id="desc_short" placeholder="Description" value={data.desc_short} onChange={(e) => { handle(e) }} />
        <input type="text" id="price" placeholder="Price" value={data.price} onChange={(e) => { handle(e) }} />
        <Button
          type="submit"
          className='edit__button'
        >Submit</Button>
      </form>
    </div>
  )
}