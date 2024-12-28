import { configDotenv } from "dotenv";
import express from "express";
import cors from 'cors'
import cookieParser from "cookie-parser";
import connection from "./config/db.js";
import { authRouter } from "./controller/auth.controller.js";
import { userRouter } from "./controller/user.controller.js";

// parsing the env file...
configDotenv();

const PORT = process.env.PORT;

export const secretKey = `${process.env.HASHKEY}`;

// initialize the express...
const app = express();
app.use(cookieParser())

// for data parser;
app.use(express.urlencoded({extended: false}))
app.use(express.json());




// to handle cors errors...
app.use(cors({
    origin : 'http://localhost:5173',
    credentials : true
}));



// setting up db connection...
connection();




// custom Routes...
app.use('/', authRouter);
app.use('/user', userRouter)




// listening port...
app.listen(PORT , ()=>{
    console.log('server is running on port', PORT);
})