import { defaultHeaders } from "redux-rest-resource";

export const getAuthData = () =>
  JSON.parse(localStorage.getItem("authData") || '{}');

export const saveAuthData = (data) => {
  const { accessToken } = data;
  Object.assign(defaultHeaders, { Authorization: accessToken });
  return localStorage.setItem(
    "authData",
    JSON.stringify(data)
  );
};

export const clearAuthData = () => {
  localStorage.removeItem("authData");
  delete defaultHeaders.Authorization;
};

export const hasAuthData = () =>
  !!getAuthData().accessToken;

export const reSetAuthToken = () => {
  Object.assign(defaultHeaders, { Authorization: getAuthData().accessToken });
};
