import React, {useRef,} from "react";
import lang from "../../Utilities/languageConstant";
import { useDispatch, useSelector } from "react-redux";
import { Api_options } from "../constant";
import { clearMovieResults} from "../../Redux Store/gptSlice";
import runChat from "../../Utilities/openai";

const GptSearchBar = () => {
  const dispatch = useDispatch();
  const { supportedLan, results: name } = useSelector((store) => store?.gptSlice);
  const searchText = useRef(null);
   name && console.log(name)
  const searchTmdbMovies =async (movie) => {
    try {
      const data = await fetch(
        "https://api.themoviedb.org/3/search/movie?query=" +
          movie +
          "&include_adult=false&language=en-US&page=1",
        Api_options
      );

      const json = await data.json();
     
      // console.log(filteredMovies);
      return json.results;
    } catch (error) {
      console.log(error);
      return [];
    }
  }
  
  const handleSearchbtn = async (e) => {
    e.preventDefault();
    dispatch(clearMovieResults());
    const inputValue = searchText?.current?.value;
    const Gptquery =
      "Act as an Movie Recomendation system and suggest some movies for the query " +
      inputValue +
      " and only give the name of 3 movies seperated by comma like: Gadar,Ishq,Don. and if someone writes something about movies you just give only the name of movies not any other text just movie name..i dont need any other text excluding movie name ";

    await runChat(Gptquery, name, inputValue, dispatch, searchTmdbMovies);
  };
  

  return (
    <div className=" pt-[12%] sm:pt-[6%] relative z-20 flex justify-center">
      <form className=" w-full px-5 md:w-1/2 grid grid-cols-12">
        <input
          type="text"
          ref={searchText}
          placeholder={lang[supportedLan].placeHolder}
          className="p-3 col-span-9 rounded-l-full outline-none text-center text-sm sm:text-base"
        />
        <button className="col-span-3 py-2 px-4 bg-red-700 hover:bg-red-800 text-white rounded-r-full" onClick={handleSearchbtn}>
          {lang[supportedLan].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;

