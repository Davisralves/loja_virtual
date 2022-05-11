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
  }
}

export default UserModel;

