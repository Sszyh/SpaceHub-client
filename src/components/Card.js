import React from 'react'
import '../styles/Card.css'
import CardItem from './CardItem'
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

function Card(props) {
  const cards = props.properties.map((card) => {
    return (
      <CardItem
        key={card.id}
        src={card.image_url}
        title={card.title}
        price={card.price_per_day}
        />
      
    );
  });
  return(
    <Box sx={{ flexGrow: 1}}>
      <Grid container spacing={4} >
        <Grid item xs={6} sm={6} md={4}>
          <ul>
            {cards}
          </ul>
        </Grid>
      </Grid>
    </Box>
  )
}

export default Card