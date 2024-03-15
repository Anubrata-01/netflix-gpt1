import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import { Context } from '../context';
import MoviesSectionWraper from '../MoviesSectionWraper';
const GenreSection = () => {
  const[visible,setVisible]=useState(true)

  const movies = useSelector((store) => store?.movie?.GenreBasedMovies);
  const movies1 = useSelector((store) => store?.movie?.GenreBasedMovies);
  const movies2 = useSelector((store) => store?.movie?.GenreBasedMovies);
  const Id=useSelector((store)=>store?.movie?.GenreId);

  console.log(movies)
  const selectedMovie = movies?.results[1];

  const path=`movies/${Id}`;
  return (
    <div>
      <Context.Provider value={{selectedMovie,movies,movies1,movies2,visible}}>
      
      <MoviesSectionWraper path={path}/>
       
      </Context.Provider>
    </div>
  )
}

export default GenreSection