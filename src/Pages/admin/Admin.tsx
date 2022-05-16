import React from "react";
import { useContext } from "react";
import AppContext from "../../context/context";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import GiveCoins from "../../components/GiveCoins/GiveCoins";
import CreateProduct from "../../components/CreateProduct/CreateProduct";
import "./admin.css";
function Admin() {
	const user = useContext(AppContext);
	const navigate = useNavigate();
	if (!user.admin) navigate("/home");
	return (
		<main className="mainAdmin">
			<div>
				<Link to="/home">Home</Link>
			</div>
      <section className="formMain">
			<div className="formSection">
				<GiveCoins />
			</div>
			<div className="formSection">
				<CreateProduct />
			</div>
      </section>
		</main>
	);
}

export default Admin;
