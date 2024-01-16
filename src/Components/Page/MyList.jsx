import React from 'react'
import { useSelector } from 'react-redux'
import MovidCard from '../MovieContainer/MovidCard'

const MyList = () => {
    const list=useSelector((store)=>store?.movie?.MyList)
    console.log(list)
  return (
    <div className='w-full h-screen bg-gray-700'>
        <h1 className='text-white font-extrabold pt-6 flex justify-center text-2xl'>MyList</h1>
        <div className="flex relative space-x-2 pt-5 pl-5 ">
            {list?.map((item, index) => (
              <>
                  <div key={item?.id}>
                    <MovidCard
                      moviedetails={item}
                    />
                    <p className='text-white text-sm'>{item?.original_title}</p>
                  </div>
              </>
            ))}
          </div>

    </div>
  )
}

export default MyList