import * as sinon from "sinon";
import app from "../index";
import chai from "chai";
import chaiHttp from "chai-http";
import ProductModel from "../Model/Products";

chai.use(chaiHttp);

const { expect } = chai;

describe("Test if route get /products work as aspected", () => {
	describe("Test route in case of sucess", () => {
		const products = [
			{
				title: "title",
				thumbnail: "some link",
				price: 2000,
			},
			{
				title: "title2",
				thumbnail: "another link",
				price: 1000,
			},
		];
		before(async () => {
			sinon.stub(ProductModel, "getAllProducts").resolves(products);
		});

		after(() => {
			(ProductModel.getAllProducts as sinon.SinonStub).restore();
		});

		it("response status 200 and return the products", async () => {
			const chaiHttpResponse = await chai.request(app).get("/products");
			expect(chaiHttpResponse.body).to.deep.equals(products);
			expect(chaiHttpResponse.status).to.be.equals(200);
		});
	});
});
