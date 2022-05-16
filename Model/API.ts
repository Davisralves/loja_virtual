import { Product } from "../Interfaces/Products";
const fetch = require("node-fetch");

const API = {
  fetchProducts: async () => {
    const response = await fetch('https://api.mercadolibre.com/sites/MLB/search?category=MLB1051');
    const products = await response.json();
    const filteredProducts: Product[] = products.results.map(({title, price, thumbnail}: Product) => ({title, price, thumbnail}));
    return filteredProducts;
  },
}

export default API;



