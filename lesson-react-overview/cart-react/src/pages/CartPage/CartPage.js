import React, { useContext } from "react";
import CartContext from "../../context/cart/CartContext";
import { AiOutlineDelete } from "react-icons/ai";

import "./CartPage.css";
const Cart = (props) => {
  const { state, dispatch } = useContext(CartContext);
  const { cart } = state;

  const onDeleteCartItem = (id) => {
    const action = {
      type: "DELETE_CART_ITEM",
      payload: { id },
    };

    dispatch(action);
  };

  const onDecreaseCart = (id) => {};
  const onIncreaseCart = (id) => {};

  const cartBody =
    cart &&
    cart.map((cartItem, index) => {
      const { name, price, img, quantity, id } = cartItem;
      return (
        <tr>
          <th scope="row">1</th>
          <td>{name}</td>
          <td>
            <img
              src={img}
              style={{ width: "36px", height: "100%" }}
              alt={name}
            />
          </td>
          <td className="d-flex">
            <button
              className="btn btn-primary"
              onClick={() => onIncreaseCart(id)}
            >
              -
            </button>
            <span className="mx-2">{quantity}</span>
            <button
              className="btn btn-primary"
              onClick={() => onDecreaseCart(id)}
            >
              +
            </button>
          </td>
          <td>{quantity * Number(price)}</td>
          <td>
            <button
              className="btn btn-danger rounded-circle"
              onClick={() => onDeleteCartItem(id)}
            >
              <AiOutlineDelete />
            </button>
          </td>
        </tr>
      );
    });

  return (
    <div className="container">
      <h4 className="mb-4">Cart</h4>
      <div className="cart-container">
        <table className="table">
          <thead>
            <tr>
              <th scope="col"></th>
              <th scope="col">Title</th>
              <th scope="col">Image</th>
              <th scope="col">Quantity</th>
              <th scope="col">Price</th>
              <th scope="col">...</th>
            </tr>
          </thead>
          <tbody>{cartBody}</tbody>
        </table>
      </div>
    </div>
  );
};

export default Cart;
