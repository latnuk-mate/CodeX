import {Router} from 'express'
import { AuthUser } from '../middleware/user.middleware.js';

const router = Router();

router.get('/', AuthUser, (req,res)=>{
    
    if(req.user){
        res.json({user: req.user})
    }else{
        res.json({user: null})
    }
})






export const userRouter = router;
