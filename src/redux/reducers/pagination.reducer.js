const initialState = {};
const totalResults = (state = initialState, action) => {
  if (action.status === "resolved" && action.pagination) {
    return Object.assign({}, state, {
      [action.pagination.resourceName]: action.pagination,
    });
  }
  return state;
};

export default totalResults;
