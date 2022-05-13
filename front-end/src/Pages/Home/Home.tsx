import React, { useState } from "react";
import { useContext, useEffect } from "react";
import AppContext from "../../context/context";
import Header from "../../components/Header/Header";
import { fetchProducts } from "../../Service";
import { Product } from "../../Interfaces";
import Products from "../../components/Products/Products";
import "./home.css";

function Home() {
	const user = useContext(AppContext);
	console.log("home user", user);
	const [products, setProducts] = useState([] as Product[] | []);

	useEffect(() => {
		const getProducts = async () => {
			try {
				setProducts(await fetchProducts());
			} catch (error) {
				console.log(error);
			}
		};
		getProducts();
	}, []);

	return (
		<main>
			<Header />
			<div className="productsMain">{<Products products={products} />}</div>
		</main>
	);
}

export default Home;
