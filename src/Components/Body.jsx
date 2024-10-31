import React, { Suspense } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

// Lazy-loaded components
const Browse = React.lazy(() => import('./Browse'));
const Login = React.lazy(() => import('./Login'));
const Home = React.lazy(() => import('./Home'));
const ContainerMovieDetails = React.lazy(() => import('./MovieContainer/ContainerMovieDetails'));
const ActorProfile = React.lazy(() => import('./MovieContainer/ActorProfile'));
// const Tvshow = React.lazy(() => import('./MovieContainer/Tvshow'));
const Movies = React.lazy(() => import('./MovieContainer/Movies'));
const GenreSection = React.lazy(() => import('./MovieContainer/GenreSection'));
const MyList = React.lazy(() => import('./Page/MyList'));
// const SimilarContainer = React.lazy(() => import('./Page/SimilarContainer'));
const Player = React.lazy(() => import('./Page/Player'));

// Loader component
export const Loader = () => (
  <div className="flex justify-center items-center h-screen bg-black">
    <div className="w-16 h-16 border-4 border-blue-500 border-dotted rounded-full animate-spin"></div>
  </div>
);

const Body = () => {
  const AppRouter = createBrowserRouter([
    {
      path: '/',
      element: (
        <Suspense fallback={<Loader />}>
          <Home />
        </Suspense>
      ),
    },
    {
      path: '/home/login',
      element: (
        <Suspense fallback={<Loader />}>
          <Login />
        </Suspense>
      ),
    },
    {
      path: '/browse',
      element: (
        <Suspense fallback={<Loader />}>
          <Browse />
        </Suspense>
      ),
    },
    {
      path: '/player',
      element: (
        <Suspense fallback={<Loader />}>
          <Player />
        </Suspense>
      ),
    },
    {
      path: '/browse/movie/:userId',
      element: (
        <Suspense fallback={<Loader />}>
          <ContainerMovieDetails />
        </Suspense>
      ),
    },
    {
      path: '/movie/actor',
      element: (
        <Suspense fallback={<Loader />}>
          <ActorProfile />
        </Suspense>
      ),
    },
    {
      path: '/browse/movies',
      element: (
        <Suspense fallback={<Loader />}>
          <Movies />
        </Suspense>
      ),
    },
    {
      path: '/browse/movies/:genreId',
      element: (
        <Suspense fallback={<Loader />}>
          <GenreSection />
        </Suspense>
      ),
    },
    {
      path: '/list',
      element: (
        <Suspense fallback={<Loader />}>
          <MyList />
        </Suspense>
      ),
    },
  ]);

  return (
    <div>
      <RouterProvider router={AppRouter} />
    </div>
  );
};

export default Body;
