const { LOG_IN } = require("contexts/types");

const reducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case LOG_IN:
      localStorage.setItem("accessToken", payload.accessToken);
      return {
        ...state,
        ...payload,
      };
    default:
      return state;
  }
};

export default reducer;
