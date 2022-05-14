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
  },

  postProduct: async (title: string, thumbnail: string, price: number) => {
   const insetId = await ProductModel.postProduct(title, thumbnail, price)
    return {id: insetId, title, thumbnail, price};
  }
}

export default ProductsService;