import React from "react";
import { Form, Input, Button } from "antd";
import { showErrorNotifications } from "../../../helpers/main";

const layout = {
  labelCol: { span: 10 },
  layout: "vertical",
  wrapperCol: { span: 24 },
};

const SingInForm = ({ handleSubmit }) => {
  const onFinish = (values) => {
    const data = {};
    data.email = values.email;
    data.password = values.password;
    handleSubmit(data)
      .then((res) => {
        window.location.href = "/dashboard";
      })
      .catch((e) => {
        showErrorNotifications(e);
      });
  };

  return (
    <Form
      {...layout}
      name="basic"
      initialValues={{ remember: true }}
      onFinish={onFinish}
    >
      <Form.Item
        name="email"
        rules={[{ required: true, message: "Please input your Email!" }]}
      >
        <Input placeholder="Email" />
      </Form.Item>

      <Form.Item
        name="password"
        rules={[{ required: true, message: "Please input your password!" }]}
      >
        <Input.Password placeholder="Password" />
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default SingInForm;
