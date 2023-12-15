import React from "react";
import MovidCard from "./MovidCard";
import { NavLink} from "react-router-dom";
const MovieSection = ({ movies, title }) => {
  return (
    <div>
      <h1 className="relative z-10 text-white pl-5 mt-2 font-bold">{title}</h1>
      <div className="w-full pl-4 overflow-x-scroll no-scrollbar">
        <div className="grid pt-4">
          <div className="flex">
            {movies?.results?.map((item) => (
              <NavLink key={item.id} to={"/movie/"+item.id}>
                <MovidCard key={item.id} path={item.poster_path} />
              </NavLink>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieSection;
