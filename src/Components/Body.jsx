import React from 'react'
import Browse from './Browse';
import { Login } from './Login';
import Home from './Home';
import ContainerMovieDetails from './MovieContainer/ContainerMovieDetails';
import { createBrowserRouter } from 'react-router-dom';
import { RouterProvider } from 'react-router-dom';
import ActorProfile from './MovieContainer/ActorProfile';
// import Tvshow from './MovieContainer/Tvshow';
import Movies from './MovieContainer/Movies';
import GenreSection from './MovieContainer/GenreSection';
import MyList from './Page/MyList';
import SimilarContainer from './Page/SimilarContainer';
import Player from './Page/Player';
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
            path:"/player",
            element:<Player/>,
            
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
            path:"/movie/similar/:userId",
            element:<SimilarContainer/>
        },
        {
            path:"/browse/movies",
            element:<Movies/>
        },
        {
            path:"/browse/movies/:genreId",
            element:<GenreSection/>
        },
        {
            path:"/list",
            element:<MyList/>
        }
        
    ])


  return (
    <div>
        <RouterProvider router={AppRouter}/>
    </div>
  )
}

export default Body