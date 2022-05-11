import React, { useEffect, useState } from 'react';
import '../Style/AddUser.css';
import { BiArrowBack } from 'react-icons/bi';
import { FcUpload } from 'react-icons/fc';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { add_user } from '../../Redux/Action';
import { toast } from 'react-toastify';
import avatarDefault from '../../image/avatart.jpg'
import { saveUser, TOKEN } from '../../../api/httpRequest';



function AddUser() {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [isAdmin, setIsAdmin] = useState('true');

  const navigater = useNavigate();
  const dispatch = useDispatch();



  const hanldeClickAdminHome = () => {
    navigater(-1)
  }
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
  const data = {
    isAdmin,
    name,
    email,
    password,

  }

  const hanldeCreate = async () => {
    try {
      if (!name || !email || !password) {
        return (toast.warning(`Please enter full information !!!`))
      } else {
        if (!regex.test(email)) {
          return (toast.warning(`Please enter correct email format (...@gmail.com) !!!`))

        } else {
          const response = await saveUser(data, TOKEN)
          toast.success('Thêm người dùng mới thành công !!');
          navigater(-1);
          dispatch(add_user(response.data));
        }
      }

    } catch (error) { }
  }

  return (
    <div>
      <div>
        <div className='newUserHome'>
          <div className='newUser'>
            <div className='newUserItem'>
              <div className='userUpdateRight'>
                <div className='userUpdateUpload'>
                  <label htmlFor='file' className='upAvatarIcon' >
                    <img className='userUpdateImg' src={avatarDefault} />
                  </label>

                </div>
              </div>
            </div>
            <form className='newUserForm' >
              <div className='newUserItem'>
                <label>Full Name</label>
                <input type='text' placeholder='Enter your name' value={name} onChange={(e) => setName(e.target.value)} />
              </div>
              <div className='newUserItem'>
                <label>Password</label>
                <input type='password' placeholder='Enter your password' value={password} onChange={(e) => setPassword(e.target.value)} />
              </div>
              <div className='newUserItem'>
                <label>Email</label>
                <input type='email' placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} />
              </div>
              <div className='newUserItem'>
                <label>Active</label>
                <select className='newUserSelect' name='Active' value={isAdmin} onChange={(e) => setIsAdmin(e.target.value)} >
                  <option value='true'>True</option>
                  <option value='false'>False</option>
                </select>
              </div>

            </form>
            <button className='listUser_btn btn create' onClick={hanldeCreate}>Create</button>
            <button className='listUser_btn btn' onClick={hanldeClickAdminHome} > Cancel </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AddUser
