import Login from "../Login";
import { screen } from "@testing-library/react";
import renderWithRouter from "../../../helpers/renderWithRouter";

describe('test if login page work as aspected', () => {
  test('header is render correct', () => {
    renderWithRouter(<Login />);
    const header = screen.getByRole('heading', {level: 3, name: "Login"});
    expect(header).toBeInTheDocument();
  })
  test('inputs are render correct', () => {
    renderWithRouter(<Login />);
    const usernameInput = screen.getByPlaceholderText('Username');
    const passwordInput = screen.getByPlaceholderText('Password');
    expect(usernameInput).toBeInTheDocument();
    expect(passwordInput).toBeInTheDocument();
  })
  test('button is render correct', () => {
    renderWithRouter(<Login />);
    const button = screen.getByRole('button', {value: 'Login'});
    expect(button).toBeInTheDocument();
  })
})