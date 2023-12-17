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
  const data=useSelector((store)=>store.app)
  const [sign, setSign] = useState(true);
  const handleSignout = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const dispatch = useDispatch();
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
    <div className=" sticky top-0 w-full z-20 ">
      <div className=" w-120  flex justify-between bg-gradient-to-r from-transparent ">
        <div className="ml-10 mt-3">
          <img
            className="w-45 h-12"
            src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
            alt="Netflis Img"
          />
        </div>
        <div className=" mt-4 mr-10">
          <ul>
            <li>
              <NavLink to={"/home/login"}>
                {sign ? (
                   <Button marginRight={16}  appearance="primary" intent="danger">
                   SignIn
                 </Button>
                ) : (
                  // <button
                  //   className="bg-red-700 w-15  rounded"
                  //   onClick={handleSignout}
                  // >
                  //   <p className="w-15 p-1 text-sm rounded-md  text-white font-semibold">
                  //     Sign Out
                  //   </p>
                  // </button>
                  <Button marginRight={16} onClick={handleSignout} appearance="primary" intent="danger">
        SignOut
      </Button>
                )}

              </NavLink>
            </li>
            <li>
         {!sign? <h4 className="text-white">{data.displayName}</h4>:""}
            </li>
        </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
