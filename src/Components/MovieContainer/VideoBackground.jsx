import React, { useEffect, useState,memo } from "react";
import ReactPlayer from "react-player";
import { VolumeUpIcon } from "evergreen-ui";
import VolumeOffIcon from '@mui/icons-material/VolumeOff';
import { Api_options } from "../constant";
import { useDispatch } from "react-redux";
import { addPlayerTrailer } from "../../Redux Store/movieSlice";

const VideoBackground = ({ videoId}) => {
  const [trailerKey, setTrailerKey] = useState(null);
  const [isMuted, setIsMuted] = useState(true);
  const dispatch=useDispatch()
  const movieVideo = async () => {
    try {
      const data = await fetch(
        `https://api.themoviedb.org/3/movie/${videoId}/videos?lan`,
        Api_options
      );
      const jsonData = await data.json();
      console.log("API Response:", jsonData);
      const filteredTrailer = jsonData?.results?.filter(
        (item) => item?.type === "Trailer"
      );
      console.log("Filtered Trailer:", filteredTrailer);
      if (filteredTrailer && filteredTrailer.length > 0) {
        const key = filteredTrailer[0]?.key;
        setTrailerKey(key);
        dispatch(addPlayerTrailer(key))
      } else {
        console.warn("No trailer found for the specified movie.");
      }
    } catch (error) {
      console.error("Error fetching movie video:", error);
    }
  };

  const handleToggleMute = () => {
    setIsMuted(!isMuted);
  };

  useEffect(() => {
    movieVideo();
  }, [videoId]);

  if (!trailerKey) {
    return null; // or render a loading spinner/message
  }
 
  return (
    <div className=" h-[350px] relative sm:h-screen -mt-44  sm:-mt-28 bg-gradient-to-b from-black to-transparent  ">
      <ReactPlayer
        url={`https://www.youtube.com/watch?v=${trailerKey}`}
        width="100%"
        height="120%"
        className="absolute"
        playing={true}
        muted={isMuted}
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
     
      <button
        onClick={handleToggleMute}
        className="text-white font-normal sm:font-medium mt-36 pt-2 sm:pt-0 sm:mt-0"
        style={{
          position: "absolute",
          top: "25%",
          right: "80px",
          zIndex: 10,
        }}
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
