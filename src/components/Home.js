import React, { useState, useEffect } from 'react'
import '../styles/Home.css'
import Banner from '../components/Banner'
import Card from '../components/Card'
import Header from './Header';
import Map from '../components/Map'

function Home() {

  const [properties, setProperties] = useState([]);
  useEffect(() => {

    fetch("http://localhost:8000/properties")

      .then((res) => res.json())
      .then((data) => {
        setProperties(data.properties)
      });
  }, []);

  return (
    properties.length > 0 &&
    <div className='home'>
      <Header />
      <Banner />
      <div>
        <Card properties={properties} />
        <Map properties={properties} />
      </div>
    </div>

  )
}

export default Home