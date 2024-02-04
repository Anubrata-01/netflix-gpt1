import { useEffect } from "react";
import { Api_options } from "../Components/constant";
import {
  addCurrentMovieTrailer,
} from "../Redux Store/movieSlice";
import { useDispatch,} from "react-redux";
;

const useCurrentMovieDetails = (url) => {
  const dispatch = useDispatch();
  useEffect(()=>{
    const movievideos=async()=>{
      const video=await fetch(url,Api_options);
      const data=await video.json();
      dispatch(addCurrentMovieTrailer(data));
    }
    movievideos()
  },[dispatch,url])
};

export default useCurrentMovieDetails;
