import React,{useState} from 'react';
import styles from './styles';
import {useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import {Form, Input, Button, Card, Layout, Typography } from "antd"
import {UserOutlined, LockOutlined,MailOutlined} from "@ant-design/icons";
import { login, signup} from '../../redux/Actions/authentication';


const {Title} = Typography;

const AuthForm = () => {
    const [isLogin , setIsLogin] = useState(localStorage.getItem('profile'));
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [form] = Form.useForm();

    const onSubmit = (formValues) => {
        if(isLogin) {
            dispatch(login(formValues, navigate))
        }else{
            dispatch(signup(formValues, navigate))
        }
    }
    const switchMode = () => {
        setIsLogin((prevIsLogin) => !prevIsLogin)
    }
  return (
    <Layout style ={styles.container}>
      <Card
        style= {styles.card}
        title={
            <Title level={4} style={{textAlign: 'center'}}>
                {isLogin ? "Login to " : "Join"} Instaverse
            </Title>
        }
      >
        <Form
            name="authform"
            form={form}
            size="large"
            wrapperCol={{ span: 20, offset: 2}}
            onFinish ={onSubmit}
        >
            {isLogin || (
                <>
                    <Form.Item
                     name="username"
                     rules={[
                        {
                            required:true,
                            message:"Please enter your username"
                        }
                     ]}
                    >
                        <Input type="text" prefix={<UserOutlined/>} placeholder="Username"/>
                    </Form.Item>
                </>
            )}
            <Form.Item
                name="email"
                rules={[
                {
                    required:true,
                    message:"Please enter valid email"
                }
                ]}
            >
                <Input type="email" prefix={<MailOutlined/>} placeholder="Email"/>
            </Form.Item>
            <Form.Item
                name="password"
                rules={[
                {
                    required:true,
                    message:"Please enter your password"
                }
                ]}
            >
                <Input.Password  type="password" prefix={<LockOutlined/>} placeholder="Password"/>
            </Form.Item>
            { isLogin || (
                <Form.Item
                    name="confirmPassword"
                    rules={[
                        {
                            required:true,
                            message:"Please repeat your password"
                        }
                    ]}
                >
                    <Input.Password  type="password" prefix={<LockOutlined/>} placeholder="Confirm Password"/>
                </Form.Item>
            )}
            
            <Form.Item>
                <Button htmlType='submit' typeof='primary'>
                    {isLogin ? "Log In" : "Join"}
                </Button>
                <span style={{margin:"0px 10px 30px 20px"}}> Or</span>
                <Button type='link' onClick={switchMode}>
                    { isLogin ? "Register now" : "Have an account?"}
                </Button>
            </Form.Item>
        </Form>
      </Card>
    </Layout>
  )
}

export default AuthForm
