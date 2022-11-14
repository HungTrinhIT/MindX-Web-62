const reducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case "ADD_TO_CART":
      //logic
      //Case 1: Nếu sản phẩm đã tồn tại trong giỏ hàng => cập nhật quantity (+1 quantity)

      //Case 2: Sản phẩm chưa tồn tại
      const newCartItem = { ...payload, quantity: 1 };
      const newCart = [...state.cart, newCartItem];
      return {
        ...state,
        cart: newCart,
      };

    default:
      return state;
  }
};

export default reducer;
