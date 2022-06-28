import React, { createContext } from "react";
import useCategory from "../hooks/useCategory";
import useFirebase from "../hooks/useFirebase";
import useReviews from "../hooks/useReviews";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const allContexts = useFirebase();
    const reviews = useReviews()
    const categories = useCategory()
    return (

        <AuthContext.Provider value={{allContexts,reviews,categories }}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;