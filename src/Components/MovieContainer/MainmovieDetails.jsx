import React from "react";
import { Button, PlayIcon } from "evergreen-ui";
import MoreInfoPopComponent from "../../Utilities/MoreInfoPopComponent";
import CustomPlaceholderAndIconSelectMenuExample from "../../Utilities/GenreSelect";
import { useNavigate } from "react-router-dom";

const MainmovieDetails = ({ user, }) => {
  const navigate = useNavigate();
  const user1 = user;

  return (
    <div className="pt-40 pl-6 absolute sm:pt-52 sm:pl-16 mt-2 z-10 bg-gradient-to-r from-black to-transparent">
      {user1?.visible && (
        <div className="text-white text-xl sm:text-3xl flex relative sm:fixed top-2  sm:top-16">
          <h1>Movies</h1>
          <div className="ml-6">
            <CustomPlaceholderAndIconSelectMenuExample />
          </div>
        </div>
      )}
      <div className="text-red-600 text-xl mt-2 sm:mt-0 sm:text-4xl font-bold">
        {user1?.selectedMovie?.title}
      </div>
      <div className="hidden sm:block text-white pt-4 w-2/4">
        {user1?.selectedMovie?.overview}
      </div>
      <div className="pt-4 flex">
       
          <Button
            marginY={7}
            className=""
            marginRight={12}
            iconBefore={PlayIcon}
            onClick={() => navigate("/player")}
          >
            Play
          </Button>
          <MoreInfoPopComponent />
        
      
      </div>
    </div>
  );
};

export default MainmovieDetails;

