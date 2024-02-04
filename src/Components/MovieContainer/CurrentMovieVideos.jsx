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
    return trailer?.map((trailer) => (
       <TrailerComponent key={trailer.key} trailerkey={trailer?.key} />
    ));
 }, [trailer]);
  return (
    <div className='ml-52 pb-3 mt-1
    grid grid-cols-1 gap-2 sm:grid sm:grid-cols-3 sm:gap-2'>
      {trailers}
    </div>
  )
}

export default CurrentMovieVideos