import { generateError } from "../middlewares/errorHandler";
import { isNotString } from "../middlewares/helpers";
import { Request, Response, NextFunction } from "express";
import StatusCode from "../../enums/statusCode";

const validateName = async (
	req: Request,
	_res: Response,
	next: NextFunction
) => {
	try {
		const { name } = req.body;
		if (isNotString(name))
			throw generateError("Name must be a string", StatusCode.BAD_REQUEST);
		if (name.length < 4)
			throw generateError(
				"Name must have at least 4 characters",
				StatusCode.BAD_REQUEST
			);
		next();
	} catch (error) {
		next(error);
	}
};

export default validateName;
