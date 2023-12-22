import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithPopup, updateProfile,signOut, signInWithEmailAndPassword  } from "firebase/auth";
import auth from "../firebase/firebase";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

export const AuthContext = createContext(null)
const googleProvider = new GoogleAuthProvider()
const queryClient = new QueryClient()

const AuthProvider = ({children}) => {

    const [user,setUser] = useState(null)
    const [loading,setLoading] = useState(true)


    const createUser = (email,password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password);
    }

    const logIn = (email,password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }

    const logOut = ()=>{
        setLoading(true)
        return signOut(auth)
    }

    const googleSignIn = ()=>{
        setLoading(true)
        return signInWithPopup(auth,googleProvider)
    }

    const upgradeProfile = (name,image) => {
        setLoading(true)
        return updateProfile(auth.currentUser,{displayName:name,photoURL:image})
    }

    
    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth,currentUser=>{
            setUser(currentUser)
            setLoading(false)
            console.log(currentUser);
        })
        return ()=> unSubscribe();
    },[])


    const authInfo = {
        user,
        loading,
        createUser,
        logIn,
        logOut,
        googleSignIn,
        upgradeProfile,
    }

    return (
        <AuthContext.Provider value={authInfo}>
            <QueryClientProvider client={queryClient}>
                {children}   
            </QueryClientProvider>        
        </AuthContext.Provider>
    );
};

export default AuthProvider;
