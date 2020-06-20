import { defaultGlobals } from "redux-rest-resource";
import { actions } from "./users";
import { getAuthData, clearAuthData } from "../authStorage";

const NOOP = () => {};
const PATH_THROUGH_REQUEST_REGEXP = /\/(auth-token-refresh|sign-in|forgot-password|reset-password|users)/i;

let refreshTokenPromise;
Object.assign(defaultGlobals, {
  fetch: (...args) =>
    fetch.apply(this, args).then((response) => {
      if (
        response.status !== 401 ||
        PATH_THROUGH_REQUEST_REGEXP.test(response.url)
      ) {
        return response;
      }
      const { refreshToken, userId } = getAuthData();
      if (!(refreshToken && userId)) {
        return Promise.reject(response);
      }

      if (refreshTokenPromise) {
        return refreshTokenPromise;
      }
      refreshTokenPromise = actions
        .refreshUser({ refreshToken, userId })(NOOP)
        .then((res) => {
          refreshTokenPromise = null;
          return res;
        })
        .catch((response) => {
          clearAuthData();
          document.location.href = "/signin";
          return Promise.reject(response);
        })
        .then(() => fetch.apply(this, args));

      return refreshTokenPromise;
    }),
});
