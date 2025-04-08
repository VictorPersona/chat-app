import React, { useState } from 'react'
import assets from '../../assets/assets'
import './Login.css'
const Login = () => {
    const [currState,setCurrState] = useState("Sign Up")
  return (
    <div className="login">
      <img className="login-logo" src={assets.logo} alt="" />
      <form className="login-form">
        <h2>{currState}</h2>
        {currState === 'Sign Up' ? (
          <input
            className="form-input"
            type="text"
            placeholder="Username"
            required
          />
        ) : null}
        <input
          className="form-input"
          type="email"
          placeholder="E-mail"
          required
        />
        <input
          className="form-input"
          type="password"
          placeholder="Password"
          required
        />
        <button type="submit">{currState}</button>

        <div className="login-term">
          <input type="checkbox" name="" id="" />
          <p>Agree to the terms of Privacy and Policy</p>
        </div>
        <div className="login-forgot">
         {currState ==="Sign Up" ? <p className="login-toggle">
            Already have an account{' '}
            <span onClick={() => setCurrState('Login')}>Click Here</span>
          </p>:<p className="login-toggle">
            Already have an account{' '}
            <span onClick={() => setCurrState('Sign Up')}>Click Here</span>
          </p>} 
          
        </div>
      </form>
    </div>
  )
}

export default Login
