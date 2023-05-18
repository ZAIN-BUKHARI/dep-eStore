import User from '../../models/User'
import ConnectMongoDB from '../../middleware/mongoose'
import jsonwebtoken from 'jsonwebtoken'
const CryptoJS = require("crypto-js");

const handler= async (req,res)=>{
    if(req.method=='POST'){
            let token =req.body.token
            let find= jsonwebtoken.verify(token,'secret123')
            let user= await User.findOne({email:find.email})
            const bytes  = CryptoJS.AES.decrypt(user.password, 'secret123')
            const decryptPass = bytes.toString(CryptoJS.enc.Utf8);
            console.log(decryptPass)
            if(req.body.password!=''){

                if(decryptPass==req.body.password && req.body.newpassword==req.body.confirmpassword){
    
                    let settings = await User.findOneAndUpdate({email:find.email},{password:CryptoJS.AES.encrypt(req.body.confirmpassword,'secret123').toString()})
                    res.status(200).json({success:true})
                }
                else{
                    
                    res.status(200).json({error:"Invalid password :]"})
                }
            }
            else{
                res.status(200).json({error:"Cannot set empty password :]"})
            }
        

    }
   

}

export default   ConnectMongoDB(handler)