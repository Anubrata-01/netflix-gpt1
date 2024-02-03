import React from "react";
import MovieList from "./MovieList";

const SecondaryContainer = ({ movies, movies1, movies2 }) => {
  return (
    <div className="w-full bg-black relative">
      <MovieList  />
    </div>
  );
};

export default SecondaryContainer;
