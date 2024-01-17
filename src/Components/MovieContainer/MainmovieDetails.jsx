import React from "react";
import { Button, PlayIcon,} from "evergreen-ui";
import MoreInfoPopComponent from "../../Utilities/MoreInfoPopComponent";
import CustomPlaceholderAndIconSelectMenuExample from "../../Utilities/GenreSelect";
const MainmovieDetails = ({ user }) => {;
  const user1 = user;
  return (
    <div className="pt-40 pl-12 absolute sm:pt-52 sm:pl-16 mt-5 z-10 bg-gradient-to-r from-black to-transparent">
      {user1?.visible && (
        <div className="text-white text-xl sm:text-3xl flex relative -top-24 sm:-top-28">
          <h1>Movies</h1>
          <div className="ml-6">
            <CustomPlaceholderAndIconSelectMenuExample />
          </div>
        </div>
      )}
      <div className="text-red-600 text-2xl sm:text-6xl font-bold">
        {user1?.selectedMovie?.title}
      </div>
      <div className="hidden md:block text-white pt-4 w-2/4">
        {user1?.selectedMovie?.overview}
      </div>
      <div className="pt-4 flex">
        <Button marginY={7} className="" marginRight={12} iconBefore={PlayIcon}>
          Play
        </Button>
        <MoreInfoPopComponent/>
      </div>
    </div>
  );
};

export default MainmovieDetails;