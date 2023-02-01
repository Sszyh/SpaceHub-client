import React, { useState, useEffect, Fragment } from 'react'
import '../styles/Home.css'
import Property from './Property';

function Details(props) {
  const [property, setProperty] = useState([]);
  useEffect(() => {
    
    fetch(`http://localhost:8000${window.location.pathname}`)
  
      .then((res) => res.json())
      .then((data) => {
        setProperty(data.property)});
  }, []);

  return (
    <Fragment>
      {property.length > 0 && 
      <div>
        <section className='home'>
          <Property properties={property}/>
        </section>
      </div>
      }
    </Fragment>
  )
}

export default Details