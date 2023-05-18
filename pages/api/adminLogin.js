import Admin from '../../models/Admin'
import ConnectMongoDB from '../../middleware/mongoose'
var CryptoJS = require("crypto-js");
var jwt = require('jsonwebtoken');

const handler= async (req, res)=> {
    if(req.method=='POST'){
       let user = await Admin.findOne({"email":req.body.email})
    //    
       if(user){
      
        const bytes  = CryptoJS.AES.decrypt(user.password, 'secret123')
        const originalText = bytes.toString(CryptoJS.enc.Utf8)
        
        if(req.body.password==originalText){
            const token = jwt.sign( {email:req.body.email},'secret123', {expiresIn: '10m'})
        res.status(200).json({success:true,token})
       }
       else{
        res.status(200).json({error:false})
       }
    }
       else{
        res.status(200).json({error:"Outside error"})
       }
 
        }
       
   
  }

  
  
  export default   ConnectMongoDB(handler)