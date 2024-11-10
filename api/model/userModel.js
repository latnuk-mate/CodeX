import mongoose from "mongoose";


const userSchema = mongoose.Schema({
    userName:{
        type: String,
        required: true
    },

    userEmail:{
        type: String,
        required: true
    },

    userPhone:{
        type: Number,
        required: true
    },

    userPass:{
        type: String,
        required: true
    },

    createdAt:{
        type: Date,
        default : Date.now()
    }
});


const User = mongoose.model('User', userSchema);

export default User;