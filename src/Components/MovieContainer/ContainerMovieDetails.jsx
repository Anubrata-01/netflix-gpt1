import { useNavigate, useParams } from "react-router-dom";
import CastSection from "./CastSection";
import CurrentMovieVideos from "./CurrentMovieVideos";
import { useCallback, useMemo, useState } from "react";
import useMoviecredits from "../../CustomHooks/useMoviecredits";
import { useDispatch, useSelector } from "react-redux";
import PopOverComponent from "../../Utilities/PopOverComponent";
import { FaArrowLeft } from "react-icons/fa";
import { MdAddBox, MdFileDownloadDone } from "react-icons/md";
import { addToMyList } from "../../Redux Store/movieSlice";
import DirectionSection from "./DirectionSection";
import SimilarMovieSection from "./SimilarMovieSection";
import useFetchMovieById from "../../CustomHooks/useFetchMovieById";
const ContainerMovieDetails = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [movieDetails, setMovieDetails] = useState(null);
  const [isshow, setIsshow] = useState(false);
  const { userId } = useParams();
  const Url = "https://image.tmdb.org/t/p/w200";
  useMoviecredits();
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
  console.log(movieDetails);

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
    id
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
      <div className="flex flex-col sm:flex sm:flex-row sm:ml-52">
        <div className="mt-5">
          <img
            className="rounded-lg w-full h-full"
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
            <DirectionSection directors={directors} />
          </div>
        </div>
      </div>
      <div className="-ml-48 sm:ml-0">
        <p className="ml-52 mt-2 text-lg text-teal-500 font-bold">Cast:</p>
        <CastSection userId={userId} />
      </div>
      {/* <CastSection userId={userId}/>  */}
      <div className="-ml-48 sm:ml-0">
        <p className="ml-52 text-lg text-teal-500 font-bold">More Videos</p>
        <div>
          <CurrentMovieVideos />
        </div>
        {/* <CurrentMovieVideos/> */}
      </div>
      <div className="-ml-48 sm:ml-0">
        <p className="ml-52 mt-3 text-teal-500 font-bold">Similar Videos:</p>
        <div className="w-full bg-inherit overflow-x-scroll no-scrollbar">
          <SimilarMovieSection similar={userId} />
        </div>
      </div>
    </div>
  );
};

export default ContainerMovieDetails;
