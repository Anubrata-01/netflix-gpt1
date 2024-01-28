import React, { useMemo } from 'react'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import Castcard from './Castcard'
import useMoviecredits from '../../CustomHooks/useMoviecredits'

const CastSection = ({userId}) => {
 useMoviecredits(userId)
 const casts=useSelector((store)=>store?.movie?.movieCredits?.cast)
 console.log(casts)
 const filterdcast = useMemo(() => casts?.filter((item)=>item.profile_path), [casts])
 const Url="https://image.tmdb.org/t/p/w500"

 return (
    <div className=' mt-1 overflow-x-scroll no-scrollbar'>
      <div className=' ml-52 flex'>
        {
          filterdcast?.map((actor)=>(
            <NavLink key={actor.id} to={"/movie/"+ actor.name}>
              <Castcard Url={Url} path={actor.profile_path} actor={actor}/>
            </NavLink>
          ))
        }
      </div>
    </div>
 )
}


export default CastSection