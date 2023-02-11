import React, { useState, useEffect } from 'react'
import '../styles/SearchResult.css'
// import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
// import StarIcon from '@mui/icons-material/StarBorder';
import { useParams } from "react-router-dom";
import { Button } from '@mui/material';
import SearchList from './SearchList';
import { useLocation } from "react-router-dom";
import { format } from "date-fns";
import Header from './Header';
import Map from './Map'

export default function SearchResult() {
  const [search, setSearch] = useState([]);
  const { term } = useParams();

  useEffect(() => {

    fetch(`http://localhost:8000/search/${term}`)
      .then((res) => res.json())
      .then((result) => {
        console.log('the first search result is', result.searchResult ? result.searchResult[0] : "not working")
        console.log('all the results are', result)
        setSearch(result.searchResult)
      });
  }, [term]);

  const location = useLocation();
  const params = new URLSearchParams(location.search);

  const total_guests = params.get("guests") || 1;
  const totalDays = params.get("days") || 1;
  const startDate = params.get("start");
  const endDate = params.get("end");

  const formattedStartDate = format(new Date(startDate), "dd MMMM");
  const formattedEndDate = format(new Date(endDate), "dd MMMM");

  return (
    <>
      <Header placeholder={`${term} | ${total_guests} guests | ${totalDays} days`} />
      <div className='searchPage'>
        <div className='searchPage__info'>
          <p>{search.length} stays · {formattedStartDate} to {formattedEndDate} · {total_guests} guest</p>
          <h1>Stays nearby</h1>
          <Button variant="outlined">
            Cancellation Flexibility
          </Button>
          <Button variant="outlined">
            Type of Place
          </Button>
          <Button variant="outlined">
            Price
          </Button>
          <Button variant="outlined">
            Amenities
          </Button>
          <Button variant="outlined">
            More filters
          </Button>
        </div>
        <div className="search-page-layout">
          <SearchList properties={search} />
          {search.length > 0 &&
            <Map properties={search} />
          }
        </div>
      </div>
    </>
  )
}
//   return(
//     // <>
//     //   {/* 'data' */}
//     //   <img src={search[0] ? search[0].img_url : ""} alt=""/>
//     //   <h3>{search[0] ? search[0].city : ""}</h3>
//     // </>

//     <div className='searchResult'>
//         <img src = {search[0]? search[0].img_url : ""} alt=""/>
//         {/* <img src = "https://images.unsplash.com/photo-1534511902651-6ab0ce131f2a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1031&q=80" alt=""/> */}
//           <FavoriteBorderIcon className='searchResult__heart'/>
//           <div className='searchResult__info'>
//             <div className='searchResult__infoTop'>
//               <p>{search[0]? search[0].province : ""}</p>
//               <h3>{search[0] ? search[0].title : ""}</h3>
//               <p>{search[0] ? search[0].city : ""}</p>
//               <p>____</p>
//             </div>
//             <div className='searchResult__infoBottom'>
//               <div className='searchResult__stars'>
//                 <StarIcon className='searchResult__star'/>
//                 <p>
//                   <strong>{search[0] ? search[0].average_rating : ""}</strong>
//                 </p>
//               </div>
//               <div className='searchResult__price'>
//                 <h2>{search[0] ? search[0].price_per_day : ""}</h2>
//                 {/* <p>{total}</p> */}
//               </div>
//             </div>
//           </div>
//     </div>
//   )
// }
//original hard code file
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
