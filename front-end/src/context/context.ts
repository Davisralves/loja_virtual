import { createContext } from "react";
import { IUserContext } from "../Interfaces";
const AppContext = createContext<IUserContext>({
  name: "",
	email: "",
	admin: false,
	coins: 0,
  setName: (e: string) => e,
	setCoins: (e: number) => e,
	setAdmin: (e: boolean) => e,
	setEmail: (e: string) => e,
});

export default AppContext;
