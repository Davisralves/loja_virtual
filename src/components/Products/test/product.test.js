import Products from "../Products";
import { screen } from "@testing-library/react";
import renderWithRouter from "../../../helpers/renderWithRouter";

describe("test if component Product work as aspected", () => {
	test("render products if receive an product array", () => {
		renderWithRouter(<Products  products={[{title: 'produto', thumbnail: '', price: 2000 }]}/>);
		const title = screen.getByRole('heading', { level: 5, name: "produto" });
		const image = screen.getByAltText('smartphone')
		const price = screen.getByText(`R$ ${2000},00`)
		expect(title).toBeInTheDocument();
		expect(image).toBeInTheDocument();
		expect(price).toBeInTheDocument();
	});
  test("render Loading if receive an empty array", () => {
		renderWithRouter(<Products  products={[]}/>);
		const loading = screen.getByTestId('loadingComponent')
		expect(loading).toBeInTheDocument();
	});
});
