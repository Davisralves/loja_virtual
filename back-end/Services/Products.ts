import API from "../Model/API";
import { Product } from "../Interfaces/Products";
import ProductModel from "../Model/Products";
const ProductsService = {
  getProducts: async () => {
    return await API.fetchProducts();
  },
  resetProducts: async (products: Product[] ) => {
    await ProductModel.TruncateDatabase();
    const productsPromises = products.map((product) => ProductModel.addProduct(product));
    return (await Promise.allSettled(productsPromises)).length
  }
}

export default ProductsService;