import {model, models, Schema} from "mongoose";

const OrderSchema = new Schema({
    products: Object,
    name: String, 
    email: String,
    address: String,
    city: String,
    paid: {type:Number, defaultValue:0},
}, {timestamp: true});

const Order = models?.Order || model('Order', OrderSchema);

export default Order;