import React from "react";

function GiveCoins() {
	return (
		<form className="adminForm">
      <h5>Dar moedas para usuario</h5>

			<label htmlFor="username">
        Nome:
        {' '}
      <input
				type="text"
				id="username"
				placeholder="Nome do usuário"
			/>
      </label>

			<label htmlFor="coins">
        Coins:
        {' '}
      <input
				type="number"
				id="coins"
				placeholder="Número de coins"
			/>
      </label>
      <button className="btn btn-success">Adicionar</button>
		</form>
	);
}

export default GiveCoins;