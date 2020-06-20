import { createResource } from "redux-rest-resource";
import { apiUrl } from "../config";
import { getReducer } from "./helper";

export const { types, actions, rootReducer } = createResource({
  name: "me",
  url: `${apiUrl}/api/me`,
  actions: {
    get: {
      transformResponse: (res) => ({ body: res.body }),
    },
    update: {
      method: "PATCH",
      reduce: (state, action) => getReducer(state, action),
    },
    clear: {
      isPure: true,
      reduce: (state) => ({ ...state, item: null }),
    },
  },
});
