"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.giveCoins = exports.logIn = exports.register = exports.validatePassword = exports.validateName = exports.validateEmail = void 0;
var validateName_1 = __importDefault(require("./validateName"));
exports.validateName = validateName_1.default;
var validatePassword_1 = __importDefault(require("./validatePassword"));
exports.validatePassword = validatePassword_1.default;
var validateEmails_1 = __importDefault(require("./validateEmails"));
exports.validateEmail = validateEmails_1.default;
var register_1 = __importDefault(require("./register"));
exports.register = register_1.default;
var login_1 = __importDefault(require("./login"));
exports.logIn = login_1.default;
var giveCoins_1 = __importDefault(require("./giveCoins"));
exports.giveCoins = giveCoins_1.default;
