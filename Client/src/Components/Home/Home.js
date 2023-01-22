import React, {useState} from 'react';
import styles from "./styles";
import { Layout,Row, Col } from 'antd';
import StoryForm from '../StoryForm/index.js';
import StoryList from '../StoryList/StoryList.js';

const {Sider, Content } = Layout;

const Home = () => {
  const [selectedId, setSelectedId] = useState(null);

  return (
    <Layout>
      <Sider width={400} style={styles.sider}>
          <StoryForm selectedId={selectedId} setSelectedId={setSelectedId}/>
      </Sider>
      <Content style={styles.content}>
          <StoryList setSelectedId={setSelectedId}/>
      </Content>
    </Layout>
  )
}

export default Home;