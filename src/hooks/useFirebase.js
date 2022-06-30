import React, { useState } from 'react';

const useFirebase = () => {
  
    const [searchKey, setSearchKey] = useState("");
    console.log('form auth area on context main search', searchKey)
    const [searchId, setSearchId] = useState("")
    // console.log('form auth area on context second service search', searchId)
    const [searchLocation, setSearchLocation] = useState("");
    // console.log('form firebase', searchLocation)
    const [provider, setProvider] = useState("");
    // console.log('form firebase', searchLocation)
    const [service, setServiceName] = useState("");
    // console.log('form firebase', searchLocation)
    const [city, setCity] = useState("");
    // console.log('form firebase', searchLocation)
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