import { Button, Form, FormProps, Input, message } from "antd";
import FormItem from "antd/es/form/FormItem";
import React from "react";
import "./Login.css";
export type TLogin = {
  email: string;
  password: string;
};

const Login = () => {
  const [form] = Form.useForm();
  const onFinish: FormProps<TLogin>["onFinish"] = (values) => {
    console.log("Received values of form:", values);
    message.success("User logged in successfully");
    form.resetFields();
  };
  const onFinishFailed: FormProps<TLogin>["onFinishFailed"] = (errorInfo) => {
    message.error("Login Submission failed!");
    console.log("errorInformation :", errorInfo);
  };
  return (
    <section className="login-section">
      <Form
        form={form}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        id="login-form"
        layout="vertical"
      >
        <Form.Item
          label="Email"
          name="email"
          style={{ fontWeight: "bold" }}
          rules={[{ required: true, message: "Please input your Email!" }]}
        >
          <Input
            placeholder="Type Your Email"
            style={{ fontWeight: "normal" }}
            size="large"
            type="email"
            allowClear
          />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          style={{ fontWeight: "bold" }}
          rules={[
            { required: true, message: "Please input your Password!" },
            { type: "string", min: 6 },
          ]}
        >
          <Input.Password
            placeholder="Type Your Password"
            style={{ fontWeight: "normal" }}
            size="large"
            type="password"
            allowClear
          />
        </Form.Item>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
        {/* Remebering to Regester */}
        <div className="text-lg font-medium mt-6">
          <span>Didn't have an account yet?</span>
          {""}
          <span>
            <Button className="text-lg font-medium" href="/signup" type="link">
              Register
            </Button>
            {""}Please!!
          </span>
        </div>
      </Form>
    </section>
  );
};

export default Login;
