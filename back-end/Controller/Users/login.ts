import { generateError } from "../middlewares/errorHandler";
import { Request, Response, NextFunction } from "express";
import StatusCode from "../../enums/statusCode";
import UsersService from "../../Services/Users";
import md5 from "md5";
const logIn = async (
	req: Request,
	res: Response,
	next: NextFunction
) => {
	try {
		const { email, password } = req.body;
    const hash = md5(password);
    const user = await UsersService.logIn(email, hash);
    if(user.length === 0) throw generateError('Invalid Email or password', StatusCode.NOT_FOUND);
    res.status(200).json(user[0]);
		next();
	} catch (error) {
		next(error);
	}
};

export default logIn;
