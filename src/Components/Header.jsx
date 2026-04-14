import React, { useEffect } from "react";
import Logo from "../Utils/Logo.png"
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../Utils/Firebase";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../Utils/UserSlice"; 
import { NETFLIX_LOGO } from "../Utils/Constants";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  
  const user = useSelector((store) => store.user); 

  const handleSignOut = () => {
    signOut(auth).then(() => {}).catch((error) => {
      // An error happened.
      navigate("/error");
      console.error("Error signing out:", error);
    });
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          }),
        );
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });
  }, []);

// Unsubscribe from the listener when the component unmounts
  return()=>unsubscribe();
  },[]);


  return (
    <div className="w-screen absolute px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between items-center">
      <img
        className="w-44 "
        src={NETFLIX_LOGO}
        alt="logo"
      />
      {user && (
      <div className="flex p-2 items-center gap-4">
        <img className="w-12 h-12" alt="userIcon" src={Logo}/>
        <button onClick={handleSignOut} className="font-bold text-white">Sign Out</button>
      </div>
      )}
    </div>
  );
};

export default Header;