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
};

export default ProductModel;
