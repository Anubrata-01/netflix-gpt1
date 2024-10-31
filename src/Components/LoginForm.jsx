import React, { useState } from "react";
import { ArrowRight } from "lucide-react";
import { useRef } from "react";
import { Validate } from "../Utilities/Validate";
import { useDispatch, useSelector } from 'react-redux'
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,sendEmailVerification
} from "firebase/auth";
import { auth } from "../Utilities/Firebase";
import { addUserDetails } from "../Redux Store/CreateSlice";

export function SignInThree() {
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
      if ( !email.current || !password.current) {
        console.error("One of the refs is null");
        return;
      }
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
        sendEmailVerification(user)
  .then(() => {
    // Email verification sent!
    console.log("Email verification sent")
    // ...
  });

        console.log('User signed in:', user);

        

      }
    } catch (error) {
      console.error('Authentication Error:', error);
      const errorCode = error.code;
      const errorMessage = error.message;
      setErrorMessage(errorCode + '-' + errorMessage);
    }
  };
  
  return (
    <section className="flex items-center justify-center px-4 py-12 sm:px-6 lg:px-8">
    <div className="w-full max-w-md sm:max-w-lg bg-gray-800 p-6 sm:p-10 rounded-lg shadow-md">
      <div className="mb-4 flex justify-center">
        {/* Add any header content if needed */}
      </div>
      <h2 className="text-center text-2xl font-bold leading-tight text-red-700 sm:text-3xl">
        {text2}
      </h2>
      <div className="flex justify-center mt-4">
        <p className="text-sm text-center text-red-600">{text3}</p>
        <button onClick={handleFormbtn} className="ml-4">
          <p className="text-white text-sm">{text1}</p>
        </button>
      </div>
      <form action="#" method="POST" className="mt-6 space-y-4">
        {!isSignIn && (
          <div>
            <label className="block text-sm font-medium text-white">Name</label>
            <div className="mt-1">
              <input
                ref={name}
                type="text"
                placeholder="Enter Your Name"
                className="w-full h-10 rounded-md border border-gray-300 bg-gray-700 px-3 py-2 text-sm placeholder-gray-400 text-white focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            </div>
          </div>
        )}
        <div>
          <label className="block text-sm font-medium text-white">Email address</label>
          <div className="mt-1">
            <input
              ref={email}
              type="email"
              placeholder="Email"
              className="w-full h-10 rounded-md border border-gray-300 bg-gray-700 px-3 py-2 text-sm placeholder-gray-400 text-white focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>
        </div>
        <div>
          <div className="flex items-center justify-between">
            <label className="block text-sm font-medium text-white">Password</label>
            <p className="text-xs text-white cursor-pointer hover:underline">
              Forgot password?
            </p>
          </div>
          <div className="mt-1">
            <input
              ref={password}
              type="password"
              placeholder="Password"
              className="w-full h-10 rounded-md border border-gray-300 bg-gray-700 px-3 py-2 text-sm placeholder-gray-400 text-white focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>
        </div>
        {errorMessage && (
          <p className="text-red-600 font-semibold text-sm">{errorMessage}</p>
        )}
        <div>
          <button
            onClick={HandleSubmitBtn}
            type="button"
            className="w-full inline-flex items-center justify-center rounded-md bg-black px-4 py-2.5 font-semibold text-white hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
          >
            {text} <ArrowRight className="ml-2" size={16} />
          </button>
        </div>
      </form>
    </div>
  </section>
  
  );
} 
