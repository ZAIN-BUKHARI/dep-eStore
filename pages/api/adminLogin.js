import Admin from '../../models/Admin'
import ConnectMongoDB from '../../middleware/mongoose'

const handler= async (req, res)=> {
    if(req.method=='POST'){
      console.log(req.body.email)
       let user = await Admin.findOne({"email":req.body.email})
    
       if(user){
        res.status(200).json({success:true})
       }
       else{
        res.status(200).json({error:false})
       }
 
        }
       
   
  }

  
  
  export default   ConnectMongoDB(handler)