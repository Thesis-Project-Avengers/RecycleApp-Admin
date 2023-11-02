import React from 'react'
import '../styles/Form.css'

const Form = () => {
  return (
    <div className='form'>
        <h1>Sign In</h1>
        <div className='signin-form'>
        <div className='signin-input' >
          <p>Email</p>
        <input type='email' placeholder='example@gmail.com'/>
        </div>
        <div className='signin-input' >
          <p>Password</p>
          <input type='password' placeholder='Your password'/>
        </div>
        </div>
        <div className='signin-button' >
          <span>Log In</span>
        </div>
    </div>
  )
}

export default Form