import React, { useEffect, useState } from 'react'
import { AiOutlineUsergroupAdd } from 'react-icons/ai'
import { RiRefreshLine } from 'react-icons/ri'
import { FaSearch } from 'react-icons/fa'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify'
import { delete_user, set_User } from '../../Redux/Action'
import avatarDefaul from '../../image/avatart.jpg'
import '../Style/UserList.css'
import Pagination from '../Pagination'
import { deleteUser, getUser, TOKEN } from '../../../api/httpRequest'
import Loading from '../../Loading'

function UserList() {
    const [searchUser, setSearchUser] = useState('')
    const [sortValue, setSortValue] = useState('')

    const userLists = useSelector(state => state.contactReducer.users)

    const [posts, setPosts] = useState(userLists)
    const [currentPage, setCurrentPage] = useState(1)
    const [postPerPage] = useState(5)
    const dispatch = useDispatch()

    const fetchUser = async () => {
        try {
            const responseUser = await getUser(TOKEN)
            dispatch(set_User(responseUser.data))
        } catch (error) {}
    }
    useEffect(() => {
        fetchUser()
    }, [])
    // console.log(userLists);
    useEffect(() => {
        setPosts(userLists)
    }, [userLists])
    //delete uer
    const handleDeleteItem = async _id => {
        try {
            const response = await deleteUser(_id, TOKEN)
            toast.success('Xóa người dùng thành công !!')
            dispatch(delete_user(response.data))
        } catch (error) {}
        fetchUser()
    }
    //sort user list
    const option = ['Tên Người Dùng', 'Tuổi', 'Giới Tính', 'Địa chỉ']
    const handleSort = e => {
        setSortValue(e.target.value)
    }

    //phân trang

    const indexLastPost = currentPage * postPerPage //10
    const indexFirstPost = indexLastPost - postPerPage //0
    const currentPost = posts.slice(indexFirstPost, indexLastPost)

    //change page
    const paginate = pageNumbers => setCurrentPage(pageNumbers)

    return (
        <div>
            <div className="listUsercontainer">
                <div className="listUser">
                    <Link to="adduser">
                        <button className="btn_create">
                            <AiOutlineUsergroupAdd className="iconBack" />
                            Thêm Người Dùng
                        </button>
                    </Link>
                    <FaSearch className="iconSerach " />
                    <input
                        placeholder="Search...."
                        onChange={e => setSearchUser(e.target.value)}
                        className="serach"
                        disabled={userLists.length === 0}
                    />
                    {/*   <select className='sortUser'
            value={sortValue}
            onChange={handleSort}  >
            {option.map((item, index) => {
              return (<option key={index} value={item} >{item}</option>)
            })}
          </select> */}
                </div>
            </div>
            <table>
                <tbody>
                    <tr>
                        <th>Số thứ tự</th>
                        <th>Họ tên</th>
                        <th>Email</th>
                        <th>Password</th>
                        <th>Active</th>
                        <th>Update</th>
                    </tr>
                    {userLists.length !== 0 ? (
                        currentPost
                            .filter(data => {
                                if (searchUser === '') {
                                    return data
                                } else if (
                                    data.name
                                        .toLowerCase()
                                        .includes(searchUser.toLowerCase()) ||
                                    data.email
                                        .toLowerCase()
                                        .includes(searchUser.toLowerCase())
                                ) {
                                    return data
                                }
                            })
                            .map((userList, index) => {
                                const { _id, name, email, isAdmin, password } =
                                    userList
                                return (
                                    <tr key={index}>
                                        <td>{index}</td>
                                        <td>{name}</td>
                                        <td>{email}</td>
                                        <td>******************</td>
                                        {isAdmin ? (
                                            <td>
                                                <h2>True</h2>
                                            </td>
                                        ) : (
                                            <td>False</td>
                                        )}
                                        <td>
                                            <Link to={`information/${_id}`}>
                                                <button className="btn_edit">
                                                    Edit
                                                </button>
                                            </Link>
                                            <button
                                                className="btn_delete"
                                                onClick={() =>
                                                    handleDeleteItem(_id)
                                                }
                                            >
                                                Delete
                                            </button>
                                        </td>
                                    </tr>
                                )
                            })
                    ) : (
                        <Loading />
                    )}
                </tbody>
            </table>
            <Pagination
                postPerPage={postPerPage}
                totalPosts={posts.length}
                paginate={paginate}
            />
        </div>
    )
}

export default UserList
