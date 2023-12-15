import { Api_options } from "../Components/constant";
import { useDispatch, useSelector } from "react-redux";
import {
  addMovies,
  addMoviestoPopular,
  addMoviestotopRated,
} from "../Redux Store/movieSlice";
import { useEffect } from "react";
const useMoviefetch = () => {
  const dispatch = useDispatch();
  const movies = useSelector((store) => store.movie);
  const Now_PlayingUrl = `https://api.themoviedb.org/3/movie/now_playing`;
  const Popular = "https://api.themoviedb.org/3/movie/popular";
  const Top_Rated = "https://api.themoviedb.org/3/movie/top_rated";
  const fetchMovie = async (url, id) => {
    const data = await fetch(url, Api_options);
    const json = await data.json();
    if (movies?.nowPlaying?.id === id) {
      dispatch(addMovies(json));
    }
    if (movies?.popular?.id === id) {
      dispatch(addMoviestoPopular(json));
    }
    if (movies?.topRated?.id === id) {
      dispatch(addMoviestotopRated(json));
    }
    console.log(json);
  };
  useEffect(() => {
    fetchMovie(Now_PlayingUrl, 1);
    fetchMovie(Popular, 2);
    fetchMovie(Top_Rated, 3);
  }, []);
};

export default useMoviefetch;
