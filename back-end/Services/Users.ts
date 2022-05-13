import UserModel from '../Model/Users';
const UsersService = {
  registerNewUser: async (name: string, email: string, password: string, admin: boolean, coins: number) => {
    return await UserModel.register(name, email, password, admin, coins)
  },

  verifyEmail: async (email: string): Promise<boolean> => {
    const userEmail = await UserModel.getEmail(email);
    return userEmail.length;
  },

  logIn: async (email: string, password: string) => {
    return await UserModel.logIn(email, password);
    
  }
}

export default UsersService;