import { LOGIN, USER_UPDATED } from "../types";

const authReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case LOGIN: {
      localStorage.setItem("token", payload.accessToken);
      return {
        ...state,
        ...payload,
      };
    }
    case USER_UPDATED:
      return {
        ...state,
        isAuthenticated: true,
        accessToken: localStorage.getItem("token"),
        user: payload.user,
      };

    default:
      return state;
  }
};

export default authReducer;
