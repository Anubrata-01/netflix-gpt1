
import React from 'react'

const MovidCard = ({path}) => {
  
    const Url="https://image.tmdb.org/t/p/w200"
  return (
    <div className="">
        <div className='w-40 pr-4 rounded-md cursor-pointer'>
            <img  className='rounded-md' src={Url + path} alt="" />
        </div>

    </div>
  )
}

export default MovidCard
