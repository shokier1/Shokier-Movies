import React from 'react'
import MovieCard from './MovieCard'
function MoviesList({movies}) {
  return (
  <section className="py-3" id="Home">
  <div className="container">
    <div className="row ">
      {
        movies.length >=1 ?
        movies.map((movie)=>{
          return <MovieCard key={movie.id} movie={movie} />
        }
        )
        :
       <h1 className='text-center text-danger p-5'>No Movies</h1>
      }
     
    </div> {/* row */}
  </div> {/* container */}
</section>

  )
}

export default MoviesList