import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import cors from 'cors';
import dotenv from "dotenv";
const PORT = process.env.PORT || 8700;
const app = express();
import storyRoute from './routes/stories.js';


dotenv.config();
app.use(express.json());
app.use(bodyParser.json({limit:"32mb", extended:true}));
app.use(bodyParser.urlencoded({limit:"32mb", extented:true}));
app.use(cors());


app.get('/',(req,res) => {
    res.status(200).send("Hii there!,It's instavers")
})

app.use("/stories", storyRoute);
// app.use("/auth", authentication)


mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser:true, useUnifiedTopology:true
}).then(()=>{
    console.log("Database connection is established")
}).catch((err)=>{
    console.log(err.message)
});

app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
});

