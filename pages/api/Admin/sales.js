import ConnectMongoDB from '../../../middleware/mongoose'
import Order from '../../../models/Order'

const handler= async (req, res)=> {
 
    let allOrder=await Order.find()
    res.status().send({allOrder})
    
}
  
  
  
export default   ConnectMongoDB(handler)