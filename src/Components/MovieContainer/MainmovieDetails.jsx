import React from 'react'

const MainmovieDetails = ({title,overview}) => {
  return (
    <div className='pt-32 pl-16 absolute z-10 bg-gradient-to-r from-black'>
        <div className='text-red-600 text-6xl font-bold'>{title}</div>
        <div className='text-white pt-4 w-2/4'>{overview}</div>
        <div className='pt-4'>
            <button className='w-24 bg-white rounded-md text-black p-1 hover:bg-opacity-80'>▶️ Play</button>
            <button className=' ml-2 w-24 bg-gray-500  rounded-md text-white p-1  pl-2 bg-opacity-50'>Info</button>
            
        </div>
    </div>
  )
}

export default MainmovieDetails