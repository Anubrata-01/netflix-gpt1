import React, { useContext } from "react";
import MovieSection from "./MovieSection";
import { Context } from "../context";
const MovieList = () => {
  const  movieList= useContext(Context);
  return (
    <div className="sm:mt-0 -mt-6 sm:ml-0 -ml-2">
    <MovieSection movies={movieList?.movies} rpath={movieList?.rpath} title={"Now Playing"}/>
    <MovieSection movies={movieList?.movies1} title={"Popular"}/>
    <MovieSection movies={movieList?.movies2} title={"Top Rated"}/>
    </div>
  );
};

export default MovieList;
