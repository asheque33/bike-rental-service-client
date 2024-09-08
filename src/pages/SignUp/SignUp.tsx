import React from "react";
import { Button, Form, FormProps, Input, message } from "antd";
import "./SignUp.css";
export type TSignUp = {
  name: string;
  email: string;
  password: string;
  phone: string;
  address: string;
};

const SignUp = () => {
  const [form] = Form.useForm();
  const onFinish: FormProps<TSignUp>["onFinish"] = (values) => {
    console.log("Received values of form:", values);
    message.success("User signed up successfully");
    form.resetFields();
  };
  const onFinishFailed: FormProps<TSignUp>["onFinishFailed"] = (errorInfo) => {
    message.error("Signed up submission failed!");
    console.log("errorInformation : ", errorInfo);
  };
  return (
    <section className="signup-section ">
      <Form
        form={form}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        layout="vertical"
        className="signup-form"
      >
        <Form.Item
          label="Name"
          name="name"
          style={{ fontWeight: "bold" }}
          rules={[{ required: true, message: "Please input your Name!" }]}
        >
          <Input
            placeholder="Type Your Name"
            style={{ fontWeight: "normal" }}
            size="large"
            type="text"
            autoFocus
            allowClear
          />
        </Form.Item>

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

        <Form.Item
          label="Phone Number"
          name="phone"
          style={{ fontWeight: "bold" }}
          rules={[
            { required: true, message: "Please input your Phone Number!" },
            {
              pattern: /^\d{11}$/,
              message: "phone must be 11 characters!",
            },
          ]}
        >
          <Input
            placeholder="Type Your Phone Number"
            style={{ fontWeight: "normal" }}
            size="large"
            allowClear
          />
        </Form.Item>

        <Form.Item
          label="Address"
          name="Address"
          style={{ fontWeight: "bold" }}
          rules={[{ required: true, message: "Please input your Address!" }]}
        >
          <Input
            placeholder="Type Your Address"
            style={{ fontWeight: "normal" }}
            size="large"
            type="text"
            allowClear
          />
        </Form.Item>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
        <div className="mt-6 text-lg font-medium">
          <p>
            <span>Already have an account?</span>
            {""}
            <span>
              <Button className="text-lg font-medium" href="/login" type="link">
                Login
              </Button>
              {""}Please!!
            </span>
          </p>
        </div>
      </Form>
    </section>
  );
};

export default SignUp;
