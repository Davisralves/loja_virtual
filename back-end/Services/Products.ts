import API from "../Model/API";
import { Product } from "../Interfaces/Products";
import ProductModel from "../Model/Products";
const ProductsService = {
  getProductsFromApi: async () => {
    return await API.fetchProducts();
  },
  resetProducts: async (products: Product[] ) => {
    await ProductModel.TruncateDatabase();
    const productsPromises = products.map((product) => ProductModel.addProduct(product));
    return (await Promise.allSettled(productsPromises)).length
  },

  getAllProducts: async () => {
    return await ProductModel.getAllProducts();
  }
}

export default ProductsService;