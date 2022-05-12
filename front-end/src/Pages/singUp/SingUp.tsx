import React, { useState } from "react";
import "./singUp.css";
import { registerUser } from "../../Service";
import { useNavigate } from "react-router-dom";

function SingUp() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setError] = useState('');
  const navigate = useNavigate();

  const errorRender = () => {
    if(errorMessage) return <p>{errorMessage}</p>;
    else return null; 
  }

  const handleClick = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    const response = await registerUser(name, email, password);
    if(response.Error) return setError(response.Error);
    return navigate('/');
  };

	return (
		<main className="main">
			<div className="card">
				<h3 data-testid="title">Register</h3>
				<form className="login">
        <input
						type="text"
						className="form-control"
            onChange={(e) => setName(e.target.value)}
						id="name"
						placeholder="Name"
					/>
					<label htmlFor="name"></label>
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
					<button onClick={(e) => handleClick(e)} className="btn btn-primary">Register</button>
				</form>
			</div>
		</main>
	);
}

export default SingUp;
