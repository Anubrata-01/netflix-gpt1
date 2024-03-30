import React from 'react'
import { useSelector } from 'react-redux';
import MovieSection from '../MovieContainer/MovieSection';
// import ShimmerGptMovie from './ShimmerGptMovie';

const GptMovieSuggestions = () => {
  const {movieNames,movieResults}=useSelector((store)=>store?.gptSlice);

 
  return (
    <div className='    text-white flex justify-between  p-4 md:px-8 px-2 m-4 md:my-7 '>
      <div className='overflow-x-scroll no-scrollbar'>
      {movieNames && movieResults ? (
          movieNames.map((movieName, index) => (
            <MovieSection key={movieName} movies={movieResults[index]} title={movieName} />
          ))
        ) : (
          "load"
          // <ShimmerGptMovie/>
        )}
      </div>
      
      </div>
  )
}

export default GptMovieSuggestions;