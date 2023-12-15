import React from 'react'

const Castcard = ({Url,path,actor}) => {
  return (
    <div className="">
        <div className='w-32 pr-4 rounded-md cursor-pointer'>
            <img  className='rounded-md' src={Url + path} alt="" />
            <p className=' text-white'>{actor.name}</p>
        </div>

    </div>
  )
}

export default Castcard