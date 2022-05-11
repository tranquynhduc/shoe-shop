import React, { useState } from 'react'
import './UserProfile.scss'
import { MdOutlineClose } from 'react-icons/md'
const UserProfile = () => {
    const [open, setOpen] = useState(false)
    const profile = {
        name: 'Test User',
        username: 'testuser',
        email: 'testuser@gmail.com',
        address: '12 Science Avenue, Ghềnh Ráng, Qui Nhơn, Bình Định',
        imageUrl:
            'https://th.bing.com/th/id/OIP.udIfmXkDTzwuDF4YKPHBPgHaHk?pid=ImgDet&rs=1',
        phone_number: '09459***789'
    }
    const submitHandler = e => {
        e.preventDefault()
    }

    const info =
        localStorage.getItem('user') === null
            ? ''
            : JSON.parse(localStorage.getItem('user'))
    console.log(info.name)
    return (
        <div className="profile container">
            <aside className="profile__sidebar">
                <div className="profile__avatar">
                    <img
                        src={profile.imageUrl}
                        className="avatar__image"
                        alt=""
                    />
                </div>
                <h2 className="profile__username">{info.name}</h2>
                <p className="profile__email">{info.email}</p>
            </aside>
            <main className="profile__main">
                <div>
                    <div className="profile__box">
                        <h1>Thông tin cá nhân</h1>
                        <ul>
                            <li>
                                <span>Họ và tên:</span> <span>{info.name}</span>
                            </li>
                            <li>
                                <span>Email:</span> <span>{info.email}</span>
                            </li>
                            <li>
                                <span>Địa chỉ:</span>{' '}
                                <span>{profile.address}</span>
                            </li>
                            <li>
                                <span>Số điện thoại:</span>{' '}
                                <span>{profile.phone_number}</span>
                            </li>
                        </ul>
                        <div className="profile__box__button">
                            <button
                                onClick={() => setOpen(true)}
                                type="buttons"
                                className="btn btn-primary w-60"
                            >
                                Cập nhật thông tin
                            </button>
                        </div>
                    </div>
                </div>
            </main>
            {open && (
                <>
                    <div className="details-modal-overlay"></div>
                    <div className="details-modal">
                        <div className="details-modal-title">
                            <h1>Cập nhật thông tin cá nhân</h1>
                            <button
                                type="button"
                                className="details-modal-close"
                                onClick={() => setOpen(false)}
                            >
                                <MdOutlineClose size="20" />
                            </button>
                        </div>

                        <div className="details-modal-content">
                            <form onClick={submitHandler}>
                                <div className="form-group">
                                    <label htmlFor="email">Email</label>
                                    <input
                                        type="email"
                                        name="email"
                                        id="email"
                                        placeholder="email"
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="name">Name</label>
                                    <input
                                        type="name"
                                        name="name"
                                        id="name"
                                        placeholder="name"
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="password">password</label>
                                    <input
                                        type="password"
                                        name="password"
                                        id="password"
                                        placeholder="Password"
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="confirmed_password">
                                        Confirmed password
                                    </label>
                                    <input
                                        type="password"
                                        name="confirmed_password"
                                        id="confirmed_password"
                                        placeholder="Confirmed password"
                                    />
                                </div>
                                <div className="button-group">
                                    <button
                                        onClick={() => setOpen(false)}
                                        className="btn-outline"
                                        type="button"
                                    >
                                        Đóng
                                    </button>
                                    <button
                                        className="btn-primary"
                                        type="submit"
                                    >
                                        Lưu thay đổi
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </>
            )}
        </div>
    )
}

export default UserProfile
