import customMessage from "./customMessage";

const showErrorNotifications = (error) => {
  const msg =
    error.body && error.body.message ? error.body.message : "Unknown error";
  customMessage({ msg, type: "error" });
};

export { showErrorNotifications };
