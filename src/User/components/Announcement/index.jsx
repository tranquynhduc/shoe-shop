/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'

import { logout } from '../../../Admin/Redux/Action'
import './style.scss'

function Announcement() {
    const dispatch = useDispatch()
    const user = localStorage.getItem('user')

    const handleLogOut = () => {
        dispatch(logout())
        // navigate('/auth')
        window.location.href = '/'
    }

    return (
        <div className="announcement">
            <div className="announcement__content">
                <Link to="/">
                    <div className="announcement__support ann">Trợ giúp</div>
                </Link>
                <Link to="/profile" className="announcement__user ann">
                    <div className="header__name">
                        Chào {user ? JSON.parse(user).name : 'Quý Khách'}
                    </div>
                </Link>

                {user ? (
                    <Link to="/">
                        <div
                            className="announcement__login ann"
                            onClick={handleLogOut}
                        >
                            Đăng xuất
                        </div>
                    </Link>
                ) : (
                    <Link to="/auth">
                        <div className="announcement__login ann">Đăng nhập</div>
                    </Link>
                )}
            </div>
        </div>
    )
}

export default Announcement
