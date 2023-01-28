import React from 'react'
import '../styles/Card.css'
import TestCard from './TestCard'

// function Card({ src, title, description, price }) {
//   return (
//     <div className='card'>
//       <img src={src} alt="" />
//       <div className='card__info'>
//         <h2>{title}</h2>
//         <h4>{description}</h4>
//         <h3>{price}</h3>
//       </div>
//     </div>
//   )
// }

// export default Card



function Card(props) {
  const cards = props.properties.map((card) => {
    return (
      <TestCard
        key={card.id}
        src={card.image_url}
        title={card.title}
        price={card.price_per_day}
        />
    );
  });
  return(
    <ul>
      {cards}
      </ul>
  )
  
  // return (
  //   <div className='card'>
  //     <img src={src} alt="" />
  //     <div className='card__info'>
  //       <h2>{title}</h2>
  //       <h4>{description}</h4>
  //       <h3>{price}</h3>
  //     </div>
  //   </div>
  // )
}

export default Card