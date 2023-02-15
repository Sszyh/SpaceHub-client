import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { format } from "date-fns";
import HostBookCard from './HostBookCard';

import '../styles/Host.css'


export default function HostBookingHistory() {

	const [host, setHost] = useState([]);
	const params = useParams();

	const [totalRevenue, setTotalRevenue] = useState(0);

	useEffect(() => {
		fetch(`http://localhost:8000/user/host/${params.id}`)
			.then((res) => res.json())
			.then((result) => {
				setHost(result.host);
			});
	}, [params.id]);

  useEffect(() => {
    setTotalRevenue(
      host.reduce((total, booking) => {
        const price = parseFloat(booking.price_for_stay.slice(1));
        return total + price;
      }, 0)
    );
  }, [host]);


	const bookingList = host.map((item, index) => {

		const total = parseFloat(item.price_for_stay.slice(1));
		const formattedStartDate = format(new Date(item.check_in_date), "dd MMMM yyyy");
		const formattedEndDate = format(new Date(item.check_out_date), "dd MMMM yyyy");
		const dateDisplay = formattedStartDate + " - " + formattedEndDate
		// const rating = item.rating
		const guest_name = item.first_name + " " + item.last_name;
		const first_name = item.first_name;


		return (

			<HostBookCard
				key={index}
				src={item.image_url}
				title={item.title}
				dates={dateDisplay}
				rating={item.rating}
				desc_long={item.desc_long}
				first_name={first_name}
				guest_name={guest_name}
				email={item.email}
				price_per_day={item.price_per_day}
				total_price={total}
			/>

		)
	})


	return (

		<div>
			<div>
				{host[0] && <h2>Your Booking History</h2>}
				{bookingList}
				<h2 className='align__right'>Total Revenue: ${totalRevenue.toFixed(2)}</h2>
			</div>
		</div>

	);
}
