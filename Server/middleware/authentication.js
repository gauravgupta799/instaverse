import jwt from "jsonwebtoken";
const secretKey = "gaurav786";

const authentication = async(req, res, next)=>{
    try {
        const token = req.headers.authorization.split('')[1];
        if(token){
           let decodedData =  jwt.verify(token, secretKey);
           req.userId = decodedData.id;
        }
        next();
    } catch (error) {
        res.status(500).json({ error: error.message });
        console.log("AuthMiddleware",error.message);
    }
}

export default authentication;