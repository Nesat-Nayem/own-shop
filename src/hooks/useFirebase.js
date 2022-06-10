import React, { useState } from 'react';

const useFirebase = () => {
    const [searchLocation, setSearchLocation] = useState("");
    const [resetSearchLocation, setResetSearchLocation] = useState("");
    const [searchKey, setSearchKey] = useState("");
    const [resetSearchKey, setResetSearchKey] = useState("");
    return {
        searchKey,
        setSearchKey,
        resetSearchKey,
        setResetSearchKey,
        searchLocation,
        setSearchLocation,
        resetSearchLocation,
        setResetSearchLocation,
    }
};

export default useFirebase;