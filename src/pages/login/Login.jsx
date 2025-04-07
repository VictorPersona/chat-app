import React from 'react'
import assets from '../../assets/assets'
import './Login.css'
const Login = () => {
  return (
    <div className="login">
      <img className='login-logo' src={assets.logo} alt="" />
      <form className="login-form">
        <h2>Sign Up</h2>
        <input className='form-input' type="text" placeholder='Username' required />
        <input className='form-input' type="email" placeholder='E-mail' required/>
        <input className='form-input' type="password" placeholder='Password' required />
        <button type='submit'>Sign Up</button>
        <div className='login-term'>
            <input type="checkbox" name="" id="" />
            <p>Agree to the terms of Privacy and Policy</p>
        </div>
        <div className="login-forgot">
            <p className="login-toggle">Already have an account <span>Click Here</span></p>
        </div>
      </form>
    </div>
  )
}

export default Login
