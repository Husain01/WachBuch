import React from 'react'
import { Link } from 'react-router-dom'

const Signup = () => {
  return (
    <main className="auth-container">
        <div className="auth-box normal-shadow">
          <h2 className="auth-title">Sign Up</h2>
          <div className="form">
            <div className="form-group">
              <label htmlFor="email">Email *</label>
              <input type="email" placeholder="Enter email address here" id='email' name='email' value="{user.email}" onChange="{changeHandler}" required/>
            </div>
            <div className="form-group">
              <label htmlFor="pass">Password *</label>
              <input type="password" placeholder="Enter password" id='password' name='password' value="{user.password}" onChange="{changeHandler}" required />
            </div>
            <div className="form-group">
              <label htmlFor="pass">Confirm Password *</label>
              <input type="password" placeholder="Re-enter Password" id='confirm-password' name='confirmPassword' value="{user.confirmPassword}" onChange="{changeHandler}" required />
            </div>
            <div className="below-pass">
              <label for="Remember Me" className="remember-check">
                <input type="checkbox" name="Remember Me" id="" />
                <span className="checkbox"></span>
                I accept all Terms & Conditions</label
              >
            </div>
            <button className="btn btn-primary button-submit normal-shadow" onClick="{signupHandler}">Sign Up</button>
            <Link to="/login">Already have an account &gt;</Link>
          </div>
        </div>
      </main>
  )
}

export default Signup