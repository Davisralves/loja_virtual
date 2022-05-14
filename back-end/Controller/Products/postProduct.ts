import { Request, Response, NextFunction } from "express";
import ProductsService from "../../Services/Products";
import StatusCode from "../../enums/statusCode";

const postProduct = async (
	req: Request,
	res: Response,
	next: NextFunction
) => {
	try {
    const { title, thumbnail, price } = req.body;
		const product = await ProductsService.postProduct(title, thumbnail, price);
		return res.status(201).json(product);
	} catch (err) {
		const error = { status: StatusCode.INTERNAL_SERVER_ERROR, message: err };
		next(error);
	}
};

export default postProduct;
