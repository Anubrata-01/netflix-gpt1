import React from "react";
const MovidCard = ({ path }) => {
  const Url = "https://image.tmdb.org/t/p/w200";
  return (
      
      <div className=" relative w-40 pr-8 rounded-lg">
          <img className="rounded-md" src={Url + path} alt="" />
      </div>
     
   
  );
};

export default MovidCard;
