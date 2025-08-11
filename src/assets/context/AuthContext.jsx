import React, { createContext, useState } from 'react';

export const authContext = createContext();

export default function AuthContextProvider({ children }) {
    const [isLogged, setIsLogged] = useState(localStorage.getItem('token') != null);

    return (
        <authContext.Provider value={{ isLogged, setIsLogged }}>
            {children}
        </authContext.Provider>
    );
}
