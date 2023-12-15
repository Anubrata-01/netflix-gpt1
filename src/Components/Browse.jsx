import React from 'react'
import Header from './Header'
import useMoviefetch from '../CustomHooks/useMoviefetch'
import MainContainer from './MovieContainer/MainContainer'
import SecondaryContainer from './MovieContainer/SecondaryContainer'
const Browse = () => {
  useMoviefetch()
  return (
    <div className='relative bg-black'>
      <Header/>
      <MainContainer/>
      <SecondaryContainer/>
    </div>
  )
}

export default Browse