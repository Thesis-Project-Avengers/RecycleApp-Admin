import React, { useState } from 'react'
import '../styles/Form.css'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { FIREBASE_AUTH } from '../firebaseConfig'
import { useNavigate } from 'react-router-dom'
import login from '../Assets/login.png'
const Form = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const navigate = useNavigate()
  console.log(FIREBASE_AUTH);
  const handleLogin = (e) => {
    e.preventDefault()
    signInWithEmailAndPassword(FIREBASE_AUTH, email, password)
      .then((res) => {
        console.log(res);
        navigate('/home')
      })
      .catch((error) => {
        console.log(error);
      })
  }

  return (
    <div className='form'>
      <div className='signin-form'>
        <img src={login} alt="" className='loginimage' />
        <input type='email' placeholder='Your Email' value={email} onChange={(e) => setEmail(e.target.value)} />
        <input type='password' placeholder='Your password' value={password} onChange={(e) => setPassword(e.target.value)} />
        <a className='signin-button' onClick={(e) => handleLogin(e)} >Log In</a>
      </div>
    </div>
  )
}

export default Form