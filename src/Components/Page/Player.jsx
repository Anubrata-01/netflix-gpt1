import React, { useContext } from 'react'
import { Context } from '../context';
import useCurrentMovieDetails from '../../CustomHooks/useCurrentMovieDetails';
import { useSelector } from 'react-redux';
import ReactPlayer from 'react-player';

const Player = () => {
  
  const trailerKey=useSelector((store)=>store?.movie?.PlayerTrailer)
  // console.log(data1)
  

  return (
    <div>
        <div>
        </div>
        <ReactPlayer
        url={`https://www.youtube.com/watch?v=${trailerKey}`}
        width="100%"
        height="100%"
        className="absolute"
        playing={true}
        // muted={isMuted}
        controls={false}
        loop={true}
        config={{
          youtube: {
            playerVars: {
              modestbranding: 1,
              fs: 0,
              rel: 0,
              controls: 0,
              showinfo: 0,
            },
          },
        }}
      />
    </div>
  )
}

export default Player