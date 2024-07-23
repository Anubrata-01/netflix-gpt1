import React, { useState, useEffect } from 'react';
import { ClipLoader } from 'react-spinners';
import Header from './Header';
import About from './About';

const Home = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate a loading time
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // 2 seconds loading time

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="w-full h-screen flex justify-center items-center bg-black">
        <ClipLoader color="#ffffff" loading={loading} size={50} />
      </div>
    );
  }

  return (
    <div className="w-full h-screen overflow-x-hidden overflow-y-hidden sm:w-full sm:h-screen relative">
      <Header />
      <About />
      <div className="">
        <img
          className="absolute w-full h-full sm:w-full sm:h-full object-cover -top-1"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/d1532433-07b1-4e39-a920-0f08b81a489e/67033404-2df8-42e0-a5a0-4c8288b4da2c/IN-en-20231120-popsignuptwoweeks-perspective_alpha_website_small.jpg"
          alt="background img"
        />
        <div className="bg-black/70 fixed top-0 left-0 w-full" />
      </div>
    </div>
  );
};

export default Home;
