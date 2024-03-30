import React, { useMemo } from 'react'
import useCurrentMovieDetails from '../../CustomHooks/useCurrentMovieDetails'
import { useSelector } from 'react-redux';
import TrailerComponent from './TrailerComponent';
const CurrentMovieVideos = ({userId}) => {
  const currentMovieUrl = useMemo(() => {
    return "https://api.themoviedb.org/3/movie/" + userId + "/videos";;
    
 }, [userId]);
  useCurrentMovieDetails(currentMovieUrl);
  const trailer=useSelector((store)=>store?.movie?.movieDetails?.cureentMovieTrailer?.results)
  if(!trailer){
    console.log("error")
  }
  const trailers = useMemo(() => {
    return trailer?.slice(0, 6).map((trailer) => (
      <TrailerComponent key={trailer.key} trailerkey={trailer?.key} />
    ));
  }, [trailer]);
  return (
    <div className='ml-52 pb-3 mt-1 
       sm:grid sm:grid-cols-3 sm:gap-5 flex gap-4 overflow-scroll no-scrollbar'>
      {trailers}
    </div>
  )
}

export default CurrentMovieVideos