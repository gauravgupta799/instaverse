import React,{useState} from 'react';
import {useDispatch} from "react-redux";
import styles from "./styles";
import {Card, Tooltip, Typography,Image,Row,Col} from "antd";
import { EditOutlined, DeleteTwoTone, HeartTwoTone} from "@ant-design/icons"
import moment from "moment";
import { deleteStory, likeStory  } from '../../redux/Actions/storiesActions';


const {Meta} = Card;
const {Link,Paragraph, Text} = Typography;

const Story = ({story, setSelectedId}) => {
    const dispatch = useDispatch();
    const [expand, setExpand] = useState(true);
    const user = JSON.parse(localStorage.getItem('profile'))
    
    const cardActions = [
        <div style={styles.actions}>
            <Tooltip placement="top" title="Like" color="magenta" 
            onClick={()=>{}}>
                <HeartTwoTone twoToneColor="magenta" onClick={()=>dispatch(likeStory(story._id))}/>
                &nbsp; {story?.likes.length} &nbsp;
            </Tooltip>
        </div>,
        <Tooltip placement="top" title="Edit">
            <EditOutlined  onClick={()=>setSelectedId(story._id)}/>
        </Tooltip>,
        <Tooltip placement="top" title="Delete" color="red">
            <DeleteTwoTone  twoToneColor="red"  onClick={()=> dispatch(deleteStory(story._id))}/>
        </Tooltip>
    ]

    return (
        <>
        <div className="site-card-wrapper">
            <Card style={styles.card}
                cover={<Image src= {story?.image} style={styles.image}/>}
                actions={
                    user?.result?._id === story?.userId ?
                    cardActions : user?.result ?
                    cardActions.slice(0, 1) : null
                }
            >
                <Meta title={story.username} />
                <Paragraph
                    style={{margin:0}}
                    ellipsis={{
                        rows:2,
                        expandable:true,
                        symbol:"more",
                        onExpand:()=>{ setExpand(true)},
                        onEllipsis:()=>{ setExpand(false)}
                    }}
                >
                {story.caption}
                </Paragraph>
                {expand ?
                    <Link href="#">{story.tags.split(" ").map((tag)=>`#${tag} `)}</Link>
                    : null 
                } <br/>
                <Text type="secondary">{moment(story.postDate).fromNow()}</Text>
            </Card>
        </div>
        </>   
    )
}

export default Story
