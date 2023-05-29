import React , {useState , useEffect} from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
function Details() {
  const [movie , setMovie ] = useState ([])

const params = useParams() ;

const getMovie = async ()=>{
  const res = await axios.get(`https://api.themoviedb.org/3/movie/${params.id}?api_key=52ef927bbeb21980cd91386a29403c78&language=ar`)
  setMovie (res.data ); 
} //getAllMovies

useEffect( ()=>{
  getMovie ()
},[])  
  return (
<section className="py-3" id="Home">
  <div className="container">
    <div className="card p-3 text-center">
      <div className="row ">
        <div className="col-md-6  mb-1">
        <h2>{movie.title}</h2>
    <h4> انتاج:{movie.release_date} </h4>
    <h4>التقييم :{movie.vote_average}</h4>
          <p>{movie.overview}</p>
        </div> {/* right */}
        <div className="col-md-6  mb-1">
          <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} className="w-75" alt="" />
        </div> {/* left */}
      </div> {/* row */}
    </div>
  </div> {/* container */}
</section>

  )
}

export default Details