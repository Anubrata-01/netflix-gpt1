import  { useEffect } from 'react'
import { Api_options } from '../Components/constant';

const useFetchMovieById = (userId,setMovieDetails) => {
    useEffect(() => {
        const fetchMovieById = async () => {
          const data = await fetch(
            "https://api.themoviedb.org/3/movie/" + userId,
            Api_options
          );
          const json = await data.json();
          setMovieDetails(json);
        };
    
        fetchMovieById();
     }, [userId, setMovieDetails]);
}

export default useFetchMovieById