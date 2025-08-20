import React from 'react'
import Navbar from '../components/MyNavbar'
import { Outlet } from 'react-router-dom'

export default function Mainlayout() {
    return <>

        <Navbar>
        </Navbar>
        <div className="bg-gray-200 pt-3">
            <Outlet />
        </div>

    </>
}
