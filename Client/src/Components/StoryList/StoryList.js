import React from 'react';
// import styles from "./styles";
import {Row} from "antd";
import Story from '../Story';


const StoryList = () => {
    return (
        <Row gutter={[48, 32]}>
            <Story/>
            <Story/>
            <Story/>
        </Row>
    )
}

export default StoryList
