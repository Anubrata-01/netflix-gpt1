import { Button, FilmIcon, Pane, SelectMenu } from "evergreen-ui";
import React, { useState } from "react";
import useFetchMovieGenre from "../CustomHooks/useFetchMovieGenre";
import useFetchMovieByGenreId from "../CustomHooks/useFetchMovieByGenreId";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addMoviesBasedOnGenreId,addGenreId } from "../Redux Store/movieSlice";
import { Api_options } from "../Components/constant";

const CustomPlaceholderAndIconSelectMenuExample = () => {
  const [selected, setSelected] = useState(null);
  const [selectedId, setSelectedId] = useState(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const genres = useSelector((store) => store?.movie?.MovieGenre);

  const handleGenreSelection = async (item) => {
    try{

  
      if (item.id) {
        const moviesUrl = `https://api.themoviedb.org/3/discover/movie?&with_genres=${item.id}`;
        const moviesResponse = await fetch(moviesUrl, Api_options);
        const moviesData = await moviesResponse.json();

        dispatch(addMoviesBasedOnGenreId(moviesData));
      } else {
        dispatch(addMoviesBasedOnGenreId(null));
      }
      setSelected(item.value);
      setSelectedId(item.id);
      dispatch(addGenreId(item?.id));
      navigate(`/browse/movies/${item?.id}`);
    }catch(error){
      console.log("Console the Error-",error)
    }
    };
  
  

  useFetchMovieGenre();
  // useFetchMovieByGenreId(selectedId)

  return (
    <Pane className="w-16 text-xs sm:text-base sm:w-full">
      <SelectMenu
        title="Select Option"
        options={genres?.genres?.map((label) => ({
          label: label?.name,
          value: label?.name,
          id: label?.id,
        }))}
        selected={selected}
        filterPlaceholder="Choose a genre"
        filterIcon={FilmIcon}
        onSelect={(item) => handleGenreSelection(item)}
      >
        <Button>{selected || "Genre..."}</Button>
      </SelectMenu>
    </Pane>
  );
};

export default CustomPlaceholderAndIconSelectMenuExample;
