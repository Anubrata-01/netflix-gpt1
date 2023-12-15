import  { useEffect } from 'react'
import { Api_options } from '../Components/constant';
import { useParams } from 'react-router-dom';
import { useDispatch,useSelector } from 'react-redux';
import {addCurrentMovieCredits,addCurrentMovieCast } from '../Redux Store/movieSlice';

const useMoviecredits = () => {
     const { userId } = useParams();
    const dispatch=useDispatch()
    const credits=useSelector((store)=>store?.movie?.movieCredits)
    const cast=useSelector((store)=>store?.movie?.movieCredits?.cast)
    console.log(cast)
    console.log(credits)

    const movieCredits="https://api.themoviedb.org/3/movie/"+userId +"/credits"
    const fetchMovie = async (url) => {
        const data = await fetch(url, Api_options);
        const json = await data.json();
        console.log(json)
        const cast=json.cast.filter((item)=>item.name)
        dispatch(addCurrentMovieCast(cast))
        dispatch(addCurrentMovieCredits(json))
        ;
      };
      useEffect(()=>{
        fetchMovie(movieCredits)
      },[])
}

export default useMoviecredits