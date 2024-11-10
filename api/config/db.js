import mongoose from "mongoose";

const connection = async()=>{
    try {
        const db = await mongoose.connect(process.env.MONGO_URI, { 
            useUnifiedTopology : true,
    });
    console.log("database is connected...")
    } catch (error) {
        console.error(error.message)
    }
}

export default connection;