import { generateError } from "../middlewares/errorHandler";
import { Request, Response, NextFunction } from "express";
import StatusCode from "../../enums/statusCode";
import UsersService from "../../Services/Users";
import md5 from 'md5';

const register = async (
	req: Request,
	res: Response,
	next: NextFunction
) => {
	try {
    const { name, email, password, admin } = req.body;
    const hash = md5(password);
    UsersService.registerNewUser(name, email, hash, admin);
    res.status(StatusCode.CREATED).json({name, email, admin})
	} catch (error) {
		next(error);
	}
};

export default register;
