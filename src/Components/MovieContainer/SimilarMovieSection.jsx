import { useDispatch, useSelector } from "react-redux";
import useFetchSimilarMovies from "../../CustomHooks/useFetchSimilarMovies";
import { useMemo } from "react";
import MovidCard from "./MovidCard";

const SimilarMovieSection = ({ similar }) => {
  const dispatch = useDispatch();
  const similar_Url = useMemo(() => {
    return "https://api.themoviedb.org/3/movie/" + similar + "/similar";
 }, [similar]);
  useFetchSimilarMovies(similar_Url, dispatch);
  const Similar = useSelector((store) => store?.movie?.similarMovies);
  return (
    <div className="ml-52 mt-2 flex">
      {Similar?.results?.map((similar) =><MovidCard moviedetails={similar}/>)}
    </div>
  );
};

export default SimilarMovieSection;
