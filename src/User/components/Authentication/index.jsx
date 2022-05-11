/* eslint-disable no-useless-escape */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import {
    FaUser,
    FaLock,
    FaFacebookF,
    FaGoogle,
    FaEnvelope
} from 'react-icons/fa'

import { postLogin, postRegister } from '../../../api/httpRequest'
import { login_success, login_failure } from '../../../Admin/Redux/Action'

import SignInImage from '../../assets/images/SignInImage.svg'
import SignUpImage from '../../assets/images/SignUpImage.svg'

import './style.scss'
function SignIn() {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            password: ''
        },
        validationSchema: Yup.object({
            name: Yup.string().required('Không để trống'),
            email: Yup.string()
                .required('Không để trống')
                .matches(
                    /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
                    'Email không hợp lệ'
                ),
            password: Yup.string()
                .required('Không để trống')
                .min(6, 'Mật khẩu có ít nhất 6 ký tự')
        })
    })

    // console.log(formik.values)
    // console.log(formik.errors)

    const loginSubmit = async e => {
        e.preventDefault()

        try {
            const { email, password } = formik.values
            const { data } = await postLogin({ email, password })
            localStorage.setItem('user', JSON.stringify(data))
            if (data.isAdmin) {
                navigate('/admin')
            } else {
                navigate('/')
            }
            dispatch(login_success(email, password))
        } catch (err) {
            console.log('Login Error', err)
            alert('Đăng nhập thất bại')
            dispatch(login_failure(err))
        }
    }

    const registerSubmit = async e => {
        e.preventDefault()
        try {
            const { name, email, password } = formik.values
            await postRegister({ name, email, password })
            const signIn = document.querySelector('.signin')
            signIn.classList.remove('sign-up-mode')
        } catch (err) {
            alert('Đăng ký thất bại')
        }
    }

    const handleClickRegister = e => {
        e.preventDefault()
        const signIn = document.querySelector('.signin')
        signIn.classList.add('sign-up-mode')
    }

    const handleClickLogin = e => {
        e.preventDefault()
        const signIn = document.querySelector('.signin')
        signIn.classList.remove('sign-up-mode')
    }
    return (
        <div className="signin">
            <div className="forms-container">
                <div className="signin-signup">
                    <form
                        action=""
                        className="sign-in-form"
                        onSubmit={loginSubmit}
                    >
                        <h2 className="title">Đăng nhập</h2>
                        <div className="input-field">
                            <FaUser className="icon" />
                            <input
                                type="text"
                                placeholder="Nhập Email"
                                className="input-contain"
                                name="email"
                                value={formik.values.email}
                                onChange={formik.handleChange}
                            />
                        </div>
                        <div className="errors">
                            {formik.errors.email && (
                                <p className="errorMsg">
                                    {formik.errors.email}
                                </p>
                            )}
                        </div>

                        <div className="input-field">
                            <FaLock className="icon" />
                            <input
                                type="password"
                                placeholder="Nhập mật khẩu"
                                className="input-contain"
                                name="password"
                                value={formik.values.password}
                                onChange={formik.handleChange}
                            />
                        </div>
                        <div className="errors">
                            {formik.errors.password && (
                                <p className="errorMsg">
                                    {formik.errors.password}
                                </p>
                            )}
                        </div>
                        <input
                            type="submit"
                            className="btn-sign-signup btn-submit input-contain"
                            value="Đăng nhập"
                        />
                        <Link to="/">
                            <input
                                type="submit"
                                className="btn-sign-signup input-contain"
                                value="Trang chủ"
                            />
                        </Link>

                        <p className="social-text">Đăng nhập với ...</p>

                        <div className="social-media">
                            <div className="social-media-ul">
                                <div className="social-media-li">
                                    <a
                                        href=""
                                        className="social-icon icon-facebook"
                                    >
                                        <FaFacebookF />
                                    </a>
                                </div>
                                <div className="social-media-li">
                                    <a
                                        href=""
                                        className="social-icon icon-google"
                                    >
                                        <FaGoogle />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </form>

                    <form
                        action=""
                        className="sign-up-form"
                        onSubmit={registerSubmit}
                    >
                        <h2 className="title">Đăng ký</h2>
                        <div className="input-field">
                            <FaUser className="icon" />
                            <input
                                type="text"
                                placeholder="Nhập tên"
                                className="input-contain"
                                name="name"
                                value={formik.values.name}
                                onChange={formik.handleChange}
                            />
                        </div>
                        <div className="errors">
                            {formik.errors.name && (
                                <p className="errorMsg">{formik.errors.name}</p>
                            )}
                        </div>
                        <div className="input-field">
                            <FaEnvelope className="icon" />
                            <input
                                type="text"
                                placeholder="Nhập Email"
                                className="input-contain"
                                name="email"
                                value={formik.values.email}
                                onChange={formik.handleChange}
                            />
                        </div>
                        <div className="errors">
                            {formik.errors.email && (
                                <p className="errorMsg">
                                    {formik.errors.email}
                                </p>
                            )}
                        </div>
                        <div className="input-field">
                            <FaLock className="icon" />
                            <input
                                type="password"
                                placeholder="Nhập mật khẩu"
                                className="input-contain"
                                name="password"
                                value={formik.values.password}
                                onChange={formik.handleChange}
                            />
                        </div>
                        <div className="errors">
                            {formik.errors.password && (
                                <p className="errorMsg">
                                    {formik.errors.password}
                                </p>
                            )}
                        </div>
                        <input
                            type="submit"
                            className="btn-sign-signup btn-submit"
                            value="Đăng ký"
                        />
                        <Link to="/">
                            <input
                                type="submit"
                                className="btn-sign-signup input-contain"
                                value="Trang chủ"
                            />
                        </Link>

                        <p className="social-text">Đăng ký với ...</p>

                        <div className="social-media">
                            <div className="social-media-ul">
                                <div className="social-media-li">
                                    <a
                                        href=""
                                        className="social-icon icon-facebook"
                                    >
                                        <FaFacebookF />
                                    </a>
                                </div>
                                <div className="social-media-li">
                                    <a
                                        href=""
                                        className="social-icon icon-google"
                                    >
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
                        <h3 className="h3-signin-signup">
                            Bạn chưa có tài khoản?
                        </h3>
                        <p className="p-signin-signup">Hãy đăng ký bên dưới</p>
                        <button
                            className="btn-sign-signup transparent"
                            id="sign-up-btn"
                            onClick={handleClickRegister}
                        >
                            Đăng ký
                        </button>
                    </div>
                    <img src={SignUpImage} className="image" alt="signin" />
                </div>

                <div className="panel right-panel">
                    <div className="content">
                        <h3 className="h3-signin-signup">
                            Bạn đã có tài khoản?
                        </h3>
                        <p className="p-signin-signup">
                            Hãy chuyển qua trang đăng nhập
                        </p>
                        <button
                            className="btn-sign-signup transparent"
                            id="sign-in-btn"
                            onClick={handleClickLogin}
                        >
                            Đăng nhập
                        </button>
                    </div>
                    <img src={SignInImage} className="image" alt="signin" />
                </div>
            </div>
        </div>
    )
}

export default SignIn
