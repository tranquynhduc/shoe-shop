import React from 'react'
import Navbar from './../Component/Dashboard/Navbar'
import { Outlet } from 'react-router-dom'
import Dashboard from '../Component/Dashboard/Dashboard'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import NotIsAdmin from '../../User/components/NotIsAdmin'

function AdminLayout() {
    const Admin =
        localStorage.getItem('user') === null
            ? ''
            : JSON.parse(localStorage.getItem('user')).isAdmin
    return (
        <div>
            {Admin ? (
                <div>
                    <Navbar />
                    <ToastContainer />
                    <div className="Container">
                        <Dashboard />
                        <div className="Component_Other">
                            <div className="component_outlet">
                                <Outlet />
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                <NotIsAdmin />
            )}
        </div>
    )
}

export default AdminLayout
