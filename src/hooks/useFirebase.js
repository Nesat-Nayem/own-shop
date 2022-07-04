import React, { useState } from 'react';

const useFirebase = () => {
  
    const [searchKey, setSearchKey] = useState("");
    console.log('form auth area on context main search', searchKey)
    const [searchId, setSearchId] = useState("")
    const [searchLocation, setSearchLocation] = useState("");
    const [provider, setProvider] = useState("");
    const [service, setServiceName] = useState("");
    const [city, setCity] = useState("");
    const [resetSearchKey, setResetSearchKey] = useState("");
    const [resetSearchLocation, setResetSearchLocation] = useState("");
    return {
        searchKey,
        setSearchKey,

        searchId, 
        setSearchId,

        city, 
        setCity,

        provider,
        setProvider,
        
        service,
         setServiceName,

        searchLocation,
        setSearchLocation,
        resetSearchKey,
        setResetSearchKey,
        resetSearchLocation,
        setResetSearchLocation,
    }
};

export default useFirebase;