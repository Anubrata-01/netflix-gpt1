import { useEffect } from 'react'
import { useDispatch} from 'react-redux'
import { addSimilarMovies } from '../Redux Store/movieSlice'
import { Api_options } from '../Components/constant'
const useSimilarVideos = (userId) => {
    const dispatch=useDispatch()
 const similar_Url="https://api.themoviedb.org/3/movie/"+ userId +"/similar"
 const fetchBysimilarvideo=async(url)=>{
    const movies=await fetch(url,Api_options);
    const JsonMovies=await movies.json();
    dispatch(addSimilarMovies(JsonMovies))

 }
 useEffect(()=>{
    fetchBysimilarvideo(similar_Url)
},[])
}

export default useSimilarVideos