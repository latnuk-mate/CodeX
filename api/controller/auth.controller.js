import {Router} from 'express'
import bcrypt from 'bcrypt'
import User from '../model/userModel.js';
import jwt from 'jsonwebtoken'
import { secretKey } from '../app.js';

const router = Router();

const salt = bcrypt.genSaltSync(10);


const cookieOptions = {
    httpOnly: true,           
    sameSite: 'None', 
    secure: true      
};




router.post('/register', async(req,res)=>{
    const {name , email, phone, password} = req.body;
    try {
        const newUser = await User.create({
            userName:name,
            userEmail: email,
            userPhone : phone,
            userPass: bcrypt.hashSync(password, salt),
            createdAT: new Date()
        });
    
        await newUser.save();
        res.json({
            name,
            email,
            phone
        });
    } catch (error) {
        console.log(error.code)
    }

});

router.post('/login', async(req,res)=>{
    const {email , password} = req.body;

    try {
        const user = await User.findOne({userEmail:email});
        const userDoc = {
            id:user.id,
            name:user.userName,
            email:user.userEmail
        }

        if(user){
            if(bcrypt.compareSync(`${password}` , user.userPass)){
                jwt.sign(userDoc, secretKey, (err, data)=>{
                    if(err){
                        throw err;
                    }
                    // set cookie for furthur refercence...
                    res.cookie('token', data, cookieOptions);     
                    res.json(userDoc);
                });
                 
            }else{
                res.json('password not matched')
            }
        }else{
            res.status(404).json({ message: 'User not found' })
        }
    } catch (error) {
        console.error(error)
    }
});




router.get('/logout', (req,res)=>{
    res.clearCookie('token', cookieOptions);
    res.json("succesfully logged out.")
})


export const authRouter = router;