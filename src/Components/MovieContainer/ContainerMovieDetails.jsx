import { useNavigate, useParams } from "react-router-dom";
import CastSection from "./CastSection";
import CurrentMovieVideos from "./CurrentMovieVideos";
import { useEffect, useState } from "react";
import useMoviecredits from "../../CustomHooks/useMoviecredits";
import { useDispatch, useSelector } from "react-redux";
import { Api_options } from "../constant";
import PopOverComponent from "../../Utilities/PopOverComponent";
import { FaArrowLeft } from "react-icons/fa";
import { MdAddBox,MdFileDownloadDone } from "react-icons/md";
import { addToMyList } from "../../Redux Store/movieSlice";
const ContainerMovieDetails = () => {
  const navigate=useNavigate()
  const dispatch=useDispatch()
  const [movieDetails, setMovieDetails] = useState(null);
  const [isshow,setIsshow]=useState(false)
  const { userId } = useParams();
  const Url = "https://image.tmdb.org/t/p/w200";
  useMoviecredits()
  const cast=useSelector((store)=>store?.movie?.movieCredits?.cast)
  const fetchMovieById = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/" + userId,
      Api_options
    );
    const json = await data.json();
    setMovieDetails(json);
  };
  
  useEffect(() => {
    fetchMovieById();
  }, []);
  const addToList=()=>{
    dispatch(addToMyList(movieDetails))
    setIsshow(!isshow)
    console.log("ok")
  }
  if (!movieDetails) {
    return null;
  }
  console.log(movieDetails);

  const {
    poster_path,
    overview,
    tagline,
    title,
    vote_average,
    release_date,
    status,
    runtime,
    genres,
    id
  } = movieDetails;
  const data=cast?.filter((item)=>item?.known_for_department
==="Directing"  )
console.log(data)


  return (
    <div className="w-full h-full bg-slate-800 relative overflow-x-scroll no-scrollbar ">
      <div className="">
            <button onClick={()=>navigate("/browse")} className="absolute left-14 top-8"><FaArrowLeft size={25}/></button>

      </div>
      <div className="flex ml-52">
        <div className="mt-5">
          <img
            className="rounded-lg w-full h-full"
            src={Url + poster_path}
            alt="img"
          />
        </div>
        <div className="mt-4 ml-5 ">
          <div className="">
            <h1 className="text-lg text-white font-mono">{title}</h1>
            <p className="text-xs text-white font-bold">{tagline}</p>
          </div>
          <div className="flex -ml-3 text-sm text-white pt-2">
              {
                genres?.map((item)=>
                  <p key={item.id} className="pl-3">{item.name}</p>
                )
              }
          </div>
          <div className="flex pt-2">
            <p className="text-sm text-white font-bold">
              {vote_average.toFixed(1)} star
            </p>
            <p className=" ml-5 text-white text-sm font-medium">
              <PopOverComponent/>
            </p>
            <button className="ml-5 -mt-1 text-white"onClick={addToList}>
              {!isshow?<MdAddBox size={40}/>:<MdFileDownloadDone size={40}/>}
            </button>
          </div>
          <div className="pt-1">
            <p className="text-sm text-white pt-1">
              Status:<span className="text-xs pl-2">{status}</span>
            </p>
            <p className="text-sm text-white pt-2">
              Release date:<span className="text-xs pl-2">{release_date}</span>
            </p>
            <p className="text-sm text-white pt-2">
              RunTime:<span className="text-xs pl-2">{runtime}m</span>

            </p>
          </div>
          <div className="max-w-2xl mx-auto pt-3">
            <p className="text-sm text-white overflow-hidden whitespace-no-wrap overflow-ellipsis">
             {overview}
            </p>
          </div>
          <div className="flex text-sm font-semibold text-white pt-2">
            Director:
            {
              data?.map((item)=>(
                
                <div key={item.id} className="flex pl-3 text-sm text-white">
                  <p>{item.name}</p>
                </div>
              ))
            }
          </div>
        </div>
      </div>
      <div>
      <p className='ml-52 mt-2 text-lg text-teal-500 font-bold'>Cast:</p>
      </div>
      <CastSection userId={userId}/> 
      <div>
        <p className="ml-52 text-lg text-teal-500 font-bold">More Videos</p>
      <CurrentMovieVideos/>

      </div>
      {/* <div>
        <p className="ml-52 mt-3 text-teal-500 font-bold">Similar Videos:</p>
        <div className="w-full bg-inherit overflow-x-scroll no-scrollbar">
        <SimilarMovieSection/>

        </div>
        {/* <SimilarMovieSection/> */}
      {/* </div> */}
    </div>
  );
};

export default ContainerMovieDetails ;
