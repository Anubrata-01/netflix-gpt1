import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../Utilities/Firebase";
import { useNavigate } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import { addUserDetails, removeUserDetails } from "../Redux Store/CreateSlice";
import { useEffect } from "react";
import { Button } from "evergreen-ui";
import { chooseYourLang, gptToogleShow } from "../Redux Store/gptSlice";
import { SupportLang } from "../Utilities/languageConstant";
// export SupportLang
const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();
  const data = useSelector((store) => store.app);
  const [sign, setSign] = useState(true);
  const [isShow, setIsShow] = useState(false);

  const dispatch = useDispatch();
  const handleSignout = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const handleGPTSearch = () => {
    console.log("i am GPT");
    // setSign(!sign)
    setIsShow(!isShow);
    dispatch(gptToogleShow());
  };
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const { email, uid, displayName } = user;
        dispatch(
          addUserDetails({ email: email, uid: uid, displayName: displayName })
        );
        navigate("/browse");
        setSign(false);
      } else {
        dispatch(removeUserDetails());
        navigate("/");
      }
    });
  }, []);
  window.onscroll = () => {
    setIsScrolled(window.scrollY === 0 ? false : true);
    return () => (window.onscroll = null);
  };
  const headerStyle = {
    background: isScrolled ? "#000" : "transparent", // Change background color based on scroll
    transition: "background 0.3s ease", // Add a smooth transition effect
  };
  console.log(isScrolled);
  return (
    <div
      className=" sticky  h-12 top-0 w-full overflow-x-hidden overflow-y-hidden no-scrollbar sm:w-full sm:h-16 z-20 "
      style={headerStyle}
    >
      <div className="   sm:w-full flex justify-between bg-gradient-to-r from-transparent ">
        <div className="ml-3 mt-3 flex sm-ml-6">
          <img
            className="w-24 h-10 sm-w-38"
            src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
            alt="Netflis Img"
          />
          {!sign && (
            <div>
              {isShow ? (
                ""
              ) : (
                <ul className=" list-none text-xl cursor-pointer  w-full h-1/3 sm:h-full  sm:w-full overflow-y-scroll no-scrollbar flex flex-col sm:flex sm:flex-row justify-between text-white mt-1 ml-1 sm:mt-2.5 md:ml-4 sm:ml-3 sm:text-sm">
                  <NavLink to={"/browse"}>Home</NavLink>
                  <NavLink to={"/browse/movies"}>Movies</NavLink>
                  <NavLink to={"/list"}>My List</NavLink>
                </ul>
              )}
            </div>
          )}
        </div>
        {/*  */}
        <div className=" mt-4 mr-0 sm:mr-10">
          <ul>
            <li className=" ml-8 sm:ml-0">
              <div className="flex">
                {!sign ? (
                  <div className="flex">
                    {isShow && (
                      <div>
                        <label className=" border-none p-4 rounded-md w-12 text-xs sm:text-base sm:w-full">
                          <select name="selectedLang" className="p-1 " onClick={(e)=>dispatch(chooseYourLang(e.target.value))}>
                            {SupportLang.map((lan) => (
                              <option value={lan.identifier} >{lan.name}</option>
                            ))}
                          </select>
                        </label>
                      </div>
                    )}
                    <Button
                      marginRight={16}
                      onClick={handleGPTSearch}
                      appearance="primary"
                      intent=""
                      className="mobile:max-sm:text-red w-16 text-xs sm:text-base sm:w-full"
                    >
                      {!isShow?"GPTSearch":"HomePage"}
                    </Button>
                  </div>
                ) : (
                  " "
                )}

                <NavLink to={"/home/login"}>
                  {sign ? (
                    <Button
                      marginRight={16}
                      appearance="primary"
                      intent="danger"
                      c
                    >
                      SignIn
                    </Button>
                  ) : (
                    <Button
                      marginRight={16}
                      onClick={handleSignout}
                      appearance="primary"
                      intent="danger"
                      className=" w-16 text-xs p-1 sm:text-base sm:w-full sm:p-0 "
                    >
                      SignOut
                    </Button>
                  )}
                </NavLink>
              </div>
            </li>
            <li>
              {/* {!sign ? <h4 className="text-white w-20 text-xs sm:text-sm ml-28 mobile:max-sm:ml-28">{data.displayName}</h4> : ""} */}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
