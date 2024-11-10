import { configDotenv } from "dotenv";
import express from "express";
import cors from 'cors'
import cookieParser from "cookie-parser";
import connection from "./config/db.js";
import routeForUser from "./route/user.js";
// parsing the env file...
configDotenv();

const PORT = process.env.PORT;


// initialize the express...
const app = express();

// to handle cors errors...
app.use(cors({
    origin : 'http://localhost:5173',
    credentials : true
}));

// for datea parser;
app.use(express.json());
app.use(cookieParser())


// setting up db connection...
connection();


app.get('/data', (req,res)=>{
    res.json({data : "Hello, world"})
});

// custom Routes...
app.use('/', routeForUser);






// listening port...
app.listen(PORT , ()=>{
    console.log('server is running on port', PORT);
})