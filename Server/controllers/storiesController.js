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

const deleteStory = async(req, res)=>{
  const Id = req.params.id;
  console.log(Id)
  try {
    await Story.findByIdAndDelete(Id);
    res.status(200).json({message:"Story deleted successfully."});
  } catch (error) {
    console.log(error.message)
  }
}

const likeStory = async(req, res)=>{
  const { id } = req.params;
  try {
    const story = await Story.findById(id);
    const updatedStory = await Story.findByIdAndUpdate(id, 
      {
        likes:story.likes + 1
      },
      {
        new: true
      }
    );
    res.status(200).json(updatedStory);
  } catch (error) {
    console.log(error.message)
  }
}

export { getStories,createStory, updateStory, deleteStory,likeStory }