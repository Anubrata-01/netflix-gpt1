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
const Header = () => {
  const navigate = useNavigate();
  const data = useSelector((store) => store.app);
  const [sign, setSign] = useState(true);
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
  return (
    <div className=" sticky top-0 w-full overflow-x-hidden sm:w-full z-20 ">
      <div className="   sm:w-full flex justify-between bg-gradient-to-r from-transparent ">
        <div className="ml-3 mt-3 flex sm-ml-6">
          <img
            className="w-24 h-10 sm-w-38"
            src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
            alt="Netflis Img"
          />
          <div>
            {!sign ? (
              <ul className=" list-none text-2xl cursor-pointer  w-full h-1/3 sm:h-full sm:w-full overflow-y-scroll no-scrollbar flex flex-col sm:flex sm:flex-row justify-between text-white mt-1 ml-1 sm:mt-2.5 md:ml-4 sm:ml-3 sm:text-sm">
                <NavLink to={"/browse"}>Home</NavLink>
                <NavLink to={"/browse/movies"}>Movies</NavLink>
                <NavLink to={"/list"}>My List</NavLink>
              </ul>
            ) : (
              ""
            )}
          </div>
        </div>
        <div className=" mt-4 mr-0 sm:mr-10">
          <ul>
            <li>
              <NavLink to={"/home/login"}>
                {sign ? (
                  <Button marginRight={16} appearance="primary" intent="danger">
                    SignIn
                  </Button>
                ) : (
                  <Button
                    marginRight={16}
                    onClick={handleSignout}
                    appearance="primary"
                    intent="danger"
                  >
                    SignOut
                  </Button>
                )}
              </NavLink>
            </li>
            <li>
              {!sign ? <h4 className="text-white">{data.displayName}</h4> : ""}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
