import React, { useEffect } from "react";
import Logo from "../Utils/Logo.png"
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../Utils/Firebase";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../Utils/UserSlice"; 

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user =useSelector((store) => store.user); 

  const handleSignOut = () => {
    signOut(auth).then(() => {
      // Sign-out successful.
      navigate("/");
      console.log("User signed out successfully.");
    }).catch((error) => {
      // An error happened.
      navigate("/error");
      console.error("Error signing out:", error);
    });
  }

   useEffect(() => {
    onAuthStateChanged(auth, (user) => {
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
      } else {
        dispatch(removeUser());
      }
    });
  }, []);
  return (
    <div className="w-screen absolute px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between items-center">
      <img
        className="w-44 "
        src="https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production_2026-03-26/consent/87b6a5c0-0104-4e96-a291-092c11350111/019ae4b5-d8fb-7693-90ba-7a61d24a8837/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        alt="logo"
      />
      {user &&
      <div className="flex p-2 items-center gap-4">
        <img className="w-12 h-12" alt="userIcon" src={Logo}/>
        <button onClick={handleSignOut} className="font-bold text-white">Sign Out</button>
        
      </div>
      }
    </div>
  );
};

export default Header;
