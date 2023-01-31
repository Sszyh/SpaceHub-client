import React, { useState, useEffect, Fragment } from 'react'
import '../styles/Home.css'
import Banner from '../components/Banner'
import Card from '../components/Card'
import Header from './Header';

function Home() {

  const [properties, setProperties] = useState([]);
  useEffect(() => {
    
    fetch("http://localhost:8000/properties")
  
      .then((res) => res.json())
      .then((data) => {
        setProperties(data.properties)});
  }, []);

  return (
    <Fragment>
      {properties.length > 0 && 
      <div className='home'>
        <Header />
        <Banner />
        <Card properties={properties}/>
      </div>
      }
    </Fragment>
  )
}

export default Home