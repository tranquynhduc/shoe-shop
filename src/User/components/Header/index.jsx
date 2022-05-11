import { BsFillSuitHeartFill } from 'react-icons/bs'
import { FaShoppingCart, FaUserAlt } from 'react-icons/fa'
import { Link, NavLink } from 'react-router-dom'
import './style.scss'

function Header() {
    return (
        <header className="header">
            <div className="header__main container">
                <div className="logo">
                    <Link to="/">ShoesShop</Link>
                </div>
                <ul className="header__menu">
                    <li className="header__item">
                        <NavLink
                            to="/"
                            className={({ isActive }) =>
                                isActive ? 'header__item-active' : ''
                            }
                        >
                            Home
                        </NavLink>
                    </li>
                    <li className="header__item">
                        <NavLink
                            to="/products"
                            className={({ isActive }) =>
                                isActive ? 'header__item-active' : ''
                            }
                        >
                            Products
                        </NavLink>
                    </li>
                    <li className="header__item">
                        <NavLink
                            to="/featured"
                            className={({ isActive }) =>
                                isActive ? 'header__item-active' : ''
                            }
                        >
                            Featured
                        </NavLink>
                    </li>
                    <li className="header__item">
                        <NavLink
                            to="/blog"
                            className={({ isActive }) =>
                                isActive ? 'header__item-active' : ''
                            }
                        >
                            Blog
                        </NavLink>
                    </li>
                    <li className="header__item">
                        <NavLink
                            to="/news"
                            className={({ isActive }) =>
                                isActive ? 'header__item-active' : ''
                            }
                        >
                            News
                        </NavLink>
                    </li>
                </ul>
                <div className="header__actions">
                    <Link to="/heart" className="header__heart">
                        <BsFillSuitHeartFill />
                    </Link>
                    <Link to="/cart" className="header__cart">
                        <FaShoppingCart />
                    </Link>
                    <Link to="/profile" className="header__user">
                        <FaUserAlt />
                    </Link>
                </div>
            </div>
        </header>
    )
}

export default Header
