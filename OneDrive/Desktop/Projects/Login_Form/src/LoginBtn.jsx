import React from 'react'
import { useAuth0 } from "@auth0/auth0-react";
import LogoutBtn from './LogoutBtn';
import Profile from './Profile';
import { useState } from 'react';

function LoginBtn() {
  const { loginWithRedirect, isAuthenticated } = useAuth0();
  const [isNewUser, setIsNewUser] = useState(false);

  return (
    <>
 {
  isAuthenticated ? (
    <div>
      <Profile/>
      
    </div>
  ) : (
  <div className="container">
  <div className="form-container">
    <div className="form-toggle">
      <button
        className={isNewUser ? "" : "active"}
        onClick={() => setIsNewUser(false)}
      >
        Sign In
      </button>
      <button
        className={isNewUser ? "active" : ""}
        onClick={() => setIsNewUser(true)}
      >
        Sign Up
      </button>
    </div>
            {/* Form for Sign Up */}
    {isNewUser ? (
      <div className="form">
        <h2>Registration Form for New User</h2>
        <input type="text" placeholder="Full Name" />
        <input type="email" placeholder="Email Address" />
        <input type="password" placeholder="Enter Password" />
        <input type="password" placeholder="Confirm Password" />
        <button >Sign Up</button>
      </div>) :(
        <div className="form">
        <input placeholder="Email Address" type="email"></input>
              <input placeholder="Password" type="password"></input>
              <a href="#"> Forgot Password</a>
  <button onClick={()=>loginWithRedirect()}>Log In</button>
        </div>
      ) }
      </div>
      </div>
    )}
 </>
  );
}

export default LoginBtn