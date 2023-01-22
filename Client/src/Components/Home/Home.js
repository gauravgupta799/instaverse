import React from 'react';
import styles from "./styles";
import { Layout,Row, Col } from 'antd';
import StoryForm from '../StoryForm/index.js';
import StoryList from '../StoryList/StoryList.js';

const {Sider, Content } = Layout;

const Home = () => {
  return (
    <Layout>
      <Sider width={400} style={styles.sider}>
          <StoryForm/>
      </Sider>
      <Content style={styles.content}>
          <StoryList/>
      </Content>
    </Layout>
  )
}

export default Home;