import React, {useEffect} from 'react';
import "./App.css";
import styles from "./styles";
import {Layout,Image,Typography} from "antd";
import Home from './Components/Home';
import {useDispatch} from "react-redux";
import { getStories } from './redux/Actions/storiesActions';

const {Title} = Typography;
const {Header, Footer} = Layout;

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getStories());
  },[dispatch]);

  return (
    <Layout style ={styles.layout}>
      <Header style={styles.header}>
        <Image style ={styles.image} 
         width="45" preview="false" 
          src=""></Image> &nbsp;
        <Title style ={styles.title}>Instaverse</Title>
      </Header>
      <Home/>
      <Footer style ={styles.footer}>2023, @Instaverse</Footer>
    </Layout>
  )
}

export default App