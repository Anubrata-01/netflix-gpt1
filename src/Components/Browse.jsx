import React, { Suspense, useEffect, useState } from "react";
import Header from "./Header";
import useMoviefetch from "../CustomHooks/useMoviefetch";
import { useSelector } from "react-redux";
import { Api_options } from "./constant";
import { Context } from "./context";
import GptSearchPage from "./GPTSearch/GptSearchPage";

const LazyMainContainer = React.lazy(() => import("./MovieContainer/MainContainer"));
const LazySecondaryContainer = React.lazy(() => import("./MovieContainer/SecondaryContainer"));

const Browse = () => {
  const [selectedMovie, setSelectedMovie] = useState(null);
  useMoviefetch(2);
  const movies = useSelector((store) => store.movie.nowPlaying.nowPlayingmovies);
  const movies1 = useSelector((store) => store.movie.popular.popularMovies);
  const movies2 = useSelector((store) => store.movie.topRated.topMovies);
  const isShow = useSelector((store) => store?.gptSlice?.gptShow);

  useEffect(() => {
    if (!movies) return;

    const getRandomMovieId = (movies) => {
      if (movies.results.length > 0) {
        const randomIndex = Math.floor(Math.random() * movies.results.length);
        return movies.results[randomIndex].id;
      }
      return null;
    };

    const fetchById = async () => {
      const randomNowPlayingMovieId = getRandomMovieId(movies);
      if (!randomNowPlayingMovieId) return;

      const apiUrl = `https://api.themoviedb.org/3/movie/${randomNowPlayingMovieId}`;
      try {
        const response = await fetch(apiUrl, Api_options);
        const parsedData = await response.json();
        setSelectedMovie(parsedData);
      } catch (error) {
        console.error("Error fetching movie details:", error);
      }
    };

    fetchById();
  }, [movies]);

  // Show Loader initially if selectedMovie is not available
  if (!selectedMovie) return <Loader />;

  return (
    <div className="relative h-screen bg-black">
      <Context.Provider value={{ selectedMovie, movies, movies1, movies2 }}>
        <Header />
        {isShow ? (
          <GptSearchPage />
        ) : (
          <Suspense fallback={<Loader />}>
            <LazyMainContainer />
            <LazySecondaryContainer />
          </Suspense>
        )}
      </Context.Provider>
    </div>
  );
};

export default Browse;


const Loader = () => (
  <div className="flex justify-center items-center h-screen bg-black">
    <div className="w-16 h-16 border-4 border-blue-500 border-dotted rounded-full animate-spin"></div>
  </div>
);