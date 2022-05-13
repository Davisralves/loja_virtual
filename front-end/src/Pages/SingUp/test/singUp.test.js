import SingUp from "../SingUp";
import { screen } from "@testing-library/react";
import renderWithRouter from "../../../helpers/renderWithRouter";

describe("test if sing up page work as aspected", () => {
	test("header is render correct", () => {
		renderWithRouter(<SingUp />);
		const header = screen.getByRole("heading", { level: 3, name: "Register" });
		expect(header).toBeInTheDocument();
	});
	test("inputs are render correct", () => {
		renderWithRouter(<SingUp />);
		const nameInput = screen.getByPlaceholderText("Name");
		const emailInput = screen.getByPlaceholderText("E-mail");
		const passwordInput = screen.getByPlaceholderText("Password");
		expect(nameInput).toBeInTheDocument();
		expect(emailInput).toBeInTheDocument();
		expect(passwordInput).toBeInTheDocument();
	});
	test("Register button is render correct", () => {
		renderWithRouter(<SingUp />);
		const registerButton = screen.getByRole("button", { name: "Register" });
		expect(registerButton).toBeInTheDocument();
	});
});
