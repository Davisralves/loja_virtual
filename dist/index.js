"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
require("dotenv/config");
var errorHandler_1 = require("./Controller/middlewares/errorHandler");
var Products_1 = require("./Controller/Products");
var Users_1 = require("./Controller/Users");
var cors = require("cors");
var app = (0, express_1.default)();
var bodyParse = require("body-parser");
app.use(cors());
var PORT = process.env.PORT;
app.use(bodyParse.json());
app.post("/register", Users_1.validateName, Users_1.validatePassword, Users_1.validateEmail, Users_1.register);
app.post("/login", Users_1.logIn);
app.post("/coins", Users_1.giveCoins);
app.get("/products", Products_1.getAllProducts);
app.post("/products", Products_1.postProduct);
app.put("/products/reset", Products_1.resetProducts);
app.use(errorHandler_1.errorHandler);
app.listen(PORT, function () {
    console.log("Server is running at ".concat(PORT || 8000));
});
exports.default = app;
