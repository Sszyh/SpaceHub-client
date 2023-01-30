import React, { useState, useEffect, Fragment } from 'react'
import '../styles/Home.css'
import Banner from '../components/Banner'
import Card from '../components/Card'
import Map from '../components/Map'

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
      <div>
        <section className='home'>
          <Banner />
          <Card properties={properties}/>
        </section>
        <section className='xl:inline-flex xl:min-w-[600px]'>
          <Map properties={properties}/>
        </section>
      </div>
      }
    </Fragment>
  )
}

export default Home