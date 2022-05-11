import React from 'react'
import { FaGlobeEurope } from 'react-icons/fa'
import { BsBellFill } from 'react-icons/bs'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { logout } from '../../Redux/Action'

import '../Style/NavBar.css'
import logo from '../../image/39b63840e895877b3c2a514a4397c1a1-gigapixel-scale-2_00x copy.png'

function Navbar() {
    const user = localStorage.getItem('user')
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleLogOut = () => {
        dispatch(logout())
        navigate('/auth')
    }

    return (
        <div className="topbar">
            <div className="topbarwapper">
                <div className="topleft">
                    <img className="logo_nav" src={logo} alt="logo" />
                </div>
                <div className="topright">
                    <div className="IconContainer">
                        <span className="topIconBadge">2</span>
                        <BsBellFill className="iconBell" />
                    </div>
                    <div className="IconContainer">
                        <span className="topIconBadge">2</span>
                        <FaGlobeEurope className="iconBell" />
                    </div>
                    <img src={logo} className="topAvatar" />

                    <div className="IconContainer" style={{ fontSize: '16px' }}>
                        <span className="AvatarTop">
                            {JSON.parse(user).name}
                        </span>
                    </div>
                    <div className="IconContainer" style={{ fontSize: '16px' }}>
                        <Link to="/auth">
                            <div
                                className="announcement__login ann"
                                onClick={handleLogOut}
                            >
                                Đăng xuất
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar
