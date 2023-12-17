import React from 'react'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import Castcard from './Castcard'
import useMoviecredits from '../../CustomHooks/useMoviecredits'

const CastSection = ({userId}) => {
  useMoviecredits()
    const casts=useSelector((store)=>store?.movie?.movieCredits?.cast)
    const filterdcast=casts?.filter((item)=>item.popularity>=2)
    console.log(casts);
    console.log(filterdcast)
    const Url="https://image.tmdb.org/t/p/w200"
    
  return (
    <div className=' mt-4 overflow-x-scroll no-scrollbar'>
    <div className=' ml-52 flex'>
        {
          casts?.map((actor)=>(
            <NavLink key={actor.id} to={"/movie/"+actor.name}>
              <Castcard Url={Url} path={actor.profile_path
} actor={actor}/>
            </NavLink>
          ))
        }
    </div>
    </div>
  )
}

export default CastSection