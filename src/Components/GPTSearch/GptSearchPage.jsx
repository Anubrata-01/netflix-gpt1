import React from 'react'
import GptSearchBar from './GptSearchBar'
import GptMovieSuggestions from './GptMovieSuggestions'
import runChat from '../../Utilities/openai'

const GptSearchPage = () => {
  // runChat("what is react")
  return (
    <div className=''>
         <div className='fixed '>
          <img className=' h-screen sm:w-screen object-cover ' src="https://assets.nflxext.com/ffe/siteui/vlv3/d1532433-07b1-4e39-a920-0f08b81a489e/67033404-2df8-42e0-a5a0-4c8288b4da2c/IN-en-20231120-popsignuptwoweeks-perspective_alpha_website_small.jpg" alt="background img" />
          {/* <div className=" bg-black/90 fixed top-0 left-0 w-full "/> */}
        </div>
        <div>
        <GptSearchBar/>
        <GptMovieSuggestions/>
        </div>
        
    </div>
  )
}

export default GptSearchPage