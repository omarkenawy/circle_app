import React from 'react'
import Navbar from '../components/MyNavbar'
import { Outlet } from 'react-router-dom'

export default function Mainlayout() {
    return <>

        <Navbar>
        </Navbar>
        <Outlet />

    </>
}
