import React, { createContext } from "react";
import useFirebase from "../hooks/useFirebase";
import useReviews from "../hooks/useReviews";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const allContexts = useFirebase();
    const reviews = useReviews()
    return (

        <AuthContext.Provider value={{allContexts,reviews}}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;