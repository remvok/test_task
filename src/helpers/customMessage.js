import { message } from "antd";

export default ({ duration = 10, msg, type }) => {
  const msgType = message[type] ? type : "info";
  message[msgType]({ className: "error-message", content: msg, duration });
};
