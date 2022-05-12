import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./Styles/index.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Login, Home} from "./Pages";
import reportWebVitals from "./reportWebVitals";
import Provider from "./context/userContext";
import SingUp from "./Pages/singUp/SingUp";

export default function App() {
  return (
    <BrowserRouter>
    <Provider>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/singUp" element={<SingUp />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </Provider>
    </BrowserRouter>
  )
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
