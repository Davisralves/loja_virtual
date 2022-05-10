import { fetchProducts } from "../Model/API";
const ProductsService = {
  getProducts: async () => {
    return await fetchProducts();
  },
}

export default ProductsService;