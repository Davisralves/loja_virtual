import * as sinon from "sinon";
import UserModel from "../Model/Users";
import app from "../index";
import chai from "chai";
import chaiHttp from "chai-http";

chai.use(chaiHttp);

const { expect } = chai;

describe("Test if route /login work as aspected", () => {
	let chaiHttpResponse: Response;
	describe("Test route in case of sucess", () => {
		const loginResponse = {
			name: "validName",
			email: "validEmail@Email.com",
			admin: false,
		};
		before(async () => {
			sinon.stub(UserModel, "logIn").resolves(loginResponse as any);
		});

		after(() => {
			(UserModel.logIn as sinon.SinonStub).restore();
		});

		it("response User object if the user exist and the data is correct", async () => {
			const validUser = {
				email: "validEmail@Email.com",
				password: "validPassword",
				admin: false,
			};
			const chaiHttpResponse = await chai
				.request(app)
				.post("/login")
				.send(validUser);
			expect(chaiHttpResponse.body.name).to.be.equals(loginResponse.name);
			expect(chaiHttpResponse.body.email).to.be.equals(loginResponse.email);
			expect(chaiHttpResponse.body.admin).to.be.equals(loginResponse.admin);
		});
	});
	describe("Test route in case of error", () => {
		before(async () => {
			sinon.stub(UserModel, "logIn").resolves(false as any);
		});

		after(() => {
			(UserModel.logIn as sinon.SinonStub).restore();
		});

		it("throw expected error if data is incorrect", async () => {
			const invalidUser = {
				email: "invalid@Email.com",
				password: "invalidPassword",
				admin: false,
			};
			const chaiHttpResponse = await chai
				.request(app)
				.post("/login")
				.send(invalidUser);
			expect(chaiHttpResponse.body.Error).to.be.equals(
				"Invalid Email or password"
			);
		});
	});
});
