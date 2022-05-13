import React, { useState } from "react";
import { useContext, useEffect } from "react";
import AppContext from "../../context/context";
import Header from "../../components/Header/Header";
import { fetchProducts } from "../../Service";
import {Product} from '../../Interfaces';
function Home() {
const user = useContext(AppContext);
console.log('home user', user);
const [products, setProducts] = useState([] as Product[]);

useEffect(() => {
  const getProducts = async () => {
    try{
      setProducts(await fetchProducts());
    } catch(error) {
      console.log(error);
    }
  };
  getProducts();
}, [])

const renderProducts = () => {
  if(products.length === 0) return <span />;
  return products.map(({title, thumbnail, price}, index) => (
    <div key={index}>
      <h5>{title}</h5>
      <img alt="smartphone" src={thumbnail}></img>
      <legend>{price}</legend>
    </div>
  )
)
}
return (
  <main>
    <Header />
    <h1>Home</h1>
    {renderProducts()}
  </main>
);
}

export default Home;