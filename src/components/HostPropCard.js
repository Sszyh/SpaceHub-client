import React, { useState } from 'react';
import EditForm from './EditForm'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
// import Axios from 'axios';

import '../styles/Host.css';
import '../styles/Form.css';

export default function HostPropCard(props) {

  const [showForm, setShowForm] = useState(false);

  const handleEditForm = () => {
    setShowForm(!showForm);
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
        description={props.desc_short}
      />

      <CardContent className='card__info'>
        <Typography gutterBottom variant='h5' component='div'>
          {props.title}
        </Typography>
        <Typography variant='body2' color='GrayText.secondary'>
          {props.description}
        </Typography>
        <Typography variant='body2' color='GrayText.secondary'>
          <strong>{props.price}</strong> / day
        </Typography>
      </CardContent>

      <CardActions>

        <div className='edit__form'>
          <Button
            className='edit__button'
            onClick={handleEditForm}>Edit</Button>

          {showForm && (
            <EditForm
              property_id={props.property_id}
              title={props.title}
              desc_short={props.description}
              price={props.price}
            />
          )}
        </div>

      </CardActions>

    </Card>
  );
}
