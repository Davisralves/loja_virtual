import UserModel from '../Model/Users';
const UsersService = {
  registerNewUser: async (name: string, email: string, password: string, admin: boolean) => {
    return await UserModel.register(name, email, password, admin)
  },

  verifyEmail: async (email: string): Promise<boolean> => {
    return !!UserModel.getEmail(email);
  }
}

export default UsersService;