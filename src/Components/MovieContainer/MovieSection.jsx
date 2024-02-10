import React from "react";
import MovidCard from "./MovidCard";
const MovieSection = ({ movies, title,rpath }) => {
  return (
    <>
      <h1 className="relative z-10 text-white pl-5 mt-2 font-bold">{title}</h1>
      <div className="w-full pl-5 pb-3  overflow-x-scroll no-scrollbar">
        <div className=" pt-2">
          <div className="flex relative space-x-2 ">
          {movies?.results
              ? movies.results.map((item, index) => (
                  <div key={item?.id}>
                    <MovidCard moviedetails={item} rpath={rpath}/>
                  </div>
                ))
              : movies?.map((item, index) => (
                  <div key={item?.id}>
                    <MovidCard moviedetails={item} rpath={rpath}/>
                  </div>
                ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default MovieSection;
// / <NavLink key={item.id} to={"/browse/movie/" + item.id}>
// to={"/browse/movie/" + item.id}
// path={item.poster_path}
//                       title={item?.title}
//                       id={item?.id}