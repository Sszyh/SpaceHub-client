import React from 'react'
import '../styles/Header.css'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
function CardItem(props) {
  
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
      </CardContent>
      <CardActions>
        <Link to={`./${props.id}`} className="btn btn-primary">Book Now</Link>
      </CardActions>
    </Card>
  );
}

export default CardItem