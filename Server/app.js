import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import cors from 'cors';
import dotenv from "dotenv";
const PORT = process.env.PORT || 8700;
const app = express();
import storyRoute from './routes/stories.js';
import userRoute from './routes/users.js';
// const monogo_URI = process.env.MONGO_URL;

 const MONGO = "mongodb+srv://gauravcom:gupta123@cluster0.wzm9s.mongodb.net/instavers?retryWrites=true&w=majority"
dotenv.config();
app.use(express.json());
// app.use(express.urlencoded({extended: true}));
app.use(bodyParser.json({extended:true}));
app.use(bodyParser.urlencoded({limit:"32mb", extented:true}));
app.use(cors());

app.get('/',(req,res) => {``
    res.status(200).send("Hii there!,It's instavers")
})

app.use("/stories", storyRoute);
app.use("/auth", userRoute)

mongoose.set("strictQuery", true);
mongoose.connect(MONGO, { useNewUrlParser:true, useUnifiedTopology:true
}).then(()=>{
    console.log("Database connection is established")
}).catch((err)=>{
    console.log(err.message)
});

app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
});