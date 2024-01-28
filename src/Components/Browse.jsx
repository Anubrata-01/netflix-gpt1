import React, { useEffect, useState } from "react";
import Header from "./Header";
import useMoviefetch from "../CustomHooks/useMoviefetch";
import MainContainer from "./MovieContainer/MainContainer";
import SecondaryContainer from "./MovieContainer/SecondaryContainer";
import { useSelector } from "react-redux";
import { Api_options } from "./constant";
import { Context } from "./context";
import GptSearchPage from "./GPTSearch/GptSearchPage";
const Browse = () => {
  const [selectedMovie, setSelectedMovie] = useState(null);
  useMoviefetch(2);
  const movies = useSelector(
    (store) => store.movie.nowPlaying.nowPlayingmovies
  );
  const movies1 = useSelector((store) => store.movie.popular.popularMovies);
  const movies2 = useSelector((store) => store.movie.topRated.topMovies);
  const isShow=useSelector((store)=>store?.gptSlice?.gptShow);
  console.log(isShow)
  useEffect(() => {
    if (!movies) return; // Don't proceed if movies is not available

    const getRandomMovieId = (movies) => {
      if (movies.results.length > 0) {
        const randomIndex = Math.floor(Math.random() * movies.results.length);
        return movies.results[randomIndex].id;
      }
      return null;
    };

    const randomNowPlayingMovieId = getRandomMovieId(movies);
    const apiUrl = `https://api.themoviedb.org/3/movie/${randomNowPlayingMovieId}`;

    const fetchById = async (url) => {
      try {
        const data = await fetch(url, Api_options);
        const parsedData = await data.json();
        console.log(parsedData);
        setSelectedMovie(parsedData);
      } catch (error) {
        console.error("Error fetching movie details:", error);
      }
    };

    fetchById(apiUrl);
  }, [movies]);

  if (!selectedMovie) return null;

  return (
    <div className="relative h-screen bg-black">
      <Context.Provider value={{ selectedMovie, movies, movies1, movies2 }}>
        <Header />
        {
          isShow?(<GptSearchPage/>):(<>
           <MainContainer />
        <SecondaryContainer />
          </>)
        }
      </Context.Provider>
    </div>
  );
};

export default Browse;

