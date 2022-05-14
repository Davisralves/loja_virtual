import express from "express";
import "dotenv/config";
import { errorHandler } from "./Controller/middlewares/errorHandler";
import { getAllProducts, resetProducts, postProduct } from "./Controller/Products";
import {
	validateEmail,
	validateName,
	validatePassword,
	register,
	logIn,
  giveCoins,
} from "./Controller/Users";
const cors = require("cors");
const app = express();
const bodyParse = require("body-parser");

app.use(cors());

const { PORT } = process.env;

app.use(bodyParse.json());

app.post("/register", validateName, validatePassword, validateEmail, register);

app.post("/login", logIn);

app.post("/coins", giveCoins)

app.get("/products", getAllProducts);

app.post("/products", postProduct)

app.put("/products/reset", resetProducts);

app.use(errorHandler);

app.listen(PORT, () => {
	console.log(`Server is running at ${PORT || 8000}`);
});

export default app;
