import { IUserLogin } from "../Interfaces";
export const verifyLogin = async ({ email, password }: IUserLogin) => {
	try {
		const requestOptions = {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({ email, password }),
		};
		const response = await fetch(
			`${process.env.REACT_APP_API_URL}/login`,
			requestOptions
		);
		if (!response) throw Error("Server Error");
		return await response.json();
	} catch (error) {
		return error;
	}
};

export const registerUser = async (
	name: string,
	email: string,
	password: string,
	admin = false,
	coins = 0
) => {
	try {
		const requestOptions = {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({ name, email, password, admin, coins }),
		};
		const response = await fetch(
			`${process.env.REACT_APP_API_URL}/register`,
			requestOptions
		);
		if (!response) throw Error("Server Error");
		return response.json();
	} catch (error) {
		return error;
	}
};

export const fetchProducts = async () => {
	try {
		const response = await fetch(`${process.env.REACT_APP_API_URL}/products`);
		if (!response) throw Error("Server Error");
		return await response.json();
	} catch (error) {
		return error;
	}
};

export const createProduct = async (
	title: string,
	price: number,
	thumbnail: string
) => {
	try {
		const requestOptions = {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({ title, price, thumbnail }),
		};
		const response = await fetch(
			`${process.env.REACT_APP_API_URL}/products`,
			requestOptions
		);
		if (!response) throw Error("Server Error");
		return response.json();
	} catch (error) {
		return error;
	}
};

export const giveCoins = async (name: string, coins: number) => {
	try {
		const requestOptions = {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({ name, coins }),
		};
		const response = await fetch(
			`${process.env.REACT_APP_API_URL}/coins`,
			requestOptions
		);
		if (!response) throw Error("Server Error");
		return response.json();
	} catch (error) {
		return error;
	}
};
