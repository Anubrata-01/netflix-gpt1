import React, { useContext } from "react";
import MovieSection from "./MovieSection";
import { Context } from "../context";
const MovieList = () => {
  const  movieList= useContext(Context);
  return (
    <>
    <MovieSection movies={movieList?.movies} rpath={movieList?.rpath} title={"Now Playing"}/>
    <MovieSection movies={movieList?.movies1} title={"Popular"}/>
    <MovieSection movies={movieList?.movies2} title={"Top Rated"}/>
    </>
  );
};

export default MovieList;
