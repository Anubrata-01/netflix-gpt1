import React from "react";
import { Button, PlayIcon } from "evergreen-ui";
import MoreInfoPopComponent from "../../Utilities/MoreInfoPopComponent";
import CustomPlaceholderAndIconSelectMenuExample from "../../Utilities/GenreSelect";
import { useNavigate } from "react-router-dom";

const MainmovieDetails = ({ user, }) => {
  const navigate = useNavigate();
  const user1 = user;

  return (
    <div className="pt-48 pl-6 absolute sm:pt-52 sm:pl-16 mt-2 z-10 bg-gradient-to-r from-black to-transparent">
      {user1?.visible ? (<>
        <div className="text-white -top-5 text-sm sm:text-3xl flex relative sm:fixed   sm:top-20">
          <h1>Movies</h1>
          <div className="ml-6">
            <CustomPlaceholderAndIconSelectMenuExample />
          </div>
        </div>
      {/* // )} */}
      <div className="text-red-600 text-sm -mt-4 sm:mt-0 sm:text-4xl font-bold">
        {user1?.selectedMovie?.title}
      </div>
      <div className="hidden sm:block text-white pt-4 w-2/4">
        {user1?.selectedMovie?.overview}
      </div>
      <div className="mt-1 flex sm:mt-4">
       
          <Button
            marginY={7}
            className="w-14 h-1 text-xs sm:text-base sm:w-auto sm:h-full"
            marginRight={12}
            iconBefore={PlayIcon}
            onClick={() => navigate("/player")}
          >
            Play
          </Button>
          <MoreInfoPopComponent />
        
      
      </div>
      </> ):(<>
      
        <div className="text-red-600 text-sm mt-2 sm:mt-0 sm:text-4xl font-bold">
        {user1?.selectedMovie?.title}
      </div>
      <div className="hidden sm:block text-white pt-4 w-2/4">
        {user1?.selectedMovie?.overview}
      </div>
      <div className="pt-2 flex sm:pt-4">
       
          <Button
            marginY={7}
            className="w-14 h-1 text-xs sm:text-base sm:w-auto sm:h-full"
            marginRight={12}
            iconBefore={PlayIcon}
            onClick={() => navigate("/player")}
          >
            Play
          </Button>
          <MoreInfoPopComponent />
        
      
      </div>
      </>)}
    </div>
     
  );
};

export default MainmovieDetails;

