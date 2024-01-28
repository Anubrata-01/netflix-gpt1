import React from "react";
import Header from "./Header";
import MainContainer from "./MovieContainer/MainContainer";
import SecondaryContainer from "./MovieContainer/SecondaryContainer";
import useAuthentic from "../CustomHooks/useAuthentic";
import { useSelector } from "react-redux";
import GptSearchPage from "./GPTSearch/GptSearchPage";

const HeaderFile = ({
  path,
}) => {
  useAuthentic(path);
  const isShow=useSelector((store)=>store?.gptSlice?.gptShow);


  return (
    <div className="h-screen bg-black">
      <Header />
        {
          isShow?(<GptSearchPage/>):(<>
           <MainContainer />
        <SecondaryContainer />
          </>)
        }
    </div>
  );
};

export default HeaderFile;
