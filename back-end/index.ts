import express from "express";
import "dotenv/config";
import errorHandler from "./Controller/middlewares/errorHandler";
import { getProducts } from "./Controller/getProducts";
const cors = require("cors");
const app = express();
const bodyParse = require('body-parser');

app.use(cors());

const { PORT } = process.env;

app.use(bodyParse.json());

// app.post('/login');


app.get("/products", getProducts);


app.use(errorHandler);

app.listen(PORT, () => {
	console.log(`Server is running at ${PORT || 8000}`);
});
