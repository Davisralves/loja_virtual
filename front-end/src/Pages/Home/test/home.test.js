import Home from "../Home";
import { screen } from "@testing-library/react";
import renderWithRouter from "../../../helpers/renderWithRouter";

describe("test if component home work as aspected", () => {
	it("render as aspected", () => {
		renderWithRouter(<Home/>)
		const main = screen.getByRole('main');
    const productMainDiv = screen.getByTestId('productsMain');
		expect(main).toBeInTheDocument();
		expect(productMainDiv).toBeInTheDocument();
	});
});
