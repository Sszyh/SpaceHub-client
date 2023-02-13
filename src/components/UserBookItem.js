import React from 'react'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import StarIcon from '@mui/icons-material/StarBorder';
import Axios from 'axios';
import { useState } from "react";

import '../styles/SearchResult.css';
import '../styles/User.css';


export default function UserBookItem(props) {

	// console.log("props:", props)
	const [data, setData] = useState({
		rating: props.rating || 0,
		booking_id: props.booking_id
	});

	const [showForm, setShowForm] = useState(false);

	const handleEditForm = () => {
		setShowForm(!showForm);
	}

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log(data)
		Axios.all([
			Axios.put('http://localhost:8000/bookings', data),
			Axios.put('http://localhost:8000/bookings/avg')
		])
			.then(Axios.spread((res) => {
				setData(res.data)
				console.log('res', res.data)
			}));
	}

	function handle(e) {
		const newdata = { ...data }

		if (e.target.id === 'rating' && e.target.value > 0) {
			newdata[e.target.id] = parseInt(e.target.value);
		} else {
			newdata[e.target.id] = e.target.value
		}

		// newdata[e.target.id] = e.target.value
		setData(newdata)
		console.log(data)
	}
	return (
		<div
			className='searchResult'
		>
			<img src={props.src} alt="" />
			{/* <FavoriteBorderIcon className='searchResult__heart' /> */}

			<div className='searchResult__info'>
				<div className='searchResult__infoTop'>

					<h2>{props.title}</h2>
					<p>{props.city}, {props.province}</p>
					<p>____</p>
					{/* <p>{props.desc_long}</p> */}
					{/* <p>{props.review_message}</p> */}
				</div>

				<div className='searchResult__infoBottom'>
					<div className='searchResult__stars'>
						<StarIcon className='searchResult__star' />
						<p>
							<strong>{props.average_rating}</strong>
						</p>
					</div>

					<div className='searchResult__price'>
						<h2>{props.price_per_day}</h2>
						<p>${props.total_price}</p>
					</div>

					<button className='user__button' onClick={handleEditForm}>Add Review</button>
					{
						showForm && (
							<form className='review__form' onSubmit={(e) => handleSubmit(e)}>
								<input type="number" id="rating" placeholder="5.0" value={data.rating} onChange={handle} />
								<input type="text" id="review_message" placeholder="Write a review" value={data.review_message} onChange={handle} />
								<button className='user__button' type="submit">Submit</button>
							</form>
						)
					}
				</div>
			</div>
		</div>

	)
}