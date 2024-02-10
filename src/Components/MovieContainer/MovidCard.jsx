import React from "react";
import { NavLink } from "react-router-dom";
const MovidCard = ({ moviedetails,rpath }) => {
  const Url = "https://image.tmdb.org/t/p/w500";
  return (
    <div>
      <div className="w-[175px] h-[114px] relative pl-1 mb-4">
        <NavLink
          key={moviedetails?.id}
          to={"/browse/movie/" + moviedetails?.id}
        >
          <img
            className="w-full h-[114px] object-cover rounded-sm"
            src={Url + moviedetails?.poster_path}
            alt=""
          />
        </NavLink>
      </div>
    </div>
  );
};

export default MovidCard;
