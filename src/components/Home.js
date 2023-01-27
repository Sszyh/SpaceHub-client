import React from 'react'
import '../styles/Home.css'
import Banner from '../components/Banner'
import Card from '../components/Card'

function Home() {
  return (
    <div className='home'>
      <Banner />

      <div className='home__section'>
        <Card
          src="https://images.unsplash.com/photo-1534511902651-6ab0ce131f2a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1031&q=80"
          title="Industrial Studio in Ottawa"
          description="A large, industrial-style studio with exposed brick walls and concrete floors, perfect for painters and sculptors."
          price="$30/day"
        />
        <Card
          src="https://images.unsplash.com/photo-1582719388123-e03e25d06d51?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
          title="Vintage Bungalow in Vancouver"
          description="A charming, vintage-inspired bungalow with a large backyard and plenty of natural light, ideal for writers or performers."
          price="$45/day"
        />
        <Card
          src="https://images.unsplash.com/photo-1600693437834-37cd24fbf249?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1031&q=80"
          title="Bohemian Loft in Montreal"
          description="A stylish, contemporary loft with exposed brick walls and high ceilings, perfect for photo shoots or events."
          price="$55/day"
        />
      </div>

      <div className='home__section'>
        <Card
          src="https://images.unsplash.com/photo-1533090161767-e6ffed986c88?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=869&q=80"
          title="Art Deco Studio in Hamilton"
          description="A charming, vintage-inspired studio with art deco details, perfect for writers or performers."
          price="$35/day"
        />
        <Card
          src="https://images.unsplash.com/photo-1606050580429-51524688f2e7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80"
          title="Music Rehearsal Space in Quebec City"
          description="A well-equipped space with professional sound and lighting, suitable for established bands or dance troupes."
          price="$50/day"        
        />
        <Card
          src="https://images.unsplash.com/photo-1449247613801-ab06418e2861?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80"
          title="Minimalist Studio in Victoria"
          description="A sleek, minimal space with white walls and a large skylight, great for sculptors or designers."
          price="$40/day"        
        />
      </div>

    </div>
  )
}

export default Home