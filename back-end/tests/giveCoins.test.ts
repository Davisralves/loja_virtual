import * as sinon from "sinon";
import UserModel from "../Model/Users";
import app from "../index";
import chai from "chai";
import chaiHttp from "chai-http";

chai.use(chaiHttp);

const { expect } = chai;

describe("Test if route post /coins work as aspected", () => {
	let chaiHttpResponse: Response;
	describe("Test route in case of sucess", () => {
		const object = {
      name: 'Davi Alves',
      coins: 10,
    }
		before(async () => {
			sinon.stub(UserModel, 'giveCoins').resolves(1);
		});

		after(() => {
			(UserModel.giveCoins as sinon.SinonStub).restore();
		});

		it("response empty object and status 200 if the user exist and the data is correct", async () => {
			const chaiHttpResponse = await chai
				.request(app)
				.post("/coins")
				.send(object);
			expect(chaiHttpResponse.body).to.deep.equals({});
      expect(chaiHttpResponse.status).to.equal(200);
		});
	});
});
