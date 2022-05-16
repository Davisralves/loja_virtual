import { generateError } from "../middlewares/errorHandler";
import { isNotString } from "../middlewares/helpers";
import { Request, Response, NextFunction } from "express";
import StatusCode from "../../enums/statusCode";

const validatePassword = async (
	req: Request,
	_res: Response,
	next: NextFunction
) => {
	try {
		const { password } = req.body;
		if (isNotString(password))
			throw generateError("Password must be a string", StatusCode.BAD_REQUEST);
		if (password.length < 8)
			throw generateError(
				"Password must have at least 8 characters",
				StatusCode.BAD_REQUEST
			);
		next();
	} catch (error) {
		next(error);
	}
};

export default validatePassword;
