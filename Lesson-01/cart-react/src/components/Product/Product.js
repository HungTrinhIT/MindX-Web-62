import React from "react";

const Product = (props) => {
  const { title, price, img, id, onViewProductDetail } = props;
  const formatedPrice = new Intl.NumberFormat("vi-VN", {
    style: "currency",
    currency: "VND",
  }).format(price);

  return (
    <div className="card pt-2" style={{ width: "18rem" }}>
      <img src={img} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
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
          <button className="btn btn-danger w-100">Add to cart</button>
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
