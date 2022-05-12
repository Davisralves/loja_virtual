import React, { useState } from "react";
import AppContext from "./context";

function Provider({ children }) {
	const [email, setEmail] = useState("Default");
	const [admin, setAdmin] = useState(false);
	const [coins, setCoins] = useState(0);
	const contextValue = {
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
