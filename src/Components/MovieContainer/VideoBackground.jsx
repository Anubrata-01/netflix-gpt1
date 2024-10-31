import React, { useEffect, useState, memo, useCallback } from "react";
import ReactPlayer from "react-player";
import { VolumeUpIcon } from "evergreen-ui";
import VolumeOffIcon from '@mui/icons-material/VolumeOff';
import { Api_options } from "../constant";
import { useDispatch } from "react-redux";
import { addPlayerTrailer } from "../../Redux Store/movieSlice";

const VideoBackground = ({ videoId }) => {
  const [trailerKey, setTrailerKey] = useState(null);
  const [isMuted, setIsMuted] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchMovieVideo = async () => {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/${videoId}/videos?lan`,
          Api_options
        );
        const data = await response.json();
        const trailer = data?.results?.find(item => item?.type === "Trailer");
        
        if (trailer) {
          const key = trailer.key;
          setTrailerKey(key);
          dispatch(addPlayerTrailer(key));
        } else {
          console.warn("No trailer found for the specified movie.");
        }
      } catch (error) {
        console.error("Error fetching movie video:", error);
      }
    };

    fetchMovieVideo();
  }, [videoId, dispatch]);

  const handleToggleMute = useCallback(() => {
    setIsMuted(prevIsMuted => !prevIsMuted);
  }, []);

  if (!trailerKey) return null;

  return (
    <div className="h-[350px] sm:h-screen relative -mt-44 sm:-mt-28 bg-gradient-to-b from-black to-transparent">
      <ReactPlayer
        url={`https://www.youtube.com/watch?v=${trailerKey}`}
        width="100%"
        height="120%"
        className="absolute"
        playing
        muted={isMuted}
        controls={false}
        loop
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
      <button
        onClick={handleToggleMute}
        className="text-white font-medium absolute top-[25%] right-20 z-10 mt-36 pt-2 sm:pt-0 sm:mt-0"
      >
        {isMuted ? (
          <VolumeOffIcon fontSize="large" />
        ) : (
          <VolumeUpIcon size={30} />
        )}
      </button>
    </div>
  );
};

export default memo(VideoBackground);



// blob:https://www.netflix.com/c65ef093-cb99-47bf-8d8b-845885552bfb
