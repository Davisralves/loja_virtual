import React, { useState } from "react";
import "./login.css";
import { useContext } from "react";
import { verifyLogin } from "../../Service";
import { useNavigate } from "react-router-dom";
import AppContext from "../../context/context";

function Login() {
  const user = useContext(AppContext);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setError] = useState('');
  const navigate = useNavigate();

  const errorRender = () => {
    if(errorMessage) return <p>{errorMessage}</p>;
    else return null; 
  }

  const handleError = (error: string) => {
    setError(error);
    setUsername('');
    setPassword('');
  }

  const handleClick = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    const response = await verifyLogin({username, password});
    if(response.status !== 200) {
      return handleError('error');
    } 
    const { admin } = response.body;
    user.setUsername(username); 
    user.setAdmin(admin);
    navigate('/home');
  };

	return (
		<main className="main">
			<div className="card">
				<h3 data-testid="title">Login</h3>
				<form className="login">
					<input
						type="email"
						className="form-control"
            onChange={(e) => setUsername(e.target.value)}
						id="username"
						placeholder="Username"
					/>
					<label htmlFor="username"></label>
					<input
						type="password"
            onChange={(e) => setPassword(e.target.value)}
						className="form-control"
						id="password"
						placeholder="Password"
					/>
					<label htmlFor="password"></label>
          {errorRender()}
					<button onClick={(e) => handleClick(e)} className="btn btn-primary">Login</button>
				</form>
			</div>
		</main>
	);
}

export default Login;
