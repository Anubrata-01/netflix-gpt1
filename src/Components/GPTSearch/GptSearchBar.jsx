import React, { useState } from "react";
import { useRef } from "react";
import lang from "../../Utilities/languageConstant";
import { useDispatch, useSelector } from "react-redux";
import openai from "../../Utilities/openai";
import { Api_options } from "../constant";
import { storeGptSearchMovie } from "../../Redux Store/gptSlice";
const GptSearchBar = () => {
  const language = useSelector((store) => store.gptSlice.supportedLan);
  const searchText = useRef(null);
  const dispatch=useDispatch();
  const searchTmdbMovies=async(movie)=>{
    const data=await fetch("https://api.themoviedb.org/3/search/movie?query="+movie+"&include_adult=false&language=en-US&page=1", Api_options);
    const json= await data.json();
    const filteredMovies = json.results.filter(
      (result) => !result.title.toLowerCase().includes(movie.toLowerCase())
    );
  
    return filteredMovies;
  }
  const handleSearchbtn = async (e) => {
    e.preventDefault();
    const Gptquery =
      "Act as an Movie Recomendation system and suggest some movies for the query" +
      searchText.current.value +"and only give the name of 3 movies  seperated by comma like: Gadar,Ishq,Don. and if someone writes something about movies you just give only the name of movies not any other text just movie name..i dont need any other text excluding movie name "
      ;
    const gptSearchresults = await openai.chat.completions.create({
      messages: [{ role: "user", content: Gptquery }],
      model: "gpt-3.5-turbo",
    });
    // console.log();
    if(!gptSearchresults.choices)
    {
      console.log("Error handling");
    }
    const gptMovies=gptSearchresults.choices[0]?.message?.content.split(",");
    console.log(gptMovies)
    const gptFetchMovies=gptMovies?.map((movie)=>searchTmdbMovies(movie));
    const tmdbResults= await Promise.all(gptFetchMovies);
    dispatch(storeGptSearchMovie(tmdbResults));
    console.log(tmdbResults);
  };
 
  return (
    <div className="absolute z-20 top-[20%] left-[10%] flex justify-center sm:left-[30%]">
      <form className=" w-full bg-slate-800">
        <input
          type="text"
          ref={searchText}
          placeholder={lang[language].placeHolder}
          className="p-4 w-80 text-black"
        />
        <button
          className="p-4 bg-red-700 ml-1 text-white"
          onClick={handleSearchbtn}
        >
          {lang[language].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
