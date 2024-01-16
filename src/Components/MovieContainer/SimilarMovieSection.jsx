import React from 'react'
import { useSelector } from 'react-redux'
import MovidCard from './MovidCard'
import { NavLink } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

const SimilarMovieSection = () => {
  const navigate=useNavigate();
    const Similar=useSelector((store)=>store?.movie?.similarMovies
    )
    console.log(Similar)
  return (
    <div className='ml-48 mt-2 flex'>
        {
        Similar?.results?.map((similar)=>(
         
            <NavLink key={similar?.id}  onClick={()=>navigate(`/browse/movie/${similar?.id}`)}>
                <MovidCard path={similar?.poster_path} title={similar?.title}/>
             {/* navigate("/") */}
            </NavLink>
            
        ))
        }
    </div>
  )
}

export default SimilarMovieSection