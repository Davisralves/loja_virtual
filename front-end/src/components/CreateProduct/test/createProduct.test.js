import CreateProduct from "../CreateProduct";
import { screen } from "@testing-library/react";
import renderWithRouter from "../../../helpers/renderWithRouter";

describe("test if component CreateProduct work as aspected", () => {
	test("Title is render correct", () => {
		renderWithRouter(<CreateProduct />);
		const title = screen.getByRole('heading', {level: 5, name: 'Criar Produto'});
    expect(title).toBeInTheDocument();
	});
  test("Input Title is render correct", () => {
		renderWithRouter(<CreateProduct />);
    const titleInput = screen.getByPlaceholderText('Título');
    expect(titleInput).toBeInTheDocument();
	});
  test("Input price is render correct", () => {
		renderWithRouter(<CreateProduct />);
    const priceInput = screen.getByPlaceholderText('Preço');
    expect(priceInput).toBeInTheDocument();
	});
  test("Input thumbnail is render correct", () => {
		renderWithRouter(<CreateProduct />);
    const titleInput = screen.getByPlaceholderText('URL da imagem');
    expect(titleInput).toBeInTheDocument();
	});
});
