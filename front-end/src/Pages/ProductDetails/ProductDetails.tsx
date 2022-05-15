import "../../components/Products/product.css";
import { useContext, useEffect } from "react";
import AppContext from "../../context/context";
import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { giveCoins } from "../../Service";

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
    if(user.coins >= price) return giveCoins(user.name, -price);
    return setMessage('Insuficient Coins');
  }

	return (
    <div className="productCard">
    <h5>{title}</h5>
    <img alt="smartphone" src={thumbnail} className="productImg"></img>
    <div className="price">{`R$ ${price.toFixed(2).replace('.', ',')}`}</div>
    <button className="btn btn-primary" onClick={tryBuy}>Comprar</button>
    <span>{message}</span>
  </div>
  );
}

export default ProductDetails;
