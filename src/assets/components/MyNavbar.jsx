import React, { useContext, useState } from 'react'
import { Navbar, NavbarBrand, NavbarContent, NavbarItem } from "@heroui/react";
import { Link, Navigate, NavLink, useNavigate } from 'react-router-dom';
import { authContext } from '../context/AuthContext';



export default function MyNavbar() {
  let { isLogged, setIsLogged } = useContext(authContext);
  let nav = useNavigate();
  function logOut() {
    localStorage.removeItem('token');
    setIsLogged(null);
    nav("/login")
  }
  return <>
    <Navbar position="static">
      <NavbarBrand>
        <Link to={'/'} className="font-bold text-inherit">Circle</Link>
      </NavbarBrand>
      <NavbarContent justify="end">
        {isLogged ? <NavbarItem >
          <NavLink to={'/login'} onClick={logOut} className=" text-black">Logout</NavLink>
        </NavbarItem> : <NavbarItem className="hidden lg:flex">
          <NavLink to={'/register'} className='text-black'>Logout</NavLink>
        </NavbarItem>}


      </NavbarContent>
    </Navbar>
  </>
}

