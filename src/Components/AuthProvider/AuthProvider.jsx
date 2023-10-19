import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import auth from '../../firebase/firebase.config';

 export const AuthContext = createContext(null)

//  ===============================================================
function AuthProvider({children}) {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    
    // Register or create an user 
    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // sign in or login user 
    const login = (email, password) =>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    // sign out user
    const logOut = () =>{
        setLoading(true)
        return signOut(auth)
    }

//    get/observe  currentnly sign in user
    useEffect(() =>{
        const unsub = onAuthStateChanged(auth, user => {
            user && console.log(user)
            setUser(user)
            setLoading(false)
        })
          return ()=>unsub()
    },[])


// ==============================================================
    const authInfo = {
      createUser,
      login,
      logOut,
      user,
      loading
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
}

export default AuthProvider;