import React, { useState} from 'react'
import { useRef } from 'react';
import lang from '../../Utilities/languageConstant';
import { useSelector } from 'react-redux';

// export lang
const GptSearchBar = () => {
  const language=useSelector((store)=>store.gptSlice.supportedLan);
  console.log(language)
  const handleSearchbtn=(e)=>{
    e.preventDefault();
  }
  return (
    <div className='absolute z-20 top-[20%] left-[10%] flex justify-center sm:left-[30%]'>
     
      <form className=' w-full bg-slate-800'>
        <input type="text" placeholder={lang[language].placeHolder} className='p-4 w-80 text-black'/>
        <button className='p-4 bg-red-700 ml-1 text-white' onClick={handleSearchbtn}>{lang[language].search}</button>
      </form>

    </div>
  )
}

export default GptSearchBar;