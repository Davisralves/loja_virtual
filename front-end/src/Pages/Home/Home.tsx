import React, { useState } from "react";
import { useContext, useEffect } from "react";
import AppContext from "../../context/context";
import Header from "../../components/Header";
import { fetchProducts } from "../../Service";
import {Product} from '../../Interfaces';
function Home() {
const user = useContext(AppContext);
console.log('home user', user);
const [products, setProducts] = useState([] as Product[]);

useEffect(() => {
  const getProducts = async () => {
    try{
      setProducts(await  fetchProducts());
    } catch(error) {
      console.log(error);
    }
  };
  getProducts();
}, [])

const renderProducts = () => {
  if(products.length > 0) return <span />;
  return products.map(({thumbnail}) => <img alt="smartphone" src={thumbnail}></img>)
}
return (
  <main>
    <Header />
    {renderProducts()}
    <h1>Home</h1>
  </main>
);
}

export default Home;