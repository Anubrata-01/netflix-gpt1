import React from "react";
import MovieList from "./MovieList";

const SecondaryContainer = ({ movies, movies1, movies2 }) => {
  return (
    <div className="w-full bg-black relative">
      <MovieList movies={movies} movies1={movies1} movies2={movies2} />
    </div>
  );
};

export default SecondaryContainer;
