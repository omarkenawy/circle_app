import React, { createContext, useEffect, useState } from 'react';
import { getUserDataApi } from '../services/userData';
import { getPostCommentApi } from '../services/createComment';

export const authContext = createContext();

export default function AuthContextProvider({ children }) {
    const [isLogged, setIsLogged] = useState(localStorage.getItem('token') != null);
    const [userData, setUserData] = useState(null);
    const [userComment, setUserComment] = useState([]);

    async function getUserData() {
        const response = await getUserDataApi();
        if (response.message) {
            setUserData(response.user);
        }
    }

    async function getAllcomments() {
        const response = await getPostCommentApi(post.id);
        if (response.message) {
            setUserComment(response.comments);

        }
    }

    useEffect(() => {
        if (isLogged)
            getUserData();
    }, [isLogged])


    useEffect(() => {
        getAllcomments();
    },)


    return (
        <authContext.Provider value={{ isLogged, setIsLogged, userData, setUserData }}>
            {children}
        </authContext.Provider>
    );
}
