import { Product } from "../Interfaces/Products";
import fetch from 'node-fetch';

export const fetchProducts = async () => {
  const response = await fetch('https://api.mercadolibre.com/sites/MLB/search?category=MLB1051');
  const products = await response.json();
  const filteredProducts: Product[] = products.results.map(({title, price, thumbnail}: Product) => ({title, price, thumbnail}));
  console.log(filteredProducts);
  return filteredProducts;
};
