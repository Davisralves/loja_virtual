import { Request, Response, NextFunction } from "express";
import ProductsService from "../../Services/Products";
import StatusCode from "../../enums/statusCode";

const resetProducts = async (
	_req: Request,
	res: Response,
	next: NextFunction
) => {
	try {
		const products = await ProductsService.getProductsFromApi();
    const totalProducts: number = await ProductsService.resetProducts(products);
		return res.status(200).json({totalProducts});
	} catch (err) {
		const error = { status: StatusCode.INTERNAL_SERVER_ERROR, message: err };
		next(error);
	}
};

export default resetProducts;