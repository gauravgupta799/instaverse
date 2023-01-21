import {Router} from "express";
import { getStories,createStory } from "../controllers/storiesController.js";

const router = Router();


router.get("/", getStories);
router.post('/createStory', createStory);


export default router;