import Header from "../Header";
import { screen } from "@testing-library/react";
import renderWithRouter from "../../../helpers/renderWithRouter";

describe("test if component header work as aspected", () => {
	test("header is render correct", () => {
		renderWithRouter(<Header />);
		const name = screen.getByTestId('userName')
		const cart = screen.getByTestId('cart')
		const coins = screen.getByTestId('coins')
		expect(name).toBeInTheDocument();
		expect(cart).toBeInTheDocument();
		expect(coins).toBeInTheDocument();
	});
});
