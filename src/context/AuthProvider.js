import React, { createContext } from "react";
import useCategory from "../hooks/useCategory";
// import useFirebase from "../hooks/useFirebase";
import useReviews from "../hooks/useReviews";
import useSearch from "../hooks/useSearch";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    // const allContexts = useFirebase();
    const reviews = useReviews()
    const categories = useCategory()
    const allSerach = useSearch()
    return (

        <AuthContext.Provider value={{
            // allContexts,
            reviews,
            categories,
            allSerach }}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;