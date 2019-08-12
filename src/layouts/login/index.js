import React, { PureComponent } from 'react'
import { Form, Icon, Input, Button } from 'antd'
import { inject } from 'mobx-react'
import './index.less'
const FormItem = Form.Item

@inject('loginStore')
class Login extends PureComponent {
  handleSubmit = e => {
    e.preventDefault()
    this.props.form.validateFields((err, values) => {
      if (!err) {
        // 保存登录信息
        sessionStorage.setItem('userName', values.userName)
        this.props.loginStore.setUsername(values.userName)
        this.props.history.push('/home')
      }
    })
  }

  render() {
    const { getFieldDecorator } = this.props.form
    return (
      <div className="login-page">
        <div className="login-box">
          <div className="title"> react 项目模板 </div>
          <Form onSubmit={this.handleSubmit}>
            <FormItem>
              {getFieldDecorator('userName', {
                rules: [
                  {
                    required: true,
                    message: '请输入用户名!'
                  }
                ]
              })(
                <Input
                  prefix={
                    <Icon
                      type="user"
                      style={{
                        color: 'rgba(0,0,0,.25)'
                      }}
                    />
                  }
                  placeholder="用户名"
                />
              )}
            </FormItem>
            <FormItem>
              {getFieldDecorator('password', {
                rules: [
                  {
                    required: true,
                    message: '请输入密码!'
                  }
                ]
              })(
                <Input
                  prefix={
                    <Icon
                      type="lock"
                      style={{
                        color: 'rgba(0,0,0,.25)'
                      }}
                    />
                  }
                  type="password"
                  placeholder="密码"
                />
              )}
            </FormItem>
            <FormItem>
              <Button
                type="primary"
                htmlType="submit"
                className="login-form-button">
                登 录
              </Button>
            </FormItem>
          </Form>
        </div>
      </div>
    )
  }
}
const LoginForm = Form.create({ name: 'login' })(Login)
export default LoginForm
