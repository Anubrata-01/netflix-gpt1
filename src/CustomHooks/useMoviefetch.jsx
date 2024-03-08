import { Api_options } from "../Components/constant";
import { useDispatch, useSelector } from "react-redux";
import {
  addMovies,
  addMoviestoPopular,
  addMoviestotopRated,
} from "../Redux Store/movieSlice";
import { useEffect, useCallback } from "react";

const useMoviefetch = () => {
  const dispatch = useDispatch();
  const movies = useSelector((store) => store.movie);

  const fetchMovie = useCallback(async (url, id) => {
    try {
      const data = await fetch(url, Api_options);
      const json = await data.json();
      
      switch(id) {
        case 1:
          dispatch(addMovies(json));
          break;
        case 4:
          dispatch(addMoviestoPopular(json));
          break;
        case 3:
          dispatch(addMoviestotopRated(json));
          break;
        default:
          break;
      }

      console.log(json);
    } catch (error) {
      console.error("Error fetching movie:", error);
    }
  }, [dispatch]);

  useEffect(() => {
    const Now_PlayingUrl = `https://api.themoviedb.org/3/movie/now_playing?language=en-Us&page=2`;
    const Popular = `https://api.themoviedb.org/3/movie/popular?language=en-Us&page=2`;
    const Top_Rated = `https://api.themoviedb.org/3/movie/top_rated?language=en-Us&page=2`;

    fetchMovie(Now_PlayingUrl, 1);
    fetchMovie(Popular, 4);
    fetchMovie(Top_Rated, 3);
  }, [fetchMovie]);
};

export default useMoviefetch;

