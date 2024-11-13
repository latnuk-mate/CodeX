import {Router} from 'express'
import bcrypt from 'bcrypt'
import User from '../model/userModel.js';
import jwt from 'jsonwebtoken'

const router = Router();

const salt = bcrypt.genSaltSync(10);
const secret = process.env.HASHKEY;


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
            email:user.userEmail,
            phone:user.userPhone
        }

        if(user){
            if(bcrypt.compareSync(`${password}` , user.userPass)){
                // res.json(user)
                jwt.sign(userDoc, `${secret}`, {expiresIn: '1hr'} ,(err, data)=>{
                    if(err){
                        throw err;
                    }
                    // set cookie for furthur refercence...
                    res.cookie('token', data, {
                        httpOnly: true,
                        maxAge: 3600000
                    }).json(userDoc);
                })
            }else{
                res.json('password not matched')
            }
        }
    } catch (error) {
        console.error(error.code)
    }
});

router.get('/logout', (req,res)=>{
    res.cookie('token', "");
    res.json("succesfully logged out.")
})

const routeForUser = router;

export default routeForUser;


