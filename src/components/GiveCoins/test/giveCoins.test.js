import GiveCoins from "../GiveCoins";
import { screen } from "@testing-library/react";
import renderWithRouter from "../../../helpers/renderWithRouter";

describe("test if component GiveCoins work as aspected", () => {
	test("Title is render correct", () => {
		renderWithRouter(<GiveCoins />);
		const title = screen.getByRole('heading', {level: 5, name: 'Dar moedas para usuario'});
    expect(title).toBeInTheDocument();
	});
  test("Input Name is render correct", () => {
		renderWithRouter(<GiveCoins />);
    const nameInput = screen.getByPlaceholderText('Nome do usuário');
    expect(nameInput).toBeInTheDocument();
	});
  test("Input coins is render correct", () => {
		renderWithRouter(<GiveCoins />);
    const inputCoins = screen.getByPlaceholderText('Número de coins');
    expect(inputCoins).toBeInTheDocument();
	});
});
