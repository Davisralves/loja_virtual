import React, { useState } from "react";
import { createProduct } from "../../Service";

function CreateProduct() {
	const [message, setMessage] = useState("");
	const [title, setTitle] = useState("");
	const [price, setPrice] = useState(0);
	const [thumbnail, setThumbnail] = useState("");
	const handleClick = async (
		event: React.MouseEvent<HTMLButtonElement, MouseEvent>
	) => {
		event.preventDefault();
		if (title !== "" && price !== 0 && thumbnail !== "") {
			const response = await createProduct(title, price, thumbnail);
      if(response.Error) return setMessage(response.Error);
      return setMessage('Criado com Sucesso');
		}
		setMessage("Campos Invalidos !");
	};
	return (
		<form className="adminForm">
			<h5>Criar Produto</h5>

			<label htmlFor="titulo">
				Título:{" "}
				<input
					type="text"
					id="titulo"
					placeholder="Título"
					onChange={(e) => setTitle(e.target.value)}
				/>
			</label>
			<label htmlFor="preço">
				Preço:{" "}
				<input
					type="number"
					id="preço"
					placeholder="Preço"
					onChange={(e) => setPrice(parseInt(e.target.value))}
				/>
			</label>
			<label htmlFor="imageUrl">
				imagem:{" "}
				<input
					type="text"
					id="imageUrl"
					placeholder="URL da imagem"
					onChange={(e) => setThumbnail(e.target.value)}
				/>
			</label>
			<button className="btn btn-success" onClick={(e) => handleClick(e)}>
				Adicionar
			</button>
			<span>{message}</span>
		</form>
	);
}

export default CreateProduct;
