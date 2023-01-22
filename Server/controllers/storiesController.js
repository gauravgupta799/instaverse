import mongoose from "mongoose";
import Story from "../models/storiesContent.js"


const getStories = async(req, res)=>{
  try {
    const story = await Story.find();
    res.status(200).json(story);
  } catch (error) {
    res.status(500).json({message: error.message});
  }
}

const createStory = async(req, res)=>{
    const body = req.body;
    const newStory = new Story({ ...body});
    try {
        await newStory.save();
        res.status(200).json(newStory);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}

const updateStory = async(req, res)=>{
  const {id:_id} = req.params;
  const story = req.body;
  try {
    if(!mongoose.Types.ObjectId.isValid(_id)){
      return res.status(404).json({message:"This Id doesn't belong to any story."})
    }
    const updatedStory = await Story.findByIdAndUpdate(_id, story,
     { new: true });
    res.status(200).json(updatedStory);
  } catch (error) {
    res.status(500).json({message: error.message});
  }
}

export { getStories,createStory, updateStory }