import { Request, Response, NextFunction } from "express";
import ProductsService from "../../Services/Products";
import StatusCode from "../../enums/statusCode";

const getProducts = async (
	_req: Request,
	res: Response,
	next: NextFunction
) => {
	try {
		const products = await ProductsService.getProducts();
		return res.status(200).json(products);
	} catch (err) {
		const error = { status: StatusCode.INTERNAL_SERVER_ERROR, message: err };
		next(error);
	}
};

export default getProducts;
