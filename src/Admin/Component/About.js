import React, { useState } from 'react'
import './Style/About.css';

 import emailjs from '@emailjs/browser';
import { toast } from 'react-toastify';


function About() {
  const [name,setName] =useState('')
  const [email,setEmail] =useState('')
  const [message,setMessage]  =useState('')
  const hanldeSubmit = (e) =>{
    e.preventDefault();
    emailjs.sendForm('service_42enfm9','template_2a4nj7i',e.target,'YTV-geJYPY1stv747').then(res =>{ console.log(res)}).catch(err =>console.log(err))
    toast.success('Gửi email thành công.')
  }

  return (
    <div className="aboutContainer">
         <form className='aboutForm' onSubmit={hanldeSubmit} >
              <div className='newUserItem'>
                <label>Full Name</label>
                <input type='text' name='name' placeholder='Name' value={name} onChange={(e) => setName(e.target.value)}  />
              </div>
              <div className='newUserItem'>
                <label>Email Name</label>
                <input type='email' name='user_email' placeholder='Email'  value={email} onChange={(e) => setEmail(e.target.value)} />
              </div>
              <div className='newUserItem'>
                <label>Message</label>
                <textarea type='message' name='message' placeholder='Message' cols='8' rows='10' value={message} onChange={(e) => setMessage(e.target.value)}  />
              </div>
              <button className='btn_About' >Send</button>

            </form>
    </div>
  )
}

export default About