import {connection} from "./connection";
import { ResultSetHeader, RowDataPacket } from "mysql2";

const UserModel = {
  register: async (name: string, email: string, password: string, admin: boolean) => {
    const query = `INSERT INTO users (name, email, password, admin)
    VALUES (?, ?, ?, ?)`;
		const [result] = await connection.execute<ResultSetHeader>(query, [
			name,
			email,
			password,
			admin,
		]);
    return result.insertId;
  },

  getEmail: async (email: string) => {
    const query = `SELECT email FROM users WHERE email = ?`;
    const [result] = await connection.execute(query, [email]) as RowDataPacket[]
    return result;
  }
}

export default UserModel;

