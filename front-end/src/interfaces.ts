export interface IUserLogin {
  username: string,
  password: string
}

export interface IUser {
  username: string,
  admin: boolean,
}

export interface IUserContext extends IUser{
  setUsername: Function,
  setAdmin: Function,
}