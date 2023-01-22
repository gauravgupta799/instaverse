import {Router} from "express";
import { getStories,createStory,updateStory } from "../controllers/storiesController.js";

const router = Router();

router.get("/", getStories);
router.post('/createStory', createStory);
router.patch("/:id" , updateStory);

export default router;