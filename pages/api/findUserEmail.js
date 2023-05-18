import Order from '../../models/Order'
import ConnectMongoDB from '../../middleware/mongoose'
import jsonwebtoken from 'jsonwebtoken'

const handler= async (req,res)=>{
    if(req.method=='POST'){
        const token =req.body.token
        const data= jsonwebtoken.verify(token,'secret123')
        
        let order = await Order.find({email:data.email})
        res.status(200).json({ order })

    }
   

}

export default   ConnectMongoDB(handler)