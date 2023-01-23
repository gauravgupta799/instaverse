import React, {useEffect} from 'react';
import "./App.css";
import styles from "./styles";
import {Layout} from "antd";
import Home from './Components/Home';
import {useDispatch} from "react-redux";
import { getStories } from './redux/Actions/storiesActions';
import AppBar from './Components/AppBar';
import {Routes, Route} from "react-router-dom";
import AuthForm from './Components/AuthFrom/AuthForm';

const {Footer} = Layout;

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getStories());
  },[dispatch]);

  return (
    <Layout style ={styles.layout}>
      <AppBar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/auth" element={<AuthForm/>} />
      </Routes>
      <Footer style ={styles.footer}>2023, @Instaverse</Footer>
    </Layout>
  )
}

export default App