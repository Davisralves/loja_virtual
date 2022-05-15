import React from "react";
//title: string, thumbnail: string, price: numbe
function CreateProduct() {
	return (
		<form className="adminForm">
      <h5>Criar Produto</h5>

			<label htmlFor="titulo">
        Título:
        {' '}
			<input
				type="text"
				id="titulo"
				placeholder="Título"
			/>
      </label>
			<label htmlFor="preço">
        Preço:
        {' '}
			<input
				type="text"
				id="preço"
				placeholder="Preço"
			/>
      </label>
      <label htmlFor="imageUrl">
        imagem:
        {' '}
			<input
				type="text"
				id="imageUrl"
				placeholder="URL da imagem"
			/>
      </label>
      <button className="btn btn-success">Adicionar</button>
		</form>
	);
}

export default CreateProduct;