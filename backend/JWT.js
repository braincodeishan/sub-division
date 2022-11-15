const {sign,verify}=require('jsonwebtoken')
const enckey=process.env.ENCKEY;
const signJWT= async(user)=>{
    try{
        const signedToken=sign(user.username,enckey,{
            expiresIn:24*60*60*1000,
        })
        return signedToken;

    }catch(err){
        return error;
    }
}

const verifyToken= async(req,res,next)=>{
    try{
        const verifyToken=verify(req.cookies,enckey,{
            expiresIn:24*60*60*1000,
        })
        return signedToken;

    }catch(err){
        return error;
    }
}