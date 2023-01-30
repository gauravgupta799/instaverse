import React,{useState, useEffect} from 'react';
import styles from "./styles.js";
import {useDispatch} from "react-redux";
import {Link,useNavigate, useLocation} from "react-router-dom";
import {Layout, Image,Typography, Button, Avatar} from "antd";
import { LOGOUT } from '../../constants/actionTypes.js';

const {Title,Text} = Typography;
const {Header, } = Layout;

const AppBar = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const location = useLocation();
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
 
    useEffect(()=>{
        const token = user?.token;
        if(token){
        }
        setUser(JSON.parse(localStorage.getItem('profile')))
    },[location]);

    const logout =()=>{
        dispatch({type:LOGOUT})
        setUser(null);
        navigate("/");
    }
  return (
    <Header style={styles.header}>
        <Link to ="/">
            <div style={styles.homeLink}> 
                <Image src="" style ={styles.image} width="45" preview="false" /> &nbsp;
                <Title style ={styles.title}>Instaverse</Title>
            </div>
        </Link>
        { !user ? (
            <Link to="/auth">
                <Button htmlType='button' style={styles.login}>
                   <Text style={styles.text}>Log In</Text>
                </Button>
                {/* <Button htmlType='button' style={styles.signin}>
                    <Text>Sign In</Text>
                </Button> */}
            </Link>
        ) : (
            <div style={styles.userInfo}>
                <Avatar style={styles.avatar} alt="username" size="large">
                    {user?.result?.username?.charAt(0)?.toUpperCase()}
                </Avatar>
                <Title style={styles.title} level={4}>
                   {user?.result?.username}
                </Title>
                <Button onClick={logout} htmlType='button' style={styles.logout}>
                    Log Out
                </Button>
            </div>
        )}
      </Header>
  )
}

export default AppBar
