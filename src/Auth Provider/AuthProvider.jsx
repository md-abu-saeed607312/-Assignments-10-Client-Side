/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import {
    createUserWithEmailAndPassword,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    signInWithPopup,
    signOut,
    updateProfile,
    GoogleAuthProvider,
  } from "firebase/auth";
  import { createContext, useEffect, useState } from "react";
  import { auth } from "../Fairbase/fairbase.config";


  // Correct Google Auth Provider Initialization
  const googleProvider = new GoogleAuthProvider();
  
  export const TheContext = createContext(null);

//   -----------------------------------------------------------------------------Components ------------------------------------------------------------------------------

  const AuthProvider = ({ children }) => {

    const [user,setUser] = useState(null);
    // console.log("check this photo",user);
    const[loding,setLoding]=useState(true)
  
    // Create User
    const createUser = (email, password) => {
      return createUserWithEmailAndPassword(auth, email, password);
    };
  
    // Update User Profile (Name & Photo)
    const updateUser = (name, img) => {
      return updateProfile(auth.currentUser, {
        displayName: name,
        photoURL: img,
      });
    };
  
    // User Sign-In
    const signIn = (email, password) => {
      setLoding(true)
      return signInWithEmailAndPassword(auth, email, password);
    };
  
    // User Sign-Out
    const singOurUser = () => {
      setLoding(true)
      return signOut(auth);
    };
  
    // Google Sign-Up
    const signupWithGoogle = () => {
      setLoding(true)
      return signInWithPopup(auth, googleProvider);
    };
  
    // Manage Logged-In User
    useEffect(() => {
      const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
        setUser(currentUser);
        setLoding(false)
      });
  
      return () => unsubscribe();
    }, []);


  
    // Context API Value
    const authInfo = {
      user,
      loding,
      setUser,
      createUser,
      updateUser,
      signIn,
      singOurUser,
      signupWithGoogle,
    };
  
    return (
      <TheContext.Provider value={authInfo}>
        {children}
      </TheContext.Provider>
    );
  };
  
  export default AuthProvider;
  