import  { useEffect } from 'react'
import { Api_options } from '../Components/constant';
import { addSimilarMovies } from '../Redux Store/movieSlice';

const useFetchSimilarMovies = (similar_Url,dispatch) => {
    useEffect(() => {
        const fetchBysimilarvideo = async () => {
          const movies = await fetch(similar_Url, Api_options);
          const JsonMovies = await movies.json();
          dispatch(addSimilarMovies(JsonMovies));
        };
       
    
        fetchBysimilarvideo();
     }, [similar_Url, dispatch]);
}

export default useFetchSimilarMovies