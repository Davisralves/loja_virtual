import { IProduct } from "../../Interfaces";
import "../Products/product.css";
import { Link } from "react-router-dom";

function Product( { title, thumbnail, price} : IProduct) {


	return (
    <Link className="link" to="/productDetails" state={{ title, thumbnail, price }}>
    <div className="productCard">
    <h5>{title}</h5>
    <img alt="smartphone" src={thumbnail} className="productImg"></img>
    <div className="price">{`R$ ${price.toFixed(2).replace('.', ',')}`}</div>
  </div>
  </Link>
  );
}

export default Product;
