import "../../components/Products/product.css";
import { useContext, useEffect } from "react";
import AppContext from "../../context/context";
import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { modifyCoins } from "../../Service";
import Header from '../../components/Header/Header';
import './productDetails.css';
type ProductInState = {
	state: {
		title: string,
    thumbnail: string,
    price: number,
	};
};


function ProductDetails() {
  const [message, setMessage] = useState('');
	const user = useContext(AppContext);
	const location = useLocation();
	const {state: { title, thumbnail, price} } = location as ProductInState;

  const tryBuy = async () => {
    if(user.coins >= price)  {
      const response = await modifyCoins(user.name, -price);
			if (response.Error) return setMessage(response.Error);
			return setMessage("Produto adquirido com sucesso");
    } return setMessage('Moedas insuficientes');
  }

	return (
    <main className="productDetailsMain">
      <Header />
    <div className="productCard" id="ProductCardDetails">
    <h5>{title}</h5>
    <img alt="smartphone" src={thumbnail} className="productImg"></img>
    <div className="price">{`R$ ${price.toFixed(2).replace('.', ',')}`}</div>
    <button className="btn btn-primary" onClick={tryBuy}>Comprar</button>
    <span>{message}</span>
  </div>
    </main>
  );
}

export default ProductDetails;
