import React, { useContext } from "react";
import CartContext from "../../context/cart/CartContext";

const Product = (props) => {
  // Context
  const cartCtx = useContext(CartContext);
  const { dispatch } = cartCtx;

  const { product } = props;
  const { name, price, img, id, onViewProductDetail } = product;
  const formatedPrice = new Intl.NumberFormat("vi-VN", {
    style: "currency",
    currency: "VND",
  }).format(price);

  const onAddToCart = (product) => {
    const action = {
      type: "ADD_TO_CART",
      payload: product,
    };

    dispatch(action);
  };

  return (
    <div className="card pt-2" style={{ width: "18rem" }}>
      <img src={img} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
        <div className="price mb-2">
          <span>{formatedPrice}</span>
        </div>
        <div
          className="d-flex align-items-center"
          style={{
            gap: "8px",
          }}
        >
          <button
            className="btn btn-danger w-100"
            onClick={() => onAddToCart(product)}
          >
            Add to cart
          </button>
          <button
            className="btn btn-primary w-100"
            onClick={() => onViewProductDetail(id)}
          >
            Detail
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;
