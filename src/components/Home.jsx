import React from 'react'
import Slide from './Slide'
import MoviesList from './MoviesList'

function Home({movies}) {
  return (
   <>
   <Slide/>
   <MoviesList movies= {movies} />
   </>
  )
}

export default Home