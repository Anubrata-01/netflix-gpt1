import React from "react";
import Header from "./Header";
import MainContainer from "./MovieContainer/MainContainer";
import SecondaryContainer from "./MovieContainer/SecondaryContainer";
import useAuthentic from "../CustomHooks/useAuthentic";

const HeaderFile = ({
  path,
}) => {
  useAuthentic(path);

  return (
    <div className="h-screen bg-black">
      <Header />
      <MainContainer />
      <SecondaryContainer/>
    </div>
  );
};

export default HeaderFile;