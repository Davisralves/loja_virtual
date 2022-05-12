import {connection} from "./connection";
import { ResultSetHeader, RowDataPacket } from "mysql2";

const UserModel = {
  register: async (name: string, email: string, password: string, admin: boolean, coins: number) => {
    const query = `INSERT INTO users (name, email, password, admin, coins)
    VALUES (?, ?, ?, ?, ?)`;
		const [result] = await connection.execute<ResultSetHeader>(query, [
			name,
			email,
			password,
			admin,
      coins
		]);
    return result.insertId;
  },

  getEmail: async (email: string) => {
    const query = `SELECT email FROM users WHERE email = ?`;
    const [result] = await connection.execute(query, [email]) as RowDataPacket[]
    return result;
  },

  logIn: async (email: string, password: string) => {
    const query = `SELECT name, email, admin, coins  FROM users WHERE email = ? AND password = ?`;
    const [result] = await connection.execute(query, [email, password]) as RowDataPacket[]
    return result;
  }
}

export default UserModel;

