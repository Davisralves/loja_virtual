import React, { useState } from "react";
import { useContext } from "react";
import AppContext from "../../context/context";
import Header from "../../components/Header";

function Home() {
const user = useContext(AppContext);
console.log('home user', user);
return (
  <main>
    <Header />
    <h1>Home</h1>
  </main>
);
}

export default Home;