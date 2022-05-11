import { useState, useEffect } from 'react'
import '../Style/information.css'
import { FcUpload } from 'react-icons/fc'
import { useNavigate } from 'react-router-dom'
import { LineChart, Line, ResponsiveContainer } from 'recharts'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { update_user } from '../../Redux/Action'
import { toast } from 'react-toastify'
import avatarDefaul from '../../image/avatart.jpg'
import { updateUser, TOKEN } from '../../../api/httpRequest'

function Information() {
    const [isAdmin, setIsAdmin] = useState('')
    const [name, setName] = useState('')
    const [active, setActive] = useState('')
    const [password, setPassword] = useState('')
    const [information, setInformation] = useState(true)
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const userEdits = useSelector(state => state.contactReducer.users)
    const { id } = useParams()
    const findEditUser = userEdits.find(userEdit => userEdit._id === id)

    useEffect(() => {
        if (findEditUser) {
            setName(findEditUser.name)
            setIsAdmin(findEditUser.isAdmin)
            setPassword(findEditUser.password)
        }
    }, [findEditUser])

    const data = {
        id,
        name,
        isAdmin,
        password
    }
    // console.log(findEditUser);
    const hanldeUpdate = async () => {
        try {
            const response = await updateUser(id, data, TOKEN)
            navigate(-1)
            toast.success('Update successful !!')
            dispatch(update_user(response.data))
            console.log(response.data)
        } catch (error) {
            console.log('err', error)
        }
    }

    const hanldeClickInformation = () => {
        setInformation(true)
    }
    const hanldeClickOverview = () => {
        setInformation(false)
    }

    return (
        <>
            <div className="container_edit">
                <div className="edit_user">
                    <div className="left_edituser">
                        <div className="userShowLeft">
                            <div>
                                <img
                                    className="edit_avatar"
                                    src={avatarDefaul}
                                    alt="imgDefault"
                                />
                            </div>
                            <div className="userShowInforTitle">
                                <h3 className="edit_name">
                                    ID: {findEditUser._id}
                                </h3>
                                <h3 className="edit_name">
                                    Name: {findEditUser.name}
                                </h3>
                            </div>
                        </div>
                    </div>
                    <div className="left_btn">
                        <button
                            className="btn_information"
                            value={!information}
                            onClick={hanldeClickOverview}
                        >
                            Overview
                        </button>
                        <button
                            className="btn_overview"
                            value={information}
                            onClick={hanldeClickInformation}
                        >
                            Information
                        </button>
                        <button className="btn_setting">Settings</button>
                    </div>
                    {information ? (
                        <div className="right_edituser">
                            <div className="right_">
                                <div className="edit_flex_left">
                                    <div className="userUpdateItem">
                                        <div className="userUpdateItem">
                                            <label className="title_edit">
                                                FullName:
                                            </label>
                                            <input
                                                type="text"
                                                value={name}
                                                onChange={e =>
                                                    setName(e.target.value)
                                                }
                                                placeholder={findEditUser.name}
                                                focus={findEditUser.name}
                                                className="userUpdateInput"
                                            />
                                        </div>
                                        <label className="title_edit">
                                            Active:
                                        </label>
                                        {findEditUser.isAdmin ? (
                                            <input
                                                type="text"
                                                value={isAdmin}
                                                onChange={e =>
                                                    setIsAdmin(e.target.value)
                                                }
                                                className="userUpdateInput"
                                            />
                                        ) : (
                                            <input
                                                type="Text"
                                                value={isAdmin}
                                                onChange={e =>
                                                    setIsAdmin(e.target.value)
                                                }
                                                className="userUpdateInput"
                                            />
                                        )}
                                    </div>
                                    <button
                                        className="listUser_btn "
                                        onClick={hanldeUpdate}
                                    >
                                        Update
                                    </button>
                                    <button
                                        className="listUser_btn "
                                        onClick={() => navigate(-1)}
                                    >
                                        cancel
                                    </button>
                                </div>
                                <div className="edit_flex_right">
                                    <div className="userUpdate">
                                        <form className="userUpdateForm">
                                            <div className="userUpdateLeft">
                                                <div className="userUpdateItem">
                                                    <label className="title_edit">
                                                        Email:
                                                    </label>
                                                    <input
                                                        type="text"
                                                        placeholder={
                                                            findEditUser.email
                                                        }
                                                        disabled={
                                                            findEditUser.email
                                                        }
                                                        className="userUpdateInput"
                                                    />
                                                </div>
                                                {isAdmin ? (
                                                    <div className="userUpdateItem">
                                                        <label className="title_edit">
                                                            Password:
                                                        </label>
                                                        <input
                                                            type="password"
                                                            value={password}
                                                            placeholder="****************"
                                                            onChange={e =>
                                                                setPassword(
                                                                    e.target
                                                                        .value
                                                                )
                                                            }
                                                            className="userUpdateInput"
                                                        />
                                                    </div>
                                                ) : null}
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ) : (
                        <div className="right_edituser">
                            <div className="right_">
                                <div className="edit_left">No thoungth out</div>
                                <div className="edit_right"></div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </>
    )
}
export default Information
