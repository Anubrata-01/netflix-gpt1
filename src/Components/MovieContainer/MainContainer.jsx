import React from 'react'
import { useSelector } from 'react-redux'
import MainmovieDetails from './MainmovieDetails'
import VideoBackground from './VideoBackground'
const MainContainer = () => {
    const movies=useSelector((store)=>store.movie?.nowPlaying?.nowPlayingmovies)
    if(!movies) return;
    console.log(movies?.results[0])
    const mainMovie=movies?.results[0]
    const{original_title,overview,id
    }=mainMovie 
  return (
    <div className='relative -top-0'>
        <MainmovieDetails title={original_title} overview={overview}/>
        <VideoBackground videoId={id}/>
    </div>
  )
}

export default MainContainer