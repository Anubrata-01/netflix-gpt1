import React from 'react'
import useCurrentMovieDetails from '../../CustomHooks/useCurrentMovieDetails'
import { useSelector } from 'react-redux';
import TrailerComponent from './TrailerComponent';
import useSimilarVideos from '../../CustomHooks/useSimilarVideos';
const CurrentMovieVideos = () => {
  useCurrentMovieDetails();
  useSimilarVideos()
  const data1=useSelector((store)=>store?.movie?.movieDetails?.cureentMovieTrailer)
  const dat1=useSelector((store)=>store?.movie?.movieDetails?.cureentMovieDetails)
  console.log(data1)
  console.log(dat1)


  return (
    <div className='ml-52 pb-3 mt-1
    flex flex-col sm:grid sm:grid-cols-3 sm:gap-2'>
      {data1?.map((trailer)=>(
        <TrailerComponent trailerkey={trailer.key}/>
      ))}
      {/* <h1>hello</h1> */}
    </div>
  )
}

export default CurrentMovieVideos