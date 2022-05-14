import UserModel from "../Model/Users";
const UsersService = {
	registerNewUser: async (
		name: string,
		email: string,
		password: string,
		admin: boolean,
		coins: number
	) => {
		return await UserModel.register(name, email, password, admin, coins);
	},

	verifyEmail: async (email: string): Promise<number> => {
		const userEmail = await UserModel.getEmail(email);
		return userEmail.length;
	},

	logIn: async (email: string, password: string) => {
		return await UserModel.logIn(email, password);
	},

	giveCoins: async (name: string, coins: number) => {
		return await UserModel.giveCoins(name, coins);
	},
};

export default UsersService;
