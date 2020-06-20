export const crashReporter = (store) => (next) => (action) => {
  try {
    if (action.type.startsWith("@@resource")) {
      if (action.code === 404) {
        return;
      }
      if (action.code === 404 || action.code >= 500) {
        return;
      }
      if (action.code === 403) {
        return;
      }
    }
    return next(action);
  } catch (err) {
    throw err;
  }
};
