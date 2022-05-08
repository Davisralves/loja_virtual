import React, { useState } from "react";
import { useContext } from "react";
import AppContext from "../../context/context";


function Home() {
const user = useContext(AppContext);
console.log('home user', user);
return (<h1>Home</h1>);
}

export default Home;