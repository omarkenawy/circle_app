import React, { useContext, useState } from 'react'
import { Navigate } from 'react-router-dom';
import { authContext } from '../context/AuthContext';

export default function AuthPotectedRoute({ children }) {


    let { isLogged } = useContext(authContext);

    return !isLogged ? children : <Navigate to={'/'}></Navigate>
}
