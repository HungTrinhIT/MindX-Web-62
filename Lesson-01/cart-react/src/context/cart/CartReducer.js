const reducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case "ADD_TO_CART":
      let newCart = [];
      const searchItemIndex = state.cart.findIndex(
        (cartItem) => cartItem.id === payload.id
      );

      if (searchItemIndex === -1) {
        const newCartItem = { ...payload, quantity: 1 };
        newCart = [...state.cart, newCartItem];
      } else {
        newCart = [...state.cart];
        newCart[searchItemIndex].quantity += 1;
      }

      return {
        ...state,
        cart: newCart,
      };
    case "INCREASE_QUANTITY":
      ///Logic code
      return { ...state };
    case "DECREASE_QUANTITY":
      ///Logic code
      return { ...state };
    case "DELETE_CART_ITEM":
      const remainCart = state.cart.filter((cart) => cart.id !== payload.id);

      return { ...state, cart: remainCart };

    default:
      return state;
  }
};

export default reducer;
