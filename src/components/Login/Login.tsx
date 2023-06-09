import { Button, Form, Input } from 'antd';
import { useAuth } from '../../context/AuthProvider';
import { useLocation, useNavigate } from 'react-router-dom';

const Login: React.FC = () => {
  const auth = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from || '/';
  
  const onFinish = (values: any) => {
    console.log('Success:', values);
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    //@ts-ignore
    auth && auth.signin(values.username, () => {
      navigate(from, {
        replace: true,
      })
    })
  };
  
  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <Form
      name="basic"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 10 }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item
        label="Логин"
        name="username"
        rules={[{ required: true, message: 'Please input your username!' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Пароль"
        name="password"
        rules={[{ required: true, message: 'Please input your password!' }]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item wrapperCol={{ offset: 10, span: 10 }}>
        <Button type="primary" htmlType="submit">
          Войти
        </Button>
      </Form.Item>
    </Form>
  )
}

export default Login
