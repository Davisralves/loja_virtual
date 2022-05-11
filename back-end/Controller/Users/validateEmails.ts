import { generateError } from "../middlewares/errorHandler";
import { isNotString } from "../middlewares/helpers";
import { Request, Response, NextFunction } from "express";
import StatusCode from "../../enums/statusCode";

const validateEmail = async (
	req: Request,
	_res: Response,
	next: NextFunction
) => {
	try {
		const { email } = req.body;
		const emailRegex = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+\.([a-z]+)?$/i;
		if (isNotString(email))
			throw generateError("Name must be a string", StatusCode.BAD_REQUEST);
		if (!emailRegex.test(email))
			throw generateError("Invalid Email", StatusCode.BAD_REQUEST);
		  next(); // validar se e-mail existe;
	} catch (error) {
		next(error);
	}
};

export default validateEmail;
