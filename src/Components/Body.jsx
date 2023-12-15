import React from 'react'
import Browse from './Browse';
import { Login } from './Login';
import Home from './Home';
import MovieDetails from './MovieContainer/MovieDetails';
import { createBrowserRouter } from 'react-router-dom';
import { RouterProvider } from 'react-router-dom';
import ActorProfile from './MovieContainer/ActorProfile';
const Body = () => {
    const AppRouter=createBrowserRouter([
        {
            path:"/",
            element:<Home/>
        },
        {
            path:"/home/login",
            element:<Login/>
        },
        {
            path:"/browse",
            element:<Browse/>
        },
        {
            path:"/movie/:userId",
            element:<MovieDetails/>
        },
        {
            path:"/movie/actor",
            element:<ActorProfile/>

        }

    ])


  return (
    <div>
        <RouterProvider router={AppRouter}/>
    </div>
  )
}

export default Body