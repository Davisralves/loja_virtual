import React, { useState } from "react";
import "./login.css";
import { useContext } from "react";
import { verifyLogin } from "../../Service";
import { useNavigate } from "react-router-dom";
import AppContext from "../../context/context";

function Login() {
	const user = useContext(AppContext);
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [errorMessage, setError] = useState("");
	const navigate = useNavigate();

	const errorRender = () => {
		if (errorMessage) return <p>{errorMessage}</p>;
		else return null;
	};

	const handleError = (error: string) => {
		setError(error);
	};

	const handleClick = async (
		e: React.MouseEvent<HTMLButtonElement, MouseEvent>
	) => {
		e.preventDefault();
		const response = await verifyLogin({ email, password });
		if (response.Error) return handleError(response.Error);
		const { admin, coins, name } = response;
		user.setEmail(email);
		user.setAdmin(admin);
		user.setCoins(coins);
    user.setName(name);
		navigate("/home");
	};

	return (
		<main className="main">
			<div className="card">
				<h3 data-testid="title">Login</h3>
				<form className="login">
					<input
						type="email"
						className="form-control"
						onChange={(e) => setEmail(e.target.value)}
						id="username"
						placeholder="E-mail"
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
					<button onClick={(e) => handleClick(e)} className="btn btn-primary">
						Login
					</button>
					<br />
					<button
						onClick={() => navigate("/singUp")}
						className="btn btn-outline-success"
					>
						Sing Up
					</button>
				</form>
			</div>
		</main>
	);
}

export default Login;
