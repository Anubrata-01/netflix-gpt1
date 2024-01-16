import { useDispatch, useSelector } from "react-redux";
import { Api_options } from "../Components/constant";
import { addMoviesBasedOnGenreId } from "../Redux Store/movieSlice";
import { useEffect,memo } from "react";

const useFetchMovieByGenreId = (genreId) => {
  const dispatch = useDispatch();
  const url = `https://api.themoviedb.org/3/discover/movie?&with_genres=${genreId}`;
  const fetchMovies = async (url) => {
    try {
      // const data = await fetch(url, Api_options);
      // const jsonData = await data.json();
      // const movies = jsonData;
      // dispatch(addMoviesBasedOnGenreId(movies));
      if (genreId) {
        // const moviesUrl = `https://api.themoviedb.org/3/discover/movie?&with_genres=${genreId}`;
        const moviesResponse = await fetch(url, Api_options);
        const moviesData = await moviesResponse.json();

        dispatch(addMoviesBasedOnGenreId(moviesData));
      } else {
        dispatch(addMoviesBasedOnGenreId(null));
      }
    } catch (error) {
      console.error("Error fetching movies:", error);
    }
  };

  useEffect(() => {
      fetchMovies(url);
  }, []);
};

export default useFetchMovieByGenreId ;
