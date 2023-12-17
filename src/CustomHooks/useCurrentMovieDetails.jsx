import { useEffect } from "react";
import { Api_options } from "../Components/constant";
import {
  addCurrentMovieDetails,
  addCurrentMovieTrailer,
} from "../Redux Store/movieSlice";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const useCurrentMovieDetails = () => {
  const { userId } = useParams();

  const dispatch = useDispatch();
  const currentMovieUrl = "https://api.themoviedb.org/3/movie/" + userId;
  const currentMovieTrailer =
    "https://api.themoviedb.org/3/movie/" + userId + "/videos";

  const fetchMovieDetailsById = async (url) => {
    const data = await fetch(url, Api_options);
    const json = await data.json();
    dispatch(addCurrentMovieDetails(json));
  };
  const fetchMovieByTrailer = async (url) => {
    const data = await fetch(url, Api_options);
    const json1 = await data.json();
    const trailerVideo = json1?.results?.filter(
      (item) => item.type === "Trailer"
    );
    dispatch(addCurrentMovieTrailer(trailerVideo));
  };
  useEffect(() => {
    fetchMovieDetailsById(currentMovieUrl);
    fetchMovieByTrailer(currentMovieTrailer);
  }, []);
};

export default useCurrentMovieDetails;
