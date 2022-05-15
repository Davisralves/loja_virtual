import { IProduct } from "../../Interfaces";
import "./product.css";
import ReactLoading from "react-loading";
import Product from '../Product/Product';

type Props = {
	products: IProduct[];
};

function Products({ products }: Props) {

	const renderProducts = () => {
		if (products.length === 0)  {
      return <ReactLoading data-testid="loadingComponent" className="loading" type="spin" color="lightskyblue" height={100} width={100} />;
    }
		return products.map(({ title, thumbnail, price }, index) => (
      <Product key={index} title={title} thumbnail={thumbnail} price={price}/>
		));
	};

	return <div className="productsMain">{renderProducts()}</div>;
}

export default Products;
