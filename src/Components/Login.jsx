import React from 'react'
// import Header from './Header'
import { SignInThree } from './LoginForm'
export const Login = () => {
  return (
    <div className=' relative w-full h-screen '>
        <div className="absolute top-1 left-36 z-10 sm:left-5 ">
        <img className='w-33 h-10' src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png" alt="Netflis Img" />
        </div>
        <div>
        <img className=' absolute w-full h-full object-cover' src="https://assets.nflxext.com/ffe/siteui/vlv3/d1532433-07b1-4e39-a920-0f08b81a489e/67033404-2df8-42e0-a5a0-4c8288b4da2c/IN-en-20231120-popsignuptwoweeks-perspective_alpha_website_small.jpg" alt="background img" />
          <div className=" bg-black/70 fixed  left-0 w-full h-screen"/>
        </div>
        <div className=' absolute left-50 sm:left-80 top-32 sm:-top-10'>
            <SignInThree/>
        </div>
    </div>
  )
}
