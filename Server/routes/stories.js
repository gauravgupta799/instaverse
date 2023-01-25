import {Router} from "express";
import { 
    getStories,createStory,
    updateStory, deleteStory,
    likeStory 
} from "../controllers/storiesController.js";
import authentication from "../middleware/authentication.js";

const router = Router();

router.get("/", getStories);
router.post('/createStory', authentication, createStory);
router.patch("/:id", authentication, updateStory);
router.delete("/:id",authentication, deleteStory);
router.patch("/:id/likeStory",authentication, likeStory);

export default router;