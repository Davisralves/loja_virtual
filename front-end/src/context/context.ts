import { createContext } from "react";
import { IUserContext } from "../Interfaces";
const AppContext = createContext<IUserContext>({
	email: "",
	admin: false,
	coins: 0,
	setCoins: (e: number) => e,
	setAdmin: (e: boolean) => e,
	setEmail: (e: string) => e,
});

export default AppContext;
