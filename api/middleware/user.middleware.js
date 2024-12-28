import jwt from "jsonwebtoken";



export const AuthUser = (req,res,next)=>{
    const secret = `${process.env.HASHKEY}`;

    const token = req.cookies.token;
    
        if(token){     
            jwt.verify(token, secret, (err, data)=>{
                if(err){
                    return res.status(401).json({ error: 'Invalid token' }); 
                }
                 req.user = data;
                 next();
            });     
        }else{
            req.user = null;
            next();
        }
}