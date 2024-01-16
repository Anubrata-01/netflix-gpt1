import { useDispatch } from 'react-redux'
import { Api_options } from '../Components/constant';
import { addmoviesToMovieSection } from '../Redux Store/movieSlice';
import { useEffect } from 'react';

const useFetchMovieForMovies = (value=2) => {
 const dispatch=useDispatch();
 const url=`https://api.themoviedb.org/3/movie/top_rated?language=en-Us&page=${value}`
 const fetchMovies= async(url)=>{
    const data=await fetch(url,Api_options)
    const Jsondata=await data.json();
    dispatch(addmoviesToMovieSection(Jsondata))
 }
 useEffect(()=>{
    fetchMovies(url)
 },[])
}

export default useFetchMovieForMovies