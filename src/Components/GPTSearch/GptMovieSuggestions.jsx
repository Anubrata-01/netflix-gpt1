import React from 'react'
import { useSelector } from 'react-redux';
import MovieSection from '../MovieContainer/MovieSection';

const GptMovieSuggestions = () => {
  const {movieNames,movieResults}=useSelector((store)=>store?.gptSlice);

 
  return (
    <div className='absolute  w-full bg-black overflow-y-scroll no-scrollbar top-[35%]  text-white flex justify-between left-[0] sm:top-[30%] md:top-[34%]'>
      <div className='overflow-x-scroll no-scrollbar'>
      {movieNames && movieResults ? (
          movieNames.map((movieName, index) => (
            <MovieSection key={movieName} movies={movieResults[index]} title={movieName} />
          ))
        ) : (
          <div className="p-1   w-full text-white flex justify-center text-2xl">
            Enter a Search query
          </div>
        )}
      </div>
      
      </div>
  )
}

export default GptMovieSuggestions;