import React, { useState } from "react";
import { giveCoins } from "../../Service";

function GiveCoins() {
	const [message, setMessage] = useState("");
	const [name, setName] = useState("");
	const [coins, setCoins] = useState(0);
	const handleClick = async (
		event: React.MouseEvent<HTMLButtonElement, MouseEvent>
	) => {
		event.preventDefault();
		if (name !== "" && coins !== 0) {
			const response = await giveCoins(name, coins);
			if (response.Error) return setMessage(response.Error);
			return setMessage("Moedas adicionadas com sucesso");
		}
		setMessage("Campos Invalidos !");
	};
	return (
		<form className="adminForm">
			<h5>Dar moedas para usuario</h5>

			<label htmlFor="username">
				Nome:{" "}
				<input
					type="text"
					id="username"
					placeholder="Nome do usuário"
					onChange={(e) => setName(e.target.value)}
				/>
			</label>

			<label htmlFor="coins">
				Coins:{" "}
				<input
					type="number"
					id="coins"
					placeholder="Número de coins"
					onChange={(e) => setCoins(parseInt(e.target.value))}
				/>
			</label>
			<button className="btn btn-success" onClick={(e) => handleClick(e)}>
				Adicionar
			</button>
			<span>{message}</span>
		</form>
	);
}

export default GiveCoins;
