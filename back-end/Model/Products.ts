import { connection } from "./connection";
import { ResultSetHeader, RowDataPacket } from "mysql2";
import { Product } from "../Interfaces/Products";

const ProductModel = {
	TruncateDatabase: async () => {
		const query = `TRUNCATE TABLE products`;
		const [result] = await connection.execute<ResultSetHeader>(query);
		return result;
	},

	addProduct: async ({ title, thumbnail, price }: Product) => {
		const query = `INSERT INTO products (title, thumbnail, price)
    VALUES (?, ?, ?)`;
		const [result] = await connection.execute<ResultSetHeader>(query, [
			title,
			thumbnail,
			price,
		]);
		return result.affectedRows;
	},

  getAllProducts: async () => {
    const query = `SELECT * from products`;
    const [result] = await connection.execute<RowDataPacket[]>(query);
    return result as Product[];
  },

  postProduct: async (title: string, thumbnail: string, price: number) => {
    const query = `INSERT INTO products (title, thumbnail, price) VALUES (?, ?, ?)`;
    const [product] = await connection.execute<ResultSetHeader>(query, [title, thumbnail, price])
    return product.insertId;
  }
};

export default ProductModel;
