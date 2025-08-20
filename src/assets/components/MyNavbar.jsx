import React, { useContext, useState } from 'react'
import { Navbar, NavbarBrand, NavbarContent, NavbarItem } from "@heroui/react";
import { Link, Navigate, NavLink, useNavigate } from 'react-router-dom';
import { authContext } from '../context/AuthContext';



export default function MyNavbar() {
  let { isLogged, setIsLogged, setUserData, userData } = useContext(authContext);
  let nav = useNavigate();
  function logOut() {
    localStorage.removeItem('token');
    setIsLogged(null);
    setUserData(null);
    nav("/login")
  }
  return <>
    <Navbar position="static">
      <NavbarBrand>
        <Link to={'/'} className="font-bold text-inherit">Circle</Link>
      </NavbarBrand>
      <NavbarContent justify="end">
        <Link to={'profile-page'}>
          <div className="flex">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
            </svg>
            <span>{userData?.name}</span>
          </div>
        </Link>

        {isLogged ? <NavbarItem >
          <NavLink to={'/login'} onClick={logOut} className=" text-black">Logout</NavLink>
        </NavbarItem> : <NavbarItem className="hidden lg:flex">
          <NavLink to={'/register'} className='text-black'>Logout</NavLink>
        </NavbarItem>}


      </NavbarContent>
    </Navbar >
  </>
}

