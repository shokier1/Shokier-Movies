import React , {useState , useEffect} from 'react'
import Header from './components/Header'
import Home from './components/Home'
import Footer from './components/Footer'
import Details from './components/Details'
import { createHashRouter, Route, Routes } from 'react-router-dom'

import axios from 'axios'


function App() {
  
  const [movies , setMovies] = useState ([])
  
  const getAllMovies = async ()=>{
    const res = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=52ef927bbeb21980cd91386a29403c78&language=ar`)
    setMovies (res.data.results); 
 } //getAllMovies

    const search = async (word)=>{
      const res = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=52ef927bbeb21980cd91386a29403c78&query=${word}&language=ar`)
      setMovies (res.data.results) ;
  }//search

  useEffect( ()=>{
    getAllMovies()
  } , [])  
   
  return (
    <>
    <Header search={search} />
    <Routes>
   <Route path='/' element={<Home movies={movies} />}/>
   <Route path='/details/:id' element={<Details/>}/>
    </Routes>

    <Footer/>
    </>
  )
  }


export default App 