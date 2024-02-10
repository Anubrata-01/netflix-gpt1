import React, { useState } from "react";
import HeaderFile from "../HeaderFile";
import useFetchMovieForMovies from "../../CustomHooks/useFetchMovieForMovies";
import { useSelector } from "react-redux";
import useMoviefetch from "../../CustomHooks/useMoviefetch";
import { Context } from "../context";

const Movies = () => {
  const[visible,setVisible]=useState(true)
  useFetchMovieForMovies(2);
  useMoviefetch(3);
  const movie = useSelector(
    (store) => store?.movie?.MovieSection
  );
  const movies = useSelector(
    (store) => store.movie.nowPlaying.nowPlayingmovies
  );
  const movies1 = useSelector((store) => store.movie.popular.popularMovies);
  const movies2 = useSelector((store) => store.movie.topRated.topMovies);
  const selectedMovie = movie?.results[3];
  let path = "movies";
  let rpath = "/movies";

  return (
    <div>
      <Context.Provider value={{selectedMovie,movies,movies1,movies2,visible,rpath}}>
      <HeaderFile
        path={path}
      />
      </Context.Provider>

    </div>
  );
};

export default Movies;
