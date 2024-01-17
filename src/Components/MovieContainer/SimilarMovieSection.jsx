import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import MovidCard from "./MovidCard";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
// import useSimilarVideos from '../../CustomHooks/useSimilarVideos'
import { addSimilarMovies } from "../../Redux Store/movieSlice";
import { Api_options } from "../constant";

const SimilarMovieSection = ({ similar }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const similar_Url =
    "https://api.themoviedb.org/3/movie/" + similar + "/similar";
  const fetchBysimilarvideo = async (url) => {
    const movies = await fetch(url, Api_options);
    const JsonMovies = await movies.json();
    dispatch(addSimilarMovies(JsonMovies));
  };
  useEffect(() => {
    fetchBysimilarvideo(similar_Url);
  }, []);
  const Similar = useSelector((store) => store?.movie?.similarMovies);
  console.log(Similar);
  const Url = "https://image.tmdb.org/t/p/w500";

  return (
    <div className="ml-52 mt-2 flex">
      {Similar?.results?.map((similar) => (
        <NavLink key={similar?.id} to={"/movie/similar/"+similar?.id}>
          {/* <MovidCard  moviedetails={similar}/> */}
          <div>
            <div className="w-[175px] h-[114px] relative pl-2">
              <img
                className="w-full h-[114px] object-cover rounded-sm"
                src={Url + similar?.poster_path}
                alt=""
              />
            </div>
          </div>
          {/* navigate("/") */}
        </NavLink>
      ))}
    </div>
  );
};

export default SimilarMovieSection;
