import React, { useState, useEffect } from 'react'
import '../styles/Home.css'
import Banner from '../components/Banner'
import Card from '../components/Card'
import Header from './Header';
import Map from '../components/Map'
import { useCookies } from "react-cookie";


function Home() {

  const [properties, setProperties] = useState([]);
  const [cookies, setCookie, removeCookies] = useCookies();
  const [user, setUser] = useState({});

  useEffect(() => {
    const user_obj = cookies.user_obj ? cookies.user_obj : {}
    setUser(user_obj)
    
    fetch("http://localhost:8000/properties")

      .then((res) => res.json())
      .then((data) => {
        setProperties(data.properties)
      });
  }, []);

  return (
    properties.length > 0 &&
    <div className='home'>
      <Header user={ user } />
      <Banner user={ user } />
      <div className='formap'>
        <Card properties={properties} />
        <Map properties={properties} />
      </div>
    </div>

  )
}

export default Home