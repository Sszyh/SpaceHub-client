import React from 'react'
import { Button } from '@mui/material'
import '../styles/SearchPage.css'
import SearchResult from './SearchResult'


function SearchPage() {
  return (
    <div className='searchPage'>
      <div className='searchPage__info'>
        <p>12 stays · 5 February to 11 February · 2 guest</p>
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

      <SearchResult
        img="https://images.unsplash.com/photo-1449247613801-ab06418e2861?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80"
        location=""
        title="Minimalist Studio in Victoria"
        description="A sleek, minimal space with white walls and a large skylight, great for sculptors or designers."
        star={4.6}
        price="$40/day"
        total="$210 total"
      />

      <SearchResult
        img="https://images.unsplash.com/photo-1449247613801-ab06418e2861?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80"
        location=""
        title="Minimalist Studio in Victoria"
        description="A sleek, minimal space with white walls and a large skylight, great for sculptors or designers."
        star={4.6}
        price="$40/day"
        total="$210 total"
      />

      <SearchResult
        img="https://images.unsplash.com/photo-1449247613801-ab06418e2861?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80"
        location=""
        title="Minimalist Studio in Victoria"
        description="A sleek, minimal space with white walls and a large skylight, great for sculptors or designers."
        star={4.6}
        price="$40/day"
        total="$210 total"
      />

    </div>
  )
}

export default SearchPage