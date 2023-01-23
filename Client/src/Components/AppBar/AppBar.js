import React from 'react';
import styles from "./styles.js";
import {Link} from "react-router-dom";
import {Layout, Image,Typography, Button, Avatar} from "antd";


const {Title,Text} = Typography;
const {Header, } = Layout;

const AppBar = () => {
    const user =null;
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
                    G
                </Avatar>
                <Title style={styles.title} level={4}>
                    Gaurav Gupta
                </Title>
                <Button htmlType='button' style={styles.logout}>
                    Log Out
                </Button>
            </div>
        )}
      </Header>
  )
}

export default AppBar
