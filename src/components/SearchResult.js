import React, { useState, useEffect } from 'react'
import '../styles/SearchResult.css'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import StarIcon from '@mui/icons-material/StarBorder';
import {useParams} from "react-router-dom" ;

export default function SearchResult() {
  const [search, setSearch] = useState([]);
  const {term} = useParams(); 
  useEffect(() => {
    
    fetch(`http://localhost:8000/search/${term}`)
      .then((res) => res.json())
      .then((result) => {
        console.log(result.searchResult ? result.searchResult[0] : "not working")
        setSearch(result.searchResult)});
    }, [term]);

  return(
    // <>
    //   {/* 'data' */}
    //   <img src={search[0] ? search[0].img_url : ""} alt=""/>
    //   <h3>{search[0] ? search[0].city : ""}</h3>
    // </>

    <div className='searchResult'>
        <img src={search[0]? search[0].img_url : ""} alt=""/>
          <FavoriteBorderIcon className='searchResult__heart'/>
          <div className='searchResult__info'>
            <div className='searchResult__infoTop'>
              <p>{search[0]? search[0].province : ""}</p>
              <h3>{search[0] ? search[0].title : ""}</h3>
              <p>{search[0] ? search[0].city : ""}</p>
              <p>____</p>
            </div>
            <div className='searchResult__infoBottom'>
              <div className='searchResult__stars'>
                <StarIcon className='searchResult__star'/>
                <p>
                  <strong>{search[0] ? search[0].average_rating : ""}</strong>
                </p>
              </div>
              <div className='searchResult__price'>
                <h2>{search[0] ? search[0].price_per_day : ""}</h2>
                {/* <p>{total}</p> */}
              </div>
            </div>
          </div>
    </div>
  )
}
// function SearchResult({
//   img,
//   location,
//   title,
//   description,
//   star,
//   price,
//   total
// }) {
//   return (
//     <div className='searchResult'>
//         <img src={img} alt=""/>
//         <FavoriteBorderIcon className='searchResult__heart'/>

//         <div className='searchResult__info'>
//           <div className='searchResult__infoTop'>
//             <p>{location}</p>
//             <h3>{title}</h3>
//             <p>____</p>
//             <p>{description}</p>
//           </div>

//           <div className='searchResult__infoBottom'>
//             <div className='searchResult__stars'>
//               <StarIcon className='searchResult__star'/>
//               <p>
//                 <strong>{star}</strong>
//               </p>
//             </div>
//             <div className='searchResult__price'>
//               <h2>{price}</h2>
//               <p>{total}</p>
//             </div>
//           </div>
//         </div>
//     </div>
//   )
// }
