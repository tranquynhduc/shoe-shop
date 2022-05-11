/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import { Link } from 'react-router-dom'
import { FaUser, FaLock, FaFacebookF, FaGoogle, FaEnvelope } from 'react-icons/fa'
import SignInImage from '../../assets/images/SignInImage.svg'
import SignUpImage from '../../assets/images/SignUpImage.svg'
import './style.scss'

function SignIn() {
    const handleClickSignUp = e => {
        e.preventDefault()
        const signIn = document.querySelector('.signin')
        signIn.classList.add('sign-up-mode')
    }

    const handleClickSignIn = e => {
        e.preventDefault()
        const signIn = document.querySelector('.signin')
        signIn.classList.remove('sign-up-mode')
    }
    return (
        <div className="signin">
            <div className="forms-container">
                <div className="signin-signup">
                    <form action="" className="sign-in-form">
                        <h2 className="title">Sign in</h2>
                        <div className="input-field">
                            <FaUser className="icon" />
                            <input
                                type="text"
                                placeholder="Username"
                                className="input-contain"
                            />
                        </div>
                        <div className="input-field">
                            <FaLock className="icon" />
                            <input
                                type="password"
                                placeholder="Password"
                                className="input-contain"
                            />
                        </div>
                        <input
                            type="submit"
                            className="btn-sign-signup btn-submit input-contain"
                            value="Sign in"
                        />
                        <Link to="/">
                            <input
                                type="submit"
                                className="btn-sign-signup input-contain"
                                value="Home"
                            />
                        </Link>

                        <p className="social-text">Sign in with ...</p>

                        <div className="social-media">
                            <div className="social-media-ul">
                                <div className="social-media-li">
                                    <a href="" className="social-icon icon-facebook">
                                        <FaFacebookF />
                                    </a>
                                </div>
                                <div className="social-media-li">
                                    <a href="" className="social-icon icon-google">
                                        <FaGoogle />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </form>

                    <form action="" className="sign-up-form">
                        <h2 className="title">Sign up</h2>
                        <div className="input-field">
                            <FaUser className="icon" />
                            <input
                                type="text"
                                placeholder="Username"
                                className="input-contain"
                            />
                        </div>
                        <div className="input-field">
                            <FaEnvelope className="icon" />
                            <input
                                type="text"
                                placeholder="Email"
                                className="input-contain"
                            />
                        </div>
                        <div className="input-field">
                            <FaLock className="icon" />
                            <input
                                type="password"
                                placeholder="Password"
                                className="input-contain"
                            />
                        </div>
                        <input
                            type="submit"
                            className="btn-sign-signup btn-submit"
                            value="Sign Up"
                        />
                        <Link to="/">
                            <input
                                type="submit"
                                className="btn-sign-signup input-contain"
                                value="Home"
                            />
                        </Link>

                        <p className="social-text">Sign Up With ...</p>

                        <div className="social-media">
                            <div className="social-media-ul">
                                <div className="social-media-li">
                                    <a href="" className="social-icon icon-facebook">
                                        <FaFacebookF />
                                    </a>
                                </div>
                                <div className="social-media-li">
                                    <a href="" className="social-icon icon-google">
                                        <FaGoogle />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>

            <div className="panels-container">
                <div className="panel left-panel">
                    <div className="content">
                        <h3 className="h3-signin-signup">New here?</h3>
                        <p className="p-signin-signup">lorem ipsum non sit</p>
                        <button
                            className="btn-sign-signup transparent"
                            id="sign-up-btn"
                            onClick={handleClickSignUp}
                        >
                            Sign up
                        </button>
                    </div>
                    <img src={SignUpImage} className="image" alt="signin" />
                </div>

                <div className="panel right-panel">
                    <div className="content">
                        <h3 className="h3-signin-signup">New here?</h3>
                        <p className="p-signin-signup">lorem ipsum non sit</p>
                        <button
                            className="btn-sign-signup transparent"
                            id="sign-in-btn"
                            onClick={handleClickSignIn}
                        >
                            Sign in
                        </button>
                    </div>
                    <img src={SignInImage} className="image" alt="signin" />
                </div>
            </div>
        </div>
    )
}

export default SignIn
