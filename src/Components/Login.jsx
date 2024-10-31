import React from 'react'
import { SignInThree } from './LoginForm'
 const Login = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Netflix Logo */}
      <div className="absolute top-4 left-8 sm:left-5 z-40">
        <img
          className="w-32 h-10"
          src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
          alt="Netflix Logo"
        />
      </div>

      {/* Background Image */}
      <div>
        <img
          className="absolute top-0 left-0 w-full h-full object-cover"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/d1532433-07b1-4e39-a920-0f08b81a489e/67033404-2df8-42e0-a5a0-4c8288b4da2c/IN-en-20231120-popsignuptwoweeks-perspective_alpha_website_small.jpg"
          alt="Background"
        />
        <div className="absolute inset-0 bg-black opacity-70"></div>
      </div>

      {/* Login Form */}
      <div className="relative z-20 flex items-center justify-center h-full">
        <div className="w-full max-w-md bg-black bg-opacity-80 p-8 rounded-lg">
          <SignInThree />
        </div>
      </div>
    </div>
  )
}

export default Login;