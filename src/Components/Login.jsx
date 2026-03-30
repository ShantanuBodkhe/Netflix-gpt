import React, { useRef } from "react";
import Header from "./Header";
import { checkValidData } from "../Utils/Validate";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = React.useState(true);
  const [errorMessage, setErrorMessage] = React.useState("");

  const email = useRef(null);
  const password = useRef(null); 

  const handleButtonClick = () => {
    const message = checkValidData(email.current.value, password.current.value);
    setErrorMessage(message);
  };

  const ToggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };
  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/8cc08720-ac1c-4364-bcbd-9495bf0308cd/web/IN-en-20260323-TRIFECTA-perspective_0b8c8e4e-71ee-48bd-8e16-da74f083a838_large.jpg"
          alt="Logo"
        />
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-black/80"
      >
        <h1 className="font-bold text-3xl py-4">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {isSignInForm ? null : (
          <input
            type="text"
            placeholder="Enter your name"
            className="p-4 my-4 w-full bg-gray-800 "
          />
        )}
        <input
          ref={email}
          type="text"
          placeholder="Email Address"
          className="p-4 my-4 w-full bg-gray-800"
        />
        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="p-4 my-4 w-full bg-gray-800 "
        />
        <p className="text-red-600 font-bold text-lg py-2">{errorMessage}</p>

        <button
          className="p-4 my-6  bg-red-700 w-full rounded-lg"
          onClick={handleButtonClick}
        >
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p className="py-4 cursor-pointer" onClick={ToggleSignInForm}>
          {isSignInForm
            ? "New to Netflix ?  Sign Up Now"
            : "Already registered ? Sign In Now..."}
        </p>
      </form>
    </div>
  );
};

export default Login;
