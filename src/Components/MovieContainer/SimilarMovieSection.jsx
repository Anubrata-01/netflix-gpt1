import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import useFetchSimilarMovies from "../../CustomHooks/useFetchSimilarMovies";
import { useMemo } from "react";
import useMoviecredits from "../../CustomHooks/useMoviecredits";

const SimilarMovieSection = ({ similar }) => {
  const dispatch = useDispatch();

  const similar_Url = useMemo(() => {
    return "https://api.themoviedb.org/3/movie/" + similar + "/similar";
 }, [similar]);
  useFetchSimilarMovies(similar_Url, dispatch);
  useMoviecredits(similar)

  const Similar = useSelector((store) => store?.movie?.similarMovies);
  console.log(Similar);
  const Url = "https://image.tmdb.org/t/p/w500";

  return (
    <div className="ml-52 mt-2 flex">
      {Similar?.results?.map((similar) => (
        <NavLink key={similar?.id} to={"/browse/movie/" + similar?.id}>
          <div>
            <div className="w-[175px] h-[114px] relative pl-2">
              <img
                className="w-full h-[114px] object-cover rounded-sm"
                src={Url + similar?.poster_path}
                alt=""
              />
            </div>
          </div>
        </NavLink>
      ))}
    </div>
  );
};

export default SimilarMovieSection;
