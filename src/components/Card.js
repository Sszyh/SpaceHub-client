import React from 'react'
import '../styles/Card.css'
import CardItem from './CardItem'
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

function Card(props) {

  const cards = props.properties.map((card) => {
    return (
      <Grid item xs={12} sm={6} md={4} key={card.id}>
        <CardItem
          src={card.image_url}
          title={card.title}
          price={card.price_per_day}
          description={card.desc_long}
          id={card.id}
        />
      </Grid>
    );
  });

  return (
    <Box sx={{ flexGrow: 1}}>
      <Grid container spacing={4}>
        {cards}
      </Grid>
    </Box>
  );
}

export default Card