import React,{useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux"
import styles from "./styles"
import {Card, Form ,Input, Typography, Button} from "antd";
import FileBase64 from "react-file-base64";
import {Link} from "react-router-dom"
import { createStory, updateStory } from '../../redux/Actions/storiesActions';

const {Title,Text} = Typography;

const StoryForm = ({selectedId, setSelectedId}) => {
    const story = useSelector((state)=> selectedId ? state?.stories?.find(story => story._id === selectedId) : null); 
    const[form] = Form.useForm();
    const dispatch = useDispatch();
    const user = JSON.parse(localStorage.getItem('profile'));
    const username = user?.result?.username;

    const onSubmit = (formValues) => {
        selectedId ? dispatch(updateStory(selectedId, formValues)) :
        dispatch(createStory({...formValues, username}));
        resetFormFields();
    }

    useEffect(()=> {
        if(story){
            form.setFieldsValue(story)
        }
    }, [story, form]);

    const resetFormFields = () => {
        form.resetFields();
        setSelectedId(null);
    }
    
    if(!user){
        <Card style={styles.formCard}>
            <Title level={4}>
                <span style={styles.formTitle}>Welcome To Instavers</span><br/>
                <span>Please
                 <Link to="/auth">Login</Link> or 
                  <Link to="/auth">Register</Link> 
                 for sharing instant moments
                 or ideas.
                </span>
            </Title>
        </Card>
    }

    return (
        <Card 
            style={styles.formCard}
            title={
                <Title align="center" level={4} style= {styles.formTitle}>
                   {selectedId ? "Editing" : "Share"} a story
                </Title>
            }    
        >
            <Form
                form={form}
                labelCol={{ span: 6}}
                wrapperCol ={{ span: 16}}
                layout ="horizontal"
                size="middle"
                onFinish={onSubmit}
            >
                {/* <Form.Item name="username" label="Username" rules ={[{ "required":true}]}>
                    <Input allowClear />
                </Form.Item> */}
                <Form.Item name="caption" label="Caption"  rules ={[{ "required":true}]}>
                    <Input.TextArea 
                        allowClear 
                        autoSize={{
                            minRows:2, maxRows:6
                        }}
                    />
                </Form.Item>
                <Form.Item name="tags" label="Tags">
                    <Input.TextArea 
                        allowClear 
                        autoSize={{
                            minRows:2, maxRows:6
                        }}
                    />
                </Form.Item>
                <Form.Item name="image" label="Image" rules={[{ "required":true}]}>
                    <FileBase64
                        type="file"
                        multiple={false}
                        onDone={(e)=>{
                            form.setFieldsValue({ image: e.base64})
                        }}
                    />
                </Form.Item>
                <Form.Item
                    wrapperCol={{
                        span:16,
                        offset:6
                    }}
                >
                    <Button type="primary" block htmlType="submit">
                        {selectedId ? "UPDATE" : "SHARE"}
                    </Button> 
                </Form.Item>
                { selectedId  && (
                    <Form.Item
                    wrapperCol={{
                        span:16,
                        offset:6
                    }}
                >
                    <Button type="primary"
                     block 
                     htmlType="button"
                     danger
                     onClick={resetFormFields}
                     >
                        Discard
                    </Button>
                </Form.Item>
                )
                }
            </Form>
        </Card>
    )
}

export default StoryForm
