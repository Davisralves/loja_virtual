export interface IUserLogin {
  email: string,
  password: string
}

export interface IUser {
  name: string,
  email: string,
  coins: number,
  admin: boolean,
}

export interface IUserContext extends IUser{
  setName: Function,
  setEmail: Function,
  setAdmin: Function,
  setCoins: Function,
}

export interface Product {
  title: string,
  price: number,
  thumbnail: string,
};