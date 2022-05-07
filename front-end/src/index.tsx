import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./Styles/index.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from "./Pages";
import reportWebVitals from "./reportWebVitals";
import { render } from "react-dom";

const rootElement = document.getElementById("root");
render(
	<BrowserRouter>
		<Routes>
			<Route path="/" element={<Login />} />
		</Routes>
	</BrowserRouter>,
	rootElement
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
