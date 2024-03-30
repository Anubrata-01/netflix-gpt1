import React, { Suspense } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useCallback, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import PopOverComponent from "../../Utilities/PopOverComponent";
import { FaArrowLeft } from "react-icons/fa";
import { MdAddBox, MdFileDownloadDone } from "react-icons/md";
import { addToMyList } from "../../Redux Store/movieSlice";
import useFetchMovieById from "../../CustomHooks/useFetchMovieById";

// Lazily import components
const LazyCastSection = React.lazy(() => import("./CastSection"));
const LazyCurrentMovieVideos = React.lazy(() => import("./CurrentMovieVideos"));
const LazyDirectionSection = React.lazy(() => import("./DirectionSection"));
const LazySimilarMovieSection = React.lazy(() => import("./SimilarMovieSection"));

const ContainerMovieDetails = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [movieDetails, setMovieDetails] = useState(null);
  const [isshow, setIsshow] = useState(false);
  const { userId } = useParams();
  console.log(userId)
  const Url = "https://image.tmdb.org/t/p/w200";
  useFetchMovieById(userId, setMovieDetails);
  const cast = useSelector((store) => store?.movie?.movieCredits?.cast);
  const directors = useMemo(() => {
    return cast?.filter((item) => item?.known_for_department === "Directing");
  }, [cast]);

  const addToList = useCallback(() => {
    dispatch(addToMyList(movieDetails));
    setIsshow(!isshow);
    console.log("ok");
  }, [dispatch, movieDetails, isshow, setIsshow]);

  if (!movieDetails) {
    return null;
  }

  const {
    poster_path,
    overview,
    tagline,
    title,
    vote_average,
    release_date,
    status,
    runtime,
    genres,
  } = movieDetails;

  return (
    <div className="w-full h-full bg-slate-800 relative overflow-x-scroll no-scrollbar sm:overflow-scroll sm:no-scrollbar">
      <div className="">
        <button
          onClick={() => navigate("/browse")}
          className="absolute left-14 top-8"
        >
          <FaArrowLeft size={25} />
        </button>
      </div>
      <div className="flex flex-col sm:flex sm:flex-row sm:ml-20">
        <div className="mt-5">
          <img
            className="rounded-lg w-full h-auto object-cover sm:object-cover"
            src={Url + poster_path}
            alt="img"
          />
        </div>
        <div className="mt-4 ml-5 ">
          <div className="">
            <h1 className="text-lg text-white font-mono">{title}</h1>
            <p className="text-xs text-white font-bold">{tagline}</p>
          </div>
          <div className="flex -ml-3 text-sm text-white pt-2">
            {genres?.map((item) => (
              <p key={item.id} className="pl-3">
                {item.name}
              </p>
            ))}
          </div>
          <div className="flex pt-2">
            <p className="text-sm text-white font-bold">
              {vote_average.toFixed(1)} star
            </p>
            <p className=" ml-5 text-white text-sm font-medium">
              <PopOverComponent />
            </p>
            <button className="ml-5 -mt-1 text-white" onClick={addToList}>
              {!isshow ? (
                <MdAddBox size={40} />
              ) : (
                <MdFileDownloadDone size={40} />
              )}
            </button>
          </div>
          <div className="pt-1">
            <p className="text-sm text-white pt-1">
              Status:<span className="text-xs pl-2">{status}</span>
            </p>
            <p className="text-sm text-white pt-2">
              Release date:<span className="text-xs pl-2">{release_date}</span>
            </p>
            <p className="text-sm text-white pt-2">
              RunTime:<span className="text-xs pl-2">{runtime}m</span>
            </p>
          </div>
          <div className="max-w-2xl mx-auto pt-3">
            <p className="text-sm text-white overflow-hidden whitespace-no-wrap overflow-ellipsis">
              {overview}
            </p>
          </div>
          <div className="flex text-sm font-semibold text-white pt-2">
            Director:
            <Suspense fallback={<div>Loading...</div>}>
              <LazyDirectionSection directors={directors} />
            </Suspense>
          </div>
        </div>
      </div>
      <div className="-ml-48 sm:-ml-32">
        <p className="ml-52 mt-2 text-lg text-teal-500 font-bold">Cast:</p>
        <Suspense fallback={<div>Loading...</div>}>
          <LazyCastSection userId={userId} />
        </Suspense>
      </div>
      <div className="-ml-48 sm:-ml-32">
        <p className="ml-52 text-lg text-teal-500 font-bold">More Videos</p>
        <div>
          <Suspense fallback={<div>Loading...</div>}>
            <LazyCurrentMovieVideos userId={userId} />
          </Suspense>
        </div>
      </div>
      <div className="-ml-48 sm:-ml-32">
        <p className="ml-52 mt-3 text-teal-500 font-bold">Similar Videos:</p>
        <div className="w-full bg-inherit overflow-x-scroll no-scrollbar">
          <Suspense fallback={<div>Loading...</div>}>
            <LazySimilarMovieSection similar={userId} />
          </Suspense>
        </div>
      </div>
    </div>
  );
};

export default ContainerMovieDetails;

