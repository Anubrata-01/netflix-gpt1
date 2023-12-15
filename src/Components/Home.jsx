import React from 'react'
import Header from './Header'
import About from './About'
const Home = () => {
  return (
    <>  
    <div className='bg-gradient-to-r from-black relative z-10  -top-1'>
        <Header/>
        <About/>
        <div className=''>
          <img className='absolute top-0 -z-10' src="https://assets.nflxext.com/ffe/siteui/vlv3/d1532433-07b1-4e39-a920-0f08b81a489e/67033404-2df8-42e0-a5a0-4c8288b4da2c/IN-en-20231120-popsignuptwoweeks-perspective_alpha_website_small.jpg" alt="background img" />
        </div>
    </div>
    </>
  )
}

export default Home