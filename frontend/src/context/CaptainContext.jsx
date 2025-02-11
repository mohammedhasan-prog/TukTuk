import React, { createContext, useState } from 'react';

// Create the context
export const CaptainDataContext = createContext();

// Create a provider component
export const CaptainContext = ({ children }) => {
    const [captain, setCaptain] = useState(null);
    const [loading, setLoading] = useState(false);

    return (
        <CaptainDataContext.Provider value={{ captain, setCaptain, loading, setLoading }}>
            {children}
        </CaptainDataContext.Provider>
    );
};