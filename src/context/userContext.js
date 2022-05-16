import React, { useState } from "react";
import AppContext from "./context";

function Provider({ children }) {
	const [name, setName] = useState("Usuario");
	const [email, setEmail] = useState("Default");
	const [admin, setAdmin] = useState(false);
	const [coins, setCoins] = useState(0);
	const contextValue = {
    name,
    setName,
		email,
		setEmail,
		admin,
		setAdmin,
		coins,
		setCoins,
	};

	return (
		<AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
	);
}

export default Provider;
