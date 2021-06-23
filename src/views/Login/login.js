import React from "react";
import "./login.scss"
import { Form, Input, Button, Row, Col, } from 'antd';
class Login extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }
  onFinish = (values) => {
    console.log('Success:', values);
  };

  onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };
  render() {
    return (
      <main className="login">
        <div className="content">
          <div className="content-top">
            <span className="fff fz-16">注册</span>
            <span className="fz-13 fff op-3">登录</span>
          </div>
          <Form

            name="basic"
            initialValues={{ remember: true }}
            onFinish={this.onFinish}
            onFinishFailed={this.onFinishFailed}
          >
            <Form.Item
              name="username"
              rules={[{ required: true, message: 'Please input your username!' }]}
            >
              <Input placeholder="username" />
            </Form.Item>

            <Form.Item
              name="password"
              rules={[{ required: true, message: 'Please input your password!' }]}
            >
              <Input.Password placeholder="password" />
            </Form.Item>

            <Form.Item
              name="password"
              rules={[{ required: true, message: 'Please input your password!' }]}
            >
              <Input.Password placeholder="password" />
            </Form.Item>
            <Row gutter={13}>
              <Col className="gutter-row" span={17}>
                <div ><Input placeholder="code" /></div>
              </Col>
              <Col className="gutter-row" span={5}>
                <div >
                  <Button type="primary" htmlType="submit">
                    Submit
                  </Button>
                </div>
              </Col>
            </Row>


            <Form.Item>
              <Button type="primary" htmlType="submit" block className="mt-20">
                Submit
        </Button>
            </Form.Item>
          </Form>
        </div>
      </main>
    )
  }
}
export default Login