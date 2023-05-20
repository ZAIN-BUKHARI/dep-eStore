import ConnectMongoDB from '../../../middleware/mongoose'
import Order from '../../../models/Order'

const handler= async (req, res)=> {
    const {_id,Marked}=req.body
    if(!Marked){
        console.log('if')
        let orders = await Order.findByIdAndUpdate({_id},{status:''})
        orders.save()
        res.status(200).send({orders})
    }
    else{
        console.log('else')
        let orders = await Order.findByIdAndUpdate({_id},{status:'done'})
        orders.save()
        res.status(200).send({orders})
    }
}
  
  
  
export default   ConnectMongoDB(handler)