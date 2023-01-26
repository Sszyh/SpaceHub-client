import React from 'react'
import '../styles/Home.css'
import Banner from '../components/Banner'
import TestCard from './TestCard'

function Home() {
  return (
    <div className='home'>
      <Banner />
      <TestCard />
    </div>
  )
}

export default Home