import { createResource, defaultHeaders } from "redux-rest-resource";
import { apiUrl } from "../config";
import { clearAuthData, getAuthData, saveAuthData } from "../authStorage";

const setAuthHeader = (accessToken) => {
  Object.assign(defaultHeaders, {
    Authorization: accessToken,
  });
};

const withSaveTokens = (res) => {
  setAuthHeader(res.body.accessToken);
  saveAuthData(res.body);
  return {
    res,
    body: res.body,
  };
};

export const { types, actions, rootReducer } = createResource({
  name: "user",
  url: `${apiUrl}/api/sign-in`,
  actions: {
    login: {
      method: "POST",
      transformResponse: withSaveTokens,
      reduce: (state) => {
        return {
          ...state,
          isAuth: true,
        };
      },
    },

    refresh: {
      method: "POST",
      url: `${apiUrl}/api/auth-token-refresh`,
      transformResponse: withSaveTokens,
    },

    create: {
      method: "POST",
      transformResponse: withSaveTokens,
    },

    register: {
      method: "POST",
      url: `${apiUrl}/api/sign-up`,
      transformResponse: (res) => ({
        data: res.body,
      }),
    },

    logout: {
      url: `${apiUrl}/api/logout`,
      // isPure: true,
      method: "POST",
      reduce: (state) => {
        clearAuthData();
        return {
          ...state,
          item: null,
        };
      },
    },
  },
});

setAuthHeader(getAuthData().accessToken);
