import { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { Api_options } from '../Components/constant';
import { addMovieGenre } from '../Redux Store/movieSlice';

const useFetchMovieGenre = () => {
    const dispatch=useDispatch();
    const url= "https://api.themoviedb.org/3/genre/movie/list"
    const fetchMovies= async(url)=>{
       const data=await fetch(url,Api_options)
       const Jsondata=await data.json();
       dispatch(addMovieGenre(Jsondata))
    }
    useEffect(()=>{
       fetchMovies(url)
    },[])
}

export default useFetchMovieGenre