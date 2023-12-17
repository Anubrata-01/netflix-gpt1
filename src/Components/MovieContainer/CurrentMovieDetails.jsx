import React from 'react'
import useCurrentMovieDetails from '../../CustomHooks/useCurrentMovieDetails'
import { useSelector } from 'react-redux';
import PopOverComponent from '../../Utilities/PopOverComponent';
import useMoviecredits from '../../CustomHooks/useMoviecredits';

const CurrentMovieDetails = () => {
    useCurrentMovieDetails();
    useMoviecredits()
    const data=useSelector((store)=>store?.movie?.movieDetails?.cureentMovieDetails);
  const cast=useSelector((store)=>store?.movie?.movieCredits?.cast)
//   useCurrentMovieDetails();
    if(data===null){
        return null
    }

    const {
        poster_path,
        overview,
        tagline,
        title,
        vote_average,
        release_date,
        status,
        runtime,
        genres
      } = data;
        const director=cast?.filter((item)=>item?.known_for_department
==="Directing"  )
  const Url = "https://image.tmdb.org/t/p/w200";

  return (
    
        <div className='flex ml-52'>
        <div className="mt-5">
          <img
            className="rounded-lg w-full h-full"
            src={Url + poster_path}
            alt="img"
          />
        </div>
        <div className="mt-4 ml-5">
          <div className="">
            <h1 className="text-lg text-white font-mono">{title}</h1>
            <p className="text-xs">{tagline}</p>
          </div>
          <div className="flex -ml-3 text-sm text-white pt-2">
              {
                genres.map((item)=>
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
          </div>
          <div className="pt-1">
            <p className="text-sm text-white pt-1">
              Status:<span className="text-xs pl-2">{status}</span>
            </p>
            <p className="text-sm text-white pt-2">
              Release date:<span className="text-xs pl-2">{release_date}</span>
            </p>
            <p className="text-sm text-white pt-2">
              RunTime:<span className="text-xs pl-2">{runtime}</span>
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
              director?.map((item)=>(
                <div key={item.id} className="flex pl-3 text-sm text-white">
                  <p>{item.name}</p>
                </div>
              ))
            }
          </div>
        </div>
      </div>
    
  )
}

export default CurrentMovieDetails