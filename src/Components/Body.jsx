import React from 'react'
import Browse from './Browse';
import { Login } from './Login';
import Home from './Home';
import ContainerMovieDetails from './MovieContainer/ContainerMovieDetails';
import { createBrowserRouter } from 'react-router-dom';
import { RouterProvider } from 'react-router-dom';
import ActorProfile from './MovieContainer/ActorProfile';
import Similar from './MovieContainer/Similar';
import CurrentMovieVideos from './MovieContainer/CurrentMovieVideos';
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
            path:"/browse/movie/:userId",
            element:<ContainerMovieDetails/>,
            
        },
        {
            path:"/movie/actor",
            element:<ActorProfile/>
            

        },
        {
            path:"/browse/similar/:userId",
            element:<ContainerMovieDetails/>
        }
        
    ])


  return (
    <div>
        <RouterProvider router={AppRouter}/>
    </div>
  )
}

export default Body