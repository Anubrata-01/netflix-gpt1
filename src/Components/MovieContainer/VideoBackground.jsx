import React, { useEffect, useState } from "react";
import { Api_options } from "../constant";
const VideoBackground = ({ videoId }) => {
  const[trailerKey,setTrailerKey]=useState(null)
  const movieVideo = async () => {
    
      const data = await fetch(
        "https://api.themoviedb.org/3/movie/"+videoId+"/videos?lan",
        Api_options
      );
      const JsonData = await data.json();
      const filteredTrailer = JsonData?.results?.filter(
        (item) => item.type === "Trailer"
      );
      const key=filteredTrailer[0].key
      setTrailerKey(key)
   
  };
  useEffect(() => {
    movieVideo();
  }, []);
  return (
    <div className=" h-150 relative  -top-28 ">
      <iframe className=" w-full  aspect-video z-50 border-0  " src={"https://www.youtube.com/embed/" +trailerKey + "?&autoplay=1&mute=1&controls=0"} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    </div>
  );
};

export default VideoBackground;
