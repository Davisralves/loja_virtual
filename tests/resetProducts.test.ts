import * as sinon from "sinon";
import app from "../index";
import chai from "chai";
import chaiHttp from "chai-http";
import ProductModel from '../Model/Products';
import API from '../Model/API';

chai.use(chaiHttp);

const { expect } = chai;

describe("Test if route put /products/reset work as aspected", () => {
	describe("Test route in case of sucess", () => {
		const products = [{
			title: "title",
			thumbnail: "some link",
			price: 2000,
		},
    {
			title: "title2",
			thumbnail: "another link",
			price: 1000,
		}
  ];
		before(async () => {
      sinon.stub(API, 'fetchProducts').resolves(products);
			sinon.stub(ProductModel, 'TruncateDatabase').resolves();
			sinon.stub(ProductModel, 'addProduct').resolves(1);
		});

		after(() => {
			(ProductModel.TruncateDatabase as sinon.SinonStub).restore();
			(ProductModel.addProduct as sinon.SinonStub).restore();
		});

		it("response status 200 and return the number of affected rows", async () => {
			const chaiHttpResponse = await chai
				.request(app)
				.put("/products/reset")
				.send(products);
			expect(chaiHttpResponse.body.totalProducts).to.be.equals(2);
			expect(chaiHttpResponse.status).to.be.equals(200);
		});
	});
});
