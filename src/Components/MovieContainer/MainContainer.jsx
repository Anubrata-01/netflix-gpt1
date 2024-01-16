import React, { useContext,} from "react";
import VideoBackground from "./VideoBackground";
import MainmovieDetails from "./MainmovieDetails";
import { Context } from "../context";
const MainContainer = () => {
  const user = useContext(Context);
  console.log(user);
  return (
    <div className="relative ">
      <MainmovieDetails 
      user={user}
         />
      <VideoBackground videoId={user?.selectedMovie?.id} />
    </div>
  );
};

export default MainContainer;
