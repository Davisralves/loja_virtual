import React from "react";
import "./login.css";
import { useContext } from "react";
import { UseUserContext } from '../../context/userContext';

function Login() {
  const user = useContext(UseUserContext().UserContext);
  const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    user.setUsername('Davi Alves');
    console.log(user);
  };

	return (
		<main className="main">
			<div className="card">
        <h1>{user.username}</h1>
				<h3 data-testid="title">Login</h3>
				<form className="login">
					<input
						type="email"
						className="form-control"
						id="username"
						placeholder="Username"
					/>
					<label htmlFor="username"></label>
					<input
						type="password"
						className="form-control"
						id="password"
						placeholder="Password"
					/>
					<label htmlFor="password"></label>
					<button onClick={(e) => handleClick(e)} className="btn btn-primary">Login</button>
				</form>
			</div>
		</main>
	);
}

export default Login;
