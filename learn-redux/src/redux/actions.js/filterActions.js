export const setStatus = (payload) => {
  return {
    type: 'filters/setStatus',
    payload: payload,
  };
};

export const setSearch = (payload) => {
  return {
    type: 'filters/setSearch',
    payload: payload,
  };
};
