import React, { useEffect } from 'react'
import { Api_options } from '../Components/constant';
import { useDispatch, useSelector } from 'react-redux';
import { addTvShows } from '../Redux Store/movieSlice';


const useTvShows = () => {
 const Tv_Url="https://api.themoviedb.org/3/tv/airing_today";

 const dispatch=useDispatch()
 const TvShow=useSelector((store)=>store?.movie?.TvShows)
 console.log(TvShow)
 const fetchTvShows=async(url)=>{
    const data=await fetch(url,Api_options);
    const ParseData=await data.json()
    dispatch(addTvShows(ParseData))
 }
 useEffect(()=>{
    fetchTvShows(Tv_Url)
 },[])     
}

export default useTvShows