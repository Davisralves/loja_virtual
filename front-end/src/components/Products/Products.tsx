import { Product } from "../../Interfaces";
import "./product.css";
import ReactLoading from "react-loading";

type Props = {
	products: Product[];
};

function Products({ products }: Props) {
	const renderProducts = () => {
		if (products.length === 0)  {
      return <ReactLoading className="loading" type="spin" color="lightskyblue" height={100} width={100} />;
    }
		return products.map(({ title, thumbnail, price }, index) => (
			<div key={index} className="productCard">
				<h5>{title}</h5>
				<img alt="smartphone" src={thumbnail} className="productImg"></img>
				<div className="price">{`R$ ${price},00`}</div>
			</div>
		));
	};

	return <div className="productsMain">{renderProducts()}</div>;
}

export default Products;
