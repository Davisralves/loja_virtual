import React from 'react';
import './login.css';

function Login() {
  return (
    <main className='main'>
    <div className="app">
      <h3 data-testid="title">Login</h3>
      <form className="login">
        <input type='email' className="form-control" id="username"  placeholder='Username'/>
        <label htmlFor="username"></label>
        <input type='password' className="form-control" id="password" placeholder='Password'/>
        <label htmlFor="password" ></label>
        <button className="btn btn-primary">Login</button>
      </form>
    </div>
    </main>
  );
}

export default Login;
