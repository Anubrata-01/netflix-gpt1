import React from "react";
import MovieSection from "./MovieSection";
import { useSelector } from "react-redux";
const MovieList = () => {
  const movies = useSelector((store) => store.movie.nowPlaying.nowPlayingmovies);
  const movies1 = useSelector((store) => store.movie.popular.popularMovies);
  const movies2 = useSelector((store) => store.movie.topRated.topMovies);
  return (
    <>
    <MovieSection movies={movies} title={"Now Playing"}/>
    <MovieSection movies={movies1} title={"Popular"}/>
    <MovieSection movies={movies2} title={"Top Rated"}/>
    </>
  );
};

export default MovieList;
