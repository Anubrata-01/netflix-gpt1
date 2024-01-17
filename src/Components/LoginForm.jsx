import React, { useState } from "react";
import { ArrowRight } from "lucide-react";
import { useRef } from "react";
import { Validate } from "../Utilities/Validate";
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';

import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../Utilities/Firebase";
import { addUserDetails } from "../Redux Store/CreateSlice";

export function SignInThree() {

  const navigate=useNavigate()
  const dispatch=useDispatch()
  const name=useRef(null);
  const email = useRef(null);
  const password = useRef(null);
  const [isSignIn, setIsSignIn] = useState(true);
  const [text1, setText1] = useState("Create a free account");
  const [text2, setText2] = useState("Sign in to Your account");
  const [text3, setText3] = useState("Don't have an account?");
  const [errorMessage, setErrorMessage] = useState();

  const [text, setText] = useState("Sign In");
  const Toggleform = () => {
    isSignIn ? setIsSignIn(false) : setIsSignIn(true);
    text === "Sign In" ? setText("Sign Up") : setText("Sign In");
    text1 === "Create a free account"
      ? setText1("Sign in to Your account")
      : setText1("Create a free account");
    text2 === "Sign in to Your account"
      ? setText2("Create a New account")
      : setText2("Sign in to Your account");
    text3 === "Don't have an account?"
      ? setText3("Already have an account?")
      : setText3("Don't have an account?");
  };
  const handleFormbtn = () => {
    Toggleform();
  };
    const userObj=useSelector((state)=>state.app)
  console.log(userObj)
 


  const HandleSubmitBtn = async () => {
    try {
      const msg = Validate(email.current.value, password.current.value);
      setErrorMessage(msg);
      if (msg) return;
  
      if (!isSignIn) {
        const userCredential = await createUserWithEmailAndPassword(auth, email.current.value, password.current.value);
        const user = userCredential.user;
        console.log('User signed up:', user);
        updateProfile(user, {
          displayName: name.current.value, photoURL: ""
        }).then(() => {
          const {email,uid,displayName
          }= user
          dispatch(addUserDetails({email:email,uid:uid,displayName:displayName
}))

        }).catch((error) => {
          setErrorMessage(error.message)
        });
      
      } else {
        const userCredential = await signInWithEmailAndPassword(auth,email.current.value, password.current.value);
        const user = userCredential.user;
        console.log('User signed in:', user);
        // navigate("/browse")

        

      }
    } catch (error) {
      console.error('Authentication Error:', error);
      const errorCode = error.code;
      const errorMessage = error.message;
      setErrorMessage(errorCode + '-' + errorMessage);
    }
  };
  
  return (
    <section>
      <div className="flex items-center justify-center px-10 py-4 sm:px-6 sm:py-12 lg:px-8 lg:py-24 ">
        <div className="xl:mx-auto xl:w-60 xl:max-w-sm 2xl:max-w-md w-80 sm:w-full">
          <div className="mb-2 flex justify-center">
          </div>
          <h2 className="text-center text-2xl font-bold leading-tight text-red-700">
            {text2}
          </h2>
          <div className="flex ml-4 sm:ml-16 ">
            <p className="mt-3  sm:ml text-center text-sm text-red-600 ">{text3} </p>

            <button onClick={handleFormbtn} className=" mt-2.5 ml-4">
              
               <p className="text-white text-sm">
               {text1}
                </p> 
            </button>
          </div>
          <form action="#" method="POST" className="mt-8">
            <div className="space-y-5">
              {isSignIn ? (
                ""
              ) : (
                <div>
                  <label
                    htmlFor=""
                    className="text-base font-medium text-white"
                  >
                    {" "}
                    Name{" "}
                  </label>
                  <div className="mt-2">
                    <input
                      ref={name}
                      className="flex h-10 w-auto sm:full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 text-white"
                      type="text"
                      placeholder="Enter Your Name"
                    ></input>
                  </div>
                </div>
              )}

              <div>
                <label htmlFor="" className="text-base font-medium text-white">
                  {" "}
                  Email address{" "}
                </label>
                <div className="mt-2">
                  <input
                    ref={email}
                    className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 text-white"
                    type="email"
                    placeholder="Email"
                  ></input>
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between">
                  <label
                    htmlFor=""
                    className="text-base font-medium text-white"
                  >
                    {" "}
                    Password{" "}
                  </label>
                    {" "}
                    {/* Forgot password?{" "} */}
                    <p className="text-white">
                    Forgot password?{" "}

                    </p>
                    
                </div>
                <div className="mt-2">
                  <input
                    ref={password}
                    className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 text-white"
                    type="password"
                    placeholder="Password"
                  ></input>
                </div>
              </div>
              <p className=" text-red-600 font-semibold">
                {password ? errorMessage : ""}
              </p>

              <div>
                <button
                  onClick={HandleSubmitBtn}
                  type="button"
                  className="inline-flex w-full items-center justify-center rounded-md bg-black px-3.5 py-2.5 font-semibold leading-7 text-white hover:bg-black/80"
                >
                  {text} <ArrowRight className="ml-2" size={16} />
                </button>
              </div>
            </div>
          </form>
          <div className="mt-3 space-y-3">
            <button
              type="button"
              className="relative inline-flex w-full items-center justify-center rounded-md border border-gray-400 bg-white px-3.5 py-2.5 font-semibold text-gray-700 transition-all duration-200 hover:bg-gray-100 hover:text-black focus:bg-gray-100 focus:text-black focus:outline-none"
            >
              <span className="mr-2 inline-block">
                <svg
                  className="h-6 w-6 text-rose-500"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M20.283 10.356h-8.327v3.451h4.792c-.446 2.193-2.313 3.453-4.792 3.453a5.27 5.27 0 0 1-5.279-5.28 5.27 5.27 0 0 1 5.279-5.279c1.259 0 2.397.447 3.29 1.178l2.6-2.599c-1.584-1.381-3.615-2.233-5.89-2.233a8.908 8.908 0 0 0-8.934 8.934 8.907 8.907 0 0 0 8.934 8.934c4.467 0 8.529-3.249 8.529-8.934 0-.528-.081-1.097-.202-1.625z"></path>
                </svg>
              </span>
              Sign in with Google
            </button>
            <button
              type="button"
              className="relative inline-flex w-full items-center justify-center rounded-md border border-gray-400 bg-white px-3.5 py-2.5 font-semibold text-gray-700 transition-all duration-200 hover:bg-gray-100 hover:text-black focus:bg-gray-100 focus:text-black focus:outline-none"
            >
              <span className="mr-2 inline-block">
                <svg
                  className="h-6 w-6 text-[#2563EB]"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M13.397 20.997v-8.196h2.765l.411-3.209h-3.176V7.548c0-.926.258-1.56 1.587-1.56h1.684V3.127A22.336 22.336 0 0 0 14.201 3c-2.444 0-4.122 1.492-4.122 4.231v2.355H7.332v3.209h2.753v8.202h3.312z"></path>
                </svg>
              </span>
              Sign in with Facebook
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
