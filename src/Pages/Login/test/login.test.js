import Login from "../Login";
import { screen } from "@testing-library/react";
import renderWithRouter from "../../../helpers/renderWithRouter";

describe("test if login page work as aspected", () => {
	test("header is render correct", () => {
		renderWithRouter(<Login />);
		const header = screen.getByRole("heading", { level: 3, name: "Login" });
		expect(header).toBeInTheDocument();
	});
	test("inputs are render correct", () => {
		renderWithRouter(<Login />);
		const usernameInput = screen.getByPlaceholderText("E-mail");
		const passwordInput = screen.getByPlaceholderText("Password");
		expect(usernameInput).toBeInTheDocument();
		expect(passwordInput).toBeInTheDocument();
	});
	test("Login button is render correct", () => {
		renderWithRouter(<Login />);
		const LoginButton = screen.getByRole("button", { name: "Login" });
		expect(LoginButton).toBeInTheDocument();
	});
  
	test("Sing up button is render correct", () => {
		renderWithRouter(<Login />);
		const LoginButton = screen.getByRole("button", { name: "Sing Up" });
		expect(LoginButton).toBeInTheDocument();
	});
});
