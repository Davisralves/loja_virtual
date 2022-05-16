import { generateError } from "../middlewares/errorHandler";
import { Request, Response, NextFunction } from "express";
import StatusCode from "../../enums/statusCode";
import UsersService from "../../Services/Users";
const giveCoins = async (
	req: Request,
	res: Response,
	next: NextFunction
) => {
	try {
		const { name, coins } = req.body;
    const affectedRows = await UsersService.giveCoins(name, coins);
    if(affectedRows === 0) throw generateError('User not found', StatusCode.NOT_FOUND);
    res.status(200).json({});
		next();
	} catch (error) {
		next(error);
	}
};

export default giveCoins;
