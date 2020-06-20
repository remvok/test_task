import React from "react";
import { Form, Input, Button, Row, Col } from "antd";
import { showErrorNotifications } from "../../../helpers/main";

const layout = {
  labelCol: { span: 8 },
  layout: "vertical",
  wrapperCol: { span: 24 },
};

const SingUpForm = ({ handleSubmit, handleSuccess }) => {
  const onFinish = (values) => {
    handleSubmit(values)
      .then(() => {
        handleSuccess();
      })
      .catch((e) => {
        showErrorNotifications(e);
      });
  };

  const validatePassword = (rule, value, callback) => {
    const regExpLetters = new RegExp("[a-zA-Z]");
    const regExpDigits = new RegExp("[0-9]");
    if (
      value.length > 6 &&
      regExpLetters.test(value) &&
      regExpDigits.test(value)
    ) {
      callback();
    } else {
      callback("Error!");
    }
  };

  return (
    <Form
      {...layout}
      name="basic"
      initialValues={{ remember: true }}
      onFinish={onFinish}
    >
      <Row>
        <Col className="sign-up-first-name" span={12}>
          <Form.Item
            name="firstName"
            rules={[{ required: true, message: "First Name is required!" }]}
          >
            <Input placeholder="First Name" />
          </Form.Item>
        </Col>
        <Col className="sign-up-last-name" span={12}>
          <Form.Item
            name="lastName"
            rules={[{ required: true, message: "Last Name is required!" }]}
          >
            <Input placeholder="Last Name" />
          </Form.Item>
        </Col>
      </Row>
      <Row>
        <Col span={24}>
          <Form.Item
            name="email"
            rules={[
              {
                required: true,
                message: "Email is required!",
              },
              {
                type: "email",
                message: "Invalid Email!",
              },
            ]}
          >
            <Input placeholder="Email address" />
          </Form.Item>
        </Col>
      </Row>
      <Row>
        <Col span={24}>
          <Form.Item
            name="password"
            rules={[
              { required: true, message: "Password is required!" },
              {
                message: "Al least 7 chars contains letters and numbers",
                validator: validatePassword,
              },
            ]}
          >
            <Input.Password placeholder="Password" />
          </Form.Item>
        </Col>
      </Row>
      <Row>
        <Col span={24}>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              Sign up
            </Button>
          </Form.Item>
        </Col>
      </Row>
    </Form>
  );
};

export default SingUpForm;
