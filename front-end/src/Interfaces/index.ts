export interface IUserLogin {
  email: string,
  password: string
}

export interface IUser {
  email: string,
  coins: number,
  admin: boolean,
}

export interface IUserContext extends IUser{
  setEmail: Function,
  setAdmin: Function,
  setCoins: Function,
}

export interface Product {
  title: string,
  price: number,
  thumbnail: string,
};