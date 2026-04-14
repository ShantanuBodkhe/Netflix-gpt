import React, { useRef } from "react";
import Header from "./Header";
import { checkValidData } from "../Utils/Validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../Utils/Firebase";
// import { useNavigate } from "react-router-dom";
import { addUser } from "../Utils/UserSlice";
import { useDispatch } from "react-redux";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = React.useState(true);
  const [errorMessage, setErrorMessage] = React.useState("");
  const dispatch = useDispatch();
  // const navigate = useNavigate();
  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);

  const handleButtonClick = () => {
    const message = checkValidData(email.current.value, password.current.value);
    setErrorMessage(message);

    if (message) return;
    //sign in or sign up logic here
    if (!isSignInForm) {
      //sign up logic here
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value,
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value,
            photoURL: "https://media.licdn.com/dms/image/v2/D4D03AQGp1OlpMz1l8w/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1669181818407?e=1777507200&v=beta&t=4JY1M92AErqxeWcnE-gx0W7EubMpHGoYzlqn-ueN0cU"
          })
            .then(() => {
              // Profile updated!
              const { uid, email, displayName, photoURL } = auth.currentUser;
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: photoURL,
                }),
              );
              console.log("User profile updated successfully.");
            })
            .catch((error) => {
              // An error occurred
              console.error("Error updating user profile:", error);
              setErrorMessage(error.message);
            });
          
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.error("Error creating user:", errorCode, errorMessage);
          setErrorMessage(errorCode + ": " + errorMessage);
        });
    } else {
      //sign in logic here
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value,
      )
        .then(() => {
          
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.error("Error signing in:", errorCode, errorMessage);
          setErrorMessage(errorCode + " " + errorMessage);
        });

    }
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
            ref={name}
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

