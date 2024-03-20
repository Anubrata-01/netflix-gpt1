import { Api_options } from "../Components/constant";
import { useDispatch, useSelector } from "react-redux";
import { addMovies, addMoviestoPopular, addMoviestotopRated } from "../Redux Store/movieSlice";
import { useEffect, useCallback } from "react";

const useMoviefetch = () => {
  const dispatch = useDispatch();
  const movies = useSelector((store) => store.movie);

  const fetchMovie = useCallback(async (url, id) => {
    try {
      const response = await fetch(url, Api_options);
      const data = await response.json();
      
      switch (id) {
        case 1:
          dispatch(addMovies(data));
          break;
        case 4:
          dispatch(addMoviestoPopular(data));
          break;
        case 3:
          dispatch(addMoviestotopRated(data));
          break;
        default:
          break;
      }

      console.log(data);
    } catch (err) {
      console.error("Error fetching movie:", err);
    }
  }, [dispatch]);

  useEffect(() => {
    const fetchMoviesData = async () => {
      const urls = [
        `https://api.themoviedb.org/3/movie/now_playing?language=en-Us&page=2`,
        `https://api.themoviedb.org/3/movie/popular?language=en-Us&page=2`,
        `https://api.themoviedb.org/3/movie/top_rated?language=en-Us&page=2`,
      ];

      for (let i = 0; i < urls.length; i++) {
        const url = urls[i];
        const id = i === 0 ? 1 : i === 1 ? 4 : 3;

        await fetchMovie(url, id);
      }
    };

    fetchMoviesData();
  }, [fetchMovie]);
};

export default useMoviefetch;


