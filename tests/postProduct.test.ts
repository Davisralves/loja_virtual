import * as sinon from "sinon";
import app from "../index";
import chai from "chai";
import chaiHttp from "chai-http";
import ProductModel from '../Model/Products';

chai.use(chaiHttp);

const { expect } = chai;

describe("Test if route post /products work as aspected", () => {
	describe("Test route in case of sucess", () => {
		const product = {
			title: "title",
			thumbnail: "some link",
			price: 2000,
    };
		before(async () => {
			sinon.stub(ProductModel, 'postProduct').resolves(1);
		});

		after(() => {
			(ProductModel.postProduct as sinon.SinonStub).restore();
		});

		it("response status 201 and return the new product", async () => {
			const chaiHttpResponse = await chai
				.request(app)
				.post("/products")
				.send(product);
			expect(chaiHttpResponse.body).to.deep.equals({id: 1, ...product});
			expect(chaiHttpResponse.status).to.be.equals(201);
		});
	});
});
