import React from 'react'
import { useSelector } from 'react-redux';
import { Url } from '../constant';

const GptMovieSuggestions = () => {
  const gptSearchresults=useSelector((store)=>store?.gptSlice?.gptSearchMovies);
  console.log(gptSearchresults)
  return (
    <div className='absolute border-2 w-[80%] h-[60%] top-[35%] z-999 text-white flex justify-center left-[10%] sm:top-[30%] md:top-[34%]'>
      {gptSearchresults?.map((subArray, i) => (
        <div key={i}>
          {subArray?.map((movie, j) => (
            <div key={j}>
              <p>{movie.adult}</p>
              <img src={ Url+ movie.backdrop_path} alt={movie.title} />
              {/* <p>{movie.genre_ids}</p>
              <p>{movie.id}</p>
              <p>{movie.original_language}</p> */}
              {/* Add other properties as needed */}
            </div>
          ))}
        </div>
      ))}
      </div>
  )
}

export default GptMovieSuggestions;