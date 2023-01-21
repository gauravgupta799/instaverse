import React from 'react';
import styles from "./styles";
import {Row} from "antd";
import Story from '../Story';
import {useSelector} from "react-redux";

const StoryList = () => {
    const stories = useSelector((state)=> state.stories);
    console.log("stories", stories);
    return (
        <Row gutter={[48, 32]}>
            <Story/> 
        </Row>
    )
}

export default StoryList
