import React, { Suspense } from "react";

const LazyLoadedMovidCard = React.lazy(() => import("./MovidCard"));

const MovieSection = ({ movies, title, rpath }) => {
  return (
    <>
      <h1 className="relative z-10 text-white pl-5 -mt-2 font-bold">{title}</h1>
      <div className="w-full pl-5 pb-3  overflow-x-scroll no-scrollbar">
        <div className=" pt-2">
          <div className="flex relative space-x-2 overflow-scroll no-scrollbar ">
            {movies?.results ? (
              movies.results.map((item, index) => (
                <div key={item?.id}>
                  <Suspense fallback={<div>Loading...</div>}>
                    <LazyLoadedMovidCard moviedetails={item} rpath={rpath} />
                  </Suspense>
                </div>
              ))
            ) : (
              movies?.map((item, index) => (
                <div key={item?.id}>
                  <Suspense fallback={<div>Loading...</div>}>
                    <LazyLoadedMovidCard moviedetails={item} rpath={rpath} />
                  </Suspense>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default MovieSection;

                    