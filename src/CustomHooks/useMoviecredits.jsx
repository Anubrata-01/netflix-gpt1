import  { useEffect } from 'react'
import { Api_options } from '../Components/constant';
import { useDispatch,} from 'react-redux';
import {addCurrentMovieCast, addCurrentMovieCredits } from '../Redux Store/movieSlice';

const useMoviecredits = (movieCreditsUrl) => {
    const dispatch=useDispatch();
    useEffect(()=>{
      const fetchMovieForMovieCredits=async()=>{
        const movieCredits=await fetch(movieCreditsUrl,Api_options);
        const parseMovieCredits=await movieCredits.json();
        const cast=parseMovieCredits?.cast?.filter((item)=>item.name)
        dispatch(addCurrentMovieCredits(parseMovieCredits))
        dispatch(addCurrentMovieCast(cast))
      };
      fetchMovieForMovieCredits();
    },[movieCreditsUrl,dispatch])
}

export default useMoviecredits