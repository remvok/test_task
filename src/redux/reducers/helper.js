import { defaultReducers } from "redux-rest-resource/lib/reducers";

export const getReducer = (state, action) =>
  action.status === "resolved"
    ? { ...defaultReducers.get(state, action), item: action.body }
    : defaultReducers.get(state, action);
